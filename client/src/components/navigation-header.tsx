import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import ShareButtons from "./share-buttons";

export default function NavigationHeader() {
  const handlePdfDownload = () => {
    window.print();
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#f4f4e4" strokeWidth="2" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="#f4f4e4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="#f4f4e4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="font-display font-semibold text-lg">UX/UI Timeline</span>
          </div>
          
          <div className="flex items-center space-x-3">
            <Button 
              variant="outline" 
              size="sm" 
              className="hover-lift border-accent hover:bg-accent/50"
              onClick={handlePdfDownload}
              data-testid="button-pdf-download"
            >
              <span className="flex items-center space-x-2">
                <span>PDF</span>
                <Download className="w-4 h-4" />
              </span>
            </Button>
            <ShareButtons />
          </div>
        </div>
      </div>
    </header>
  );
}
