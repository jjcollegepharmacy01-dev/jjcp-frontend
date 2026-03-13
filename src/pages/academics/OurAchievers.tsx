import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import hero1 from "@/assets/hero-1.webp";

const OurAchievers = () => (
  <Layout>
    {/* Page Banner */}
    <section className="relative h-[300px] overflow-hidden">
      <img src={hero1} alt="Our Achievers" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-primary-dark/80 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground">Our Achievers</h1>
          <p className="text-primary-foreground/70 mt-2">Home / Academics / Our Achievers</p>
        </div>
      </div>
    </section>

    {/* Content Section */}
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto text-center space-y-8">
          <div>
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Celebrating Excellence</h2>
            <div className="h-1 w-12 bg-primary rounded mx-auto mb-6" />
            <p className="text-muted-foreground leading-relaxed mb-8">
              At JJ College of Pharmacy, we take immense pride in the outstanding accomplishments of our students. From academic brilliance to exceptional performance in practical applications and extracurricular activities, our achievers consistently set new benchmarks.
            </p>
            
            <div className="bg-secondary/50 rounded-xl p-12 border border-border border-dashed">
              <h3 className="text-xl font-semibold text-foreground mb-2">Student Profiles Coming Soon</h3>
              <p className="text-muted-foreground">We are currently updating our database with the latest student achievements and success stories. Please check back later!</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default OurAchievers;
