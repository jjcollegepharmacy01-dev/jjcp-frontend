import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import hero1 from "@/assets/hero-1.jpg";

const degreePrograms = [
  { id: "dpharm", title: "D. PHARMA", duration: "2 Years", desc: "Eligibility: 12th Pass with (Maths or Bio)\nAdmission Status: Admission Open (Limited Seats)\n\nDiploma in Pharmacy is a 2-year diploma program that provides foundational knowledge in pharmaceutical sciences and prepares students for careers in pharmacy practice." },
];

const Programs = () => (
  <Layout>
    <section className="relative h-[300px] overflow-hidden">
      <img src={hero1} alt="Programs" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-primary-dark/80 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground">Our Programs</h1>
          <p className="text-primary-foreground/70 mt-2">Home / Programs</p>
        </div>
      </div>
    </section>

    {/* Degree Programs */}
    <section id="dpharm" className="py-16">
      <div className="container mx-auto px-4">
        <div className="h-1 w-12 bg-primary rounded mb-3" />
        <h2 className="text-3xl font-heading font-bold text-foreground mb-8">
          Diploma <span className="text-primary">Programs</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {degreePrograms.map((p, i) => (
            <motion.div
              key={p.id}
              id={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-xl border border-border p-8 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">{p.duration}</span>
              </div>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-3">{p.title}</h3>
              <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Programs;
