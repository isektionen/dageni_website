import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import Index from "./pages/Index";
import ForStudents from "./pages/ForStudents";
import OurExhibitors from "./pages/OurExhibitors";
import AboutUs from "./pages/AboutUs";
import HandInHand from "./pages/HandInHand";
import NotFound from "./pages/NotFound";
import Companies from "./pages/Companies";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/for-companies" element={<Companies />} />
          <Route path="/for-exhibitors" element={<Companies />} />
          <Route path="/for-students" element={<ForStudents />} />
          <Route path="/our-exhibitors" element={<OurExhibitors />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/hand-in-hand" element={<HandInHand />} />
          {/* Redirect standalone sponsors/events to ForStudents sections */}
          <Route path="/our-sponsors" element={<Navigate to="/for-students#our-sponsors" replace />} />
          <Route path="/events" element={<Navigate to="/for-students#events" replace />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
