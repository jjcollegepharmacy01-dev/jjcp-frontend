import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { FileText, MessageSquare, LaptopIcon, CheckCircle } from "lucide-react";
import hero2 from "@/assets/hero-2.webp";

const AdmissionProcess = () => (
  <Layout>
    {/* Page Banner */}
    <section className="relative h-[300px] overflow-hidden">
      <img src={hero2} alt="Admission Process" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-primary-dark/80 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground">Admission Process</h1>
          <p className="text-primary-foreground/70 mt-2">Home / Academics / Admission Process</p>
        </div>
      </div>
    </section>

    {/* Content Section */}
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto space-y-12">
          
          <div className="text-center">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">How to Apply</h2>
            <div className="h-1 w-12 bg-primary rounded mx-auto mb-6" />
            <p className="text-muted-foreground leading-relaxed">
              JJ College of Pharmacy was established with the vision to impart global quality education to future pharmacy professionals and meet the healthcare needs of society. Follow our simple admission process below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card p-6 rounded-lg border border-border flex gap-4">
              <div className="p-3 bg-primary/10 rounded-full h-fit">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Enquire About Courses</h3>
                <p className="text-muted-foreground text-sm">Enquire about our D. PHARMA and B. PHARMA programs and get detailed information from our admission cell.</p>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border flex gap-4">
              <div className="p-3 bg-primary/10 rounded-full h-fit">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Get Free Consultancy</h3>
                <p className="text-muted-foreground text-sm">Get free consultancy and career guidance from our expert academic counselors.</p>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border flex gap-4">
              <div className="p-3 bg-primary/10 rounded-full h-fit">
                <LaptopIcon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Online Application</h3>
                <p className="text-muted-foreground text-sm">Apply for the course and firmly get in touch with our team for document verification.</p>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border flex gap-4">
              <div className="p-3 bg-primary/10 rounded-full h-fit">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Welcome to JJCP</h3>
                <p className="text-muted-foreground text-sm">Secure a bright career ahead and feel proud to be a part of JJ College of Pharmacy.</p>
              </div>
            </div>
          </div>
          
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default AdmissionProcess;
