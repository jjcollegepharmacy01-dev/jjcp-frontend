import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import hero1 from "@/assets/hero-1.webp";

const Committee = () => (
  <Layout>
    <section className="relative h-[300px] overflow-hidden">
      <img src={hero1} alt="Our Committee" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-primary-dark/80 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground">Our Committee</h1>
          <p className="text-primary-foreground/70 mt-2">Home / Academics / Committee</p>
        </div>
      </div>
    </section>

    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto space-y-8">
          <div>
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Committees at JJCP</h2>
            <div className="h-1 w-12 bg-primary rounded mb-6" />
            <p className="text-muted-foreground leading-relaxed mb-8">
              JJ College of Pharmacy has established various committees to ensure smooth functioning, student welfare, and adherence to regulatory standards. These committees are instrumental in maintaining discipline and fostering a supportive environment.
            </p>
            
            <div className="bg-secondary/50 rounded-xl p-12 border border-border border-dashed text-center">
              <h3 className="text-xl font-semibold text-foreground mb-2">Committee Details Updating Soon</h3>
              <p className="text-muted-foreground">Information regarding specific committees and their members is currently being updated for the new academic session. Please check back shortly.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default Committee;
