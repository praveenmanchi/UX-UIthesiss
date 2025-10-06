import { useReadingProgress } from "@/contexts/reading-progress-context";
import { Progress } from "@/components/ui/progress";
import { BookmarkCheck } from "lucide-react";

export default function ProgressIndicator() {
  const { progress, getProgressPercentage } = useReadingProgress();
  const percentage = getProgressPercentage();

  if (percentage === 0) {
    return null;
  }

  return (
    <div 
      className="fixed bottom-6 right-6 z-40 bg-background/95 backdrop-blur-sm border border-accent rounded-lg p-4 shadow-lg w-64"
      data-testid="progress-indicator"
    >
      <div className="flex items-center gap-2 mb-2">
        <BookmarkCheck className="h-4 w-4 text-foreground" />
        <span className="text-sm font-medium">Reading Progress</span>
      </div>
      <Progress value={percentage} className="h-2" data-testid="progress-bar" />
      <div className="flex justify-between items-center mt-2">
        <span className="text-xs text-muted-foreground">
          {progress.readTheses.length} of 18 theses read
        </span>
        <span className="text-xs font-medium" data-testid="text-progress-percentage">
          {percentage}%
        </span>
      </div>
    </div>
  );
}
