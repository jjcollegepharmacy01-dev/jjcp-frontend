import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import hero2 from "@/assets/hero-2.webp";
import { Mail } from "lucide-react";

const Career = () => (
  <Layout>
    {/* Page Banner */}
    <section className="relative h-[300px] overflow-hidden">
      <img src={hero2} alt="Make Career With Us" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-primary-dark/80 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground">Career With Us</h1>
          <p className="text-primary-foreground/70 mt-2">Home / Academics / Career</p>
        </div>
      </div>
    </section>

    {/* Content Section */}
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto space-y-8">
          <div>
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Make Career With Us</h2>
            <div className="h-1 w-12 bg-primary rounded mb-6" />
            <p className="text-muted-foreground leading-relaxed mb-4">
              JJ College of Pharmacy was established with the vision to impart global quality education to future pharmacy professionals and meet the healthcare needs of society. With an emphasis on experiential learning, JJ College of Pharmacy in Chhatarpur is on its way to becoming the centre of excellence in Research.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              With the help of potentially highly qualified and experienced faculties and now to give our contribution in the health sector, JJ College of Pharmacy has been granted approval by Pharmacy Council of India (PCI), New Delhi, and is affiliated to R.G.P.V., Bhopal (M.P.). These are the apex bodies controlling technical and professional education in the country and state.
            </p>

            <div className="bg-primary/5 rounded-xl p-8 border border-primary/20 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Ready to join our dynamic faculty team?</h3>
                <p className="text-muted-foreground">Submit your resume to our administration department.</p>
              </div>
              <a href="mailto:jjcolgofpharmacy@gmail.com" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary-dark transition-colors shrink-0">
                <Mail className="h-4 w-4" />
                Apply Now
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default Career;
