import { useState, useEffect } from "react";
import { Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Fuse from "fuse.js";

interface SearchResult {
  title: string;
  content: string;
  section: string;
  type: string;
}

const searchableContent: SearchResult[] = [
  { title: "Vannevar Bush", content: "Information Architecture Visionary. His 1945 essay 'As We May Think' described the Memex", section: "Origins", type: "Visionary" },
  { title: "Douglas Engelbart", content: "Human Augmentation Pioneer. Invented the computer mouse, developed early hypertext systems", section: "Origins", type: "Visionary" },
  { title: "Ivan Sutherland", content: "Computer Graphics Pioneer. Created Sketchpad in 1963, demonstrating graphical computing", section: "Origins", type: "Visionary" },
  { title: "Alan Kay", content: "Object-Oriented UI Inventor. Conceived the Dynabook concept for children", section: "Origins", type: "Visionary" },
  { title: "Larry Tesler", content: "Modeless Interface Champion. Invented cut, copy, and paste operations", section: "Origins", type: "Visionary" },
  { title: "Don Norman", content: "The Godfather of UX. Coined the term User Experience in 1993 at Apple", section: "Pioneers", type: "Pioneer" },
  { title: "Jakob Nielsen", content: "The Usability Guru. Created the 10 Usability Heuristics", section: "Pioneers", type: "Pioneer" },
  { title: "Alan Cooper", content: "Father of Visual Basic. Invented the persona methodology", section: "Pioneers", type: "Pioneer" },
  { title: "Jesse James Garrett", content: "The Information Architect. Created the Elements of User Experience model", section: "Pioneers", type: "Pioneer" },
  { title: "Steve Krug", content: "The Common Sense Advocate. Don't Make Me Think - popularized guerrilla usability testing", section: "Pioneers", type: "Pioneer" },
];

export default function SearchDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);

  const fuse = new Fuse(searchableContent, {
    keys: ["title", "content", "section"],
    threshold: 0.3,
    includeScore: true,
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen(!isOpen);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (query.trim()) {
      const searchResults = fuse.search(query).map((result) => result.item);
      setResults(searchResults.slice(0, 5));
    } else {
      setResults([]);
    }
  }, [query]);

  const scrollToSection = (section: string) => {
    const element = document.querySelector(`[data-testid*="${section.toLowerCase()}"]`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
      setQuery("");
    }
  };

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        variant="outline"
        size="sm"
        className="fixed top-20 right-6 z-50 flex items-center gap-2"
        data-testid="button-open-search"
      >
        <Search className="w-4 h-4" />
        <span className="hidden sm:inline">Search</span>
        <kbd className="hidden sm:inline-flex pointer-events-none h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-xs font-medium opacity-70">
          ⌘K
        </kbd>
      </Button>
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm" data-testid="search-overlay">
      <div className="container flex h-screen items-start justify-center pt-20">
        <Card className="w-full max-w-2xl p-4">
          <div className="flex items-center gap-2 border-b pb-3">
            <Search className="w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search visionaries, pioneers, and concepts..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 bg-transparent outline-none text-base"
              autoFocus
              data-testid="input-search"
            />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setIsOpen(false);
                setQuery("");
              }}
              data-testid="button-close-search"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          <div className="mt-4 max-h-[400px] overflow-y-auto">
            {results.length > 0 ? (
              <div className="space-y-2">
                {results.map((result, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection(result.section)}
                    className="w-full text-left p-3 rounded-lg hover:bg-accent/10 transition-colors"
                    data-testid={`search-result-${index}`}
                  >
                    <div className="font-semibold text-sm">{result.title}</div>
                    <div className="text-xs text-muted-foreground mt-1 line-clamp-2">
                      {result.content}
                    </div>
                    <div className="text-xs text-accent mt-1">
                      {result.section} • {result.type}
                    </div>
                  </button>
                ))}
              </div>
            ) : query ? (
              <p className="text-center text-muted-foreground py-8">No results found</p>
            ) : (
              <p className="text-center text-muted-foreground py-8">
                Type to search visionaries and pioneers
              </p>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}
