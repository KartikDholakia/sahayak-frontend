import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Onboarding from "./pages/Onboarding";
import Dashboard from "./pages/Dashboard";
import ContentGenerator from "./pages/ContentGenerator";
import CameraCapture from "./pages/CameraCapture";
import AnswerSheetEvaluator from "./pages/AnswerSheetEvaluator";
import StudentsProfile from "./pages/StudentsProfile";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Use basename only in production (GitHub Pages)
const basename = import.meta.env.PROD ? "/sahayak-frontend" : "";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={basename}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/content-generator" element={<ContentGenerator />} />
          <Route path="/camera-capture" element={<CameraCapture />} />
          <Route
            path="/answer-sheet-evaluator"
            element={<AnswerSheetEvaluator />}
          />
          <Route path="/students-profile" element={<StudentsProfile />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
