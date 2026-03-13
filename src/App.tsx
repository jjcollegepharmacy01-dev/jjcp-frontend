import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Contact from "./pages/Contact";
import GenericPage from "./pages/GenericPage";
import NotFound from "./pages/NotFound";
import Campus from "./pages/Campus";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/academics" element={<GenericPage />} />
          <Route path="/campus" element={<Campus />} />
          <Route path="/alumni" element={<GenericPage />} />
          <Route path="/placements" element={<GenericPage />} />
          <Route path="/media" element={<GenericPage />} />
          <Route path="/research" element={<GenericPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
