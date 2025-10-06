import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ReadingProgressProvider } from "@/contexts/reading-progress-context";
import ReadingProgressBar from "@/components/reading-progress-bar";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReadingProgressProvider>
        <TooltipProvider>
          <ReadingProgressBar />
          <Toaster />
          <Router />
        </TooltipProvider>
      </ReadingProgressProvider>
    </QueryClientProvider>
  );
}

export default App;
