import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState, createContext, useContext } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Session } from "@supabase/supabase-js";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import EarnRewards from "./pages/EarnRewards";
import HowItWorks from "./pages/HowItWorks";
import PartnerWithUs from "./pages/PartnerWithUs";
import Learn from "./pages/Learn";
import Tasks from "./pages/Tasks";
import AdminDashboard from "./pages/AdminDashboard";
import { Footer } from "./components/Footer";
const queryClient = new QueryClient();

// Create session context
const SessionContext = createContext<{
  session: Session | null;
  loading: boolean;
}>({
  session: null,
  loading: true
});
export const useSession = () => useContext(SessionContext);
const SessionProvider = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({
      data: {
        session
      }
    }) => {
      setSession(session);
      setLoading(false);
    });

    // Listen for auth changes
    const {
      data: {
        subscription
      }
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setLoading(false);
    });
    return () => subscription.unsubscribe();
  }, []);
  return <SessionContext.Provider value={{
    session,
    loading
  }}>
      {children}
    </SessionContext.Provider>;
};
const ProtectedRoute = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const {
    session,
    loading
  } = useSession();
  if (loading) {
    return <div>Loading...</div>;
  }
  if (!session) {
    return <Navigate to="/auth" />;
  }
  return <>{children}</>;
};
const App = () => <QueryClientProvider client={queryClient}>
    <SessionProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="flex flex-col min-h-screen bg-gray-900 hover:bg-gray-800">
            <div className="flex-grow">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/earn-rewards" element={<EarnRewards />} />
                <Route path="/how-it-works" element={<HowItWorks />} />
                <Route path="/partner-with-us" element={<PartnerWithUs />} />
                <Route path="/learn" element={<Learn />} />
                <Route path="/tasks" element={<ProtectedRoute>
                      <Tasks />
                    </ProtectedRoute>} />
                <Route path="/admin" element={<ProtectedRoute>
                      <AdminDashboard />
                    </ProtectedRoute>} />
              </Routes>
            </div>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </SessionProvider>
  </QueryClientProvider>;
export default App;