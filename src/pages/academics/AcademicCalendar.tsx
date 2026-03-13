import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Calendar as CalendarIcon } from "lucide-react";
import hero2 from "@/assets/hero-2.webp";

const AcademicCalendar = () => (
  <Layout>
    <section className="relative h-[300px] overflow-hidden">
      <img src={hero2} alt="Academic Calendar" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-primary-dark/80 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground">Academic Calendar</h1>
          <p className="text-primary-foreground/70 mt-2">Home / Academics / Calendar</p>
        </div>
      </div>
    </section>

    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto space-y-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Session 2024-2025</h2>
            <div className="h-1 w-12 bg-primary rounded mx-auto mb-6" />
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Our academic calendar is structured as per the guidelines of R.G.P.V. Bhopal and Pharmacy Council of India to ensure timely completion of the syllabus and systematic execution of internal and external examinations.
            </p>
          </div>

          <div className="bg-card p-12 rounded-xl border border-border flex flex-col items-center justify-center text-center shadow-sm">
            <div className="h-20 w-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <CalendarIcon className="h-10 w-10 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Calendar Updating Soon</h3>
            <p className="text-muted-foreground max-w-lg mb-6">
              The academic schedule for the upcoming semester is currently being finalized by the administrative department. The official PDF will be available for download here shortly.
            </p>
            <button className="px-6 py-2 border-2 border-primary text-primary font-medium rounded-md hover:bg-primary hover:text-primary-foreground transition-colors" disabled>
              Download PDF (Unavailable)
            </button>
          </div>

        </motion.div>
      </div>
    </section>
  </Layout>
);

export default AcademicCalendar;
