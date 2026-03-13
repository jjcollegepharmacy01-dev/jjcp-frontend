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

// Academics Pages
import AdmissionOpen from "./pages/academics/AdmissionOpen";
import AdmissionProcess from "./pages/academics/AdmissionProcess";
import TeachingMethodology from "./pages/academics/TeachingMethodology";
import CorporateResourceCenter from "./pages/academics/CorporateResourceCenter";
import OurAchievers from "./pages/academics/OurAchievers";
import Career from "./pages/academics/Career";
import Committee from "./pages/academics/Committee";
import StudentTestimonials from "./pages/academics/StudentTestimonials";
import Policy from "./pages/academics/Policy";
import AcademicCalendar from "./pages/academics/AcademicCalendar";

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
          <Route path="/academics/admission-open" element={<AdmissionOpen />} />
          <Route path="/academics/admission-process" element={<AdmissionProcess />} />
          <Route path="/academics/teaching-methodology" element={<TeachingMethodology />} />
          <Route path="/academics/corporate-resource-center" element={<CorporateResourceCenter />} />
          <Route path="/academics/our-achievers" element={<OurAchievers />} />
          <Route path="/academics/career" element={<Career />} />
          <Route path="/academics/committee" element={<Committee />} />
          <Route path="/academics/student-testimonials" element={<StudentTestimonials />} />
          <Route path="/academics/policy" element={<Policy />} />
          <Route path="/academics/academic-calendar" element={<AcademicCalendar />} />
          
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
