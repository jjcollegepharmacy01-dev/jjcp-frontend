import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import hero3 from "@/assets/hero-3.webp";

const Policy = () => (
  <Layout>
    <section className="relative h-[300px] overflow-hidden">
      <img src={hero3} alt="Our Policies" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-primary-dark/80 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground">Our Policies</h1>
          <p className="text-primary-foreground/70 mt-2">Home / Academics / Policies</p>
        </div>
      </div>
    </section>

    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto space-y-8">
          <div>
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Institutional Policies</h2>
            <div className="h-1 w-12 bg-primary rounded mb-6" />
            <p className="text-muted-foreground leading-relaxed mb-8">
              JJ College of Pharmacy is committed to maintaining transparency and adherence to regulatory standards set by the Pharmacy Council of India (PCI) and R.G.P.V. Relevant institutional policies regarding academics, examinations, anti-ragging, and student conduct are provided here.
            </p>
            
            <div className="bg-secondary/50 rounded-xl p-12 border border-border border-dashed text-center">
              <h3 className="text-xl font-semibold text-foreground mb-2">Policy Documents Under Revision</h3>
              <p className="text-muted-foreground">The policy documents are currently undergoing administrative review for the upcoming academic session. They will be available for download soon.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default Policy;
