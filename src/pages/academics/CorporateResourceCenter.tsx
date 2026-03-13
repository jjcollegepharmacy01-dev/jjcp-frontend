import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import hero1 from "@/assets/hero-1.webp";

const CorporateResourceCenter = () => (
  <Layout>
    <section className="relative h-[300px] overflow-hidden">
      <img src={hero1} alt="Corporate Resource Center" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-primary-dark/80 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground">Corporate Resource Center</h1>
          <p className="text-primary-foreground/70 mt-2">Home / Academics / CRC</p>
        </div>
      </div>
    </section>

    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto space-y-8">
          <div>
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Training & Placement</h2>
            <div className="h-1 w-12 bg-primary rounded mb-6" />
            <p className="text-muted-foreground leading-relaxed mb-4">
              At JJ College of Pharmacy, the Corporate Resource Center (CRC) plays a crucial role in shaping the careers of our aspiring pharmacists. We aim to bridge the gap between academic learning and industry expectations through continuous training and development.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our Training and Placement cell actively works towards organizing workshops, mock interviews, and industrial visits to prepare our students for successful careers in pharmaceutical manufacturing, clinical research, drug formulation, and healthcare administration.
            </p>

            <div className="bg-secondary/50 rounded-xl p-12 border border-border border-dashed text-center">
              <h3 className="text-xl font-semibold text-foreground mb-2">Upcoming Placement Drives</h3>
              <p className="text-muted-foreground">Detailed schedule for upcoming corporate training sessions and placement drives will be updated by the CRC co-ordinator soon.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default CorporateResourceCenter;
