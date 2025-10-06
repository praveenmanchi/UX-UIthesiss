import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';

interface ReadingProgress {
  scrollPosition: number;
  readTheses: number[];
  lastVisited: string;
}

interface ReadingProgressContextType {
  progress: ReadingProgress;
  saveProgress: (updates: Partial<ReadingProgress>) => void;
  markThesisAsRead: (thesisNumber: number) => void;
  updateScrollPosition: (position: number) => void;
  clearProgress: () => void;
  getProgressPercentage: () => number;
}

const ReadingProgressContext = createContext<ReadingProgressContextType | null>(null);

const STORAGE_KEY = 'defense-reformation-reading-progress';

export function ReadingProgressProvider({ children }: { children: ReactNode }) {
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

  return (
    <ReadingProgressContext.Provider
      value={{
        progress,
        saveProgress,
        markThesisAsRead,
        updateScrollPosition,
        clearProgress,
        getProgressPercentage,
      }}
    >
      {children}
    </ReadingProgressContext.Provider>
  );
}

export function useReadingProgress() {
  const context = useContext(ReadingProgressContext);
  if (!context) {
    throw new Error('useReadingProgress must be used within ReadingProgressProvider');
  }
  return context;
}
