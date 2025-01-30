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
import { Footer } from "./components/Footer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/earn-rewards" element={<EarnRewards />} />
              <Route path="/how-it-works" element={<HowItWorks />} />
              <Route path="/partner-with-us" element={<PartnerWithUs />} />
              <Route path="/learn" element={<Learn />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;