import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import EarnRewards from "./pages/EarnRewards";
import HowItWorks from "./pages/HowItWorks";
import PartnerWithUs from "./pages/PartnerWithUs";
import Learn from "./pages/Learn";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/earn-rewards" element={<EarnRewards />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/partner-with-us" element={<PartnerWithUs />} />
          <Route path="/learn" element={<Learn />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;