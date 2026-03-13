import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import hero3 from "@/assets/hero-3.webp";

const TeachingMethodology = () => (
  <Layout>
    {/* Page Banner */}
    <section className="relative h-[300px] overflow-hidden">
      <img src={hero3} alt="Teaching Methodology" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-primary-dark/80 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground">Teaching Methodology</h1>
          <p className="text-primary-foreground/70 mt-2">Home / Academics / Teaching Methodology</p>
        </div>
      </div>
    </section>

    {/* Content Section */}
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto space-y-8">
          <div>
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Our Approach</h2>
            <div className="h-1 w-12 bg-primary rounded mb-6" />
            <p className="text-muted-foreground leading-relaxed mb-4">
              At JJ College of Pharmacy, we strongly believe in learning by doing and peer-to-peer learning. We host various debate sessions, group activities, and webinars by industry experts imbibing the curriculum to help them understand the courses from the industry angle and develop a deeper understanding.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our approach of mentoring and evaluation is based on the application of concepts. We coach by recasting the syllabus to experience with the help of our fully-equipped labs with the latest modern equipment and machinery.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We focus on the holistic development of our students. In addition to academia, our experienced and proficient young dynamic faculty grooms the students into professionals by working on their communication, presentation, creative writing skills, and much more.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default TeachingMethodology;
