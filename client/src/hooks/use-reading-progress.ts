import { useState, useEffect, useCallback } from 'react';

interface ReadingProgress {
  scrollPosition: number;
  readTheses: number[];
  lastVisited: string;
}

const STORAGE_KEY = 'defense-reformation-reading-progress';

export function useReadingProgress() {
  const [progress, setProgress] = useState<ReadingProgress>({
    scrollPosition: 0,
    readTheses: [],
    lastVisited: new Date().toISOString(),
  });

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setProgress(parsed);
      } catch (error) {
        console.error('Failed to parse reading progress:', error);
      }
    }
  }, []);

  const saveProgress = useCallback((updates: Partial<ReadingProgress>) => {
    setProgress((prev) => {
      const newProgress = { 
        ...prev, 
        ...updates,
        lastVisited: new Date().toISOString() 
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newProgress));
      return newProgress;
    });
  }, []);

  const markThesisAsRead = useCallback((thesisNumber: number) => {
    setProgress((prev) => {
      if (prev.readTheses.includes(thesisNumber)) {
        return prev;
      }
      const newProgress = {
        ...prev,
        readTheses: [...prev.readTheses, thesisNumber].sort((a, b) => a - b),
        lastVisited: new Date().toISOString(),
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newProgress));
      return newProgress;
    });
  }, []);

  const updateScrollPosition = useCallback((position: number) => {
    saveProgress({ scrollPosition: position });
  }, [saveProgress]);

  const clearProgress = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setProgress({
      scrollPosition: 0,
      readTheses: [],
      lastVisited: new Date().toISOString(),
    });
  }, []);

  const getProgressPercentage = useCallback(() => {
    return Math.round((progress.readTheses.length / 18) * 100);
  }, [progress.readTheses.length]);

  return {
    progress,
    saveProgress,
    markThesisAsRead,
    updateScrollPosition,
    clearProgress,
    getProgressPercentage,
  };
}
