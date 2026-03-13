import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

const programs = [
  { icon: BookOpen, title: "D. PHARMA", desc: "2-year Diploma in Pharmacy program" },
];

const ProgramsSection = () => (
  <section className="py-16 bg-background">
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-between mb-10">
        <div>
          <div className="h-1 w-12 bg-primary rounded mb-3" />
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Programs <span className="text-primary">We Offer</span>
          </h2>
        </div>
        <Link to="/programs" className="hidden md:inline-flex px-5 py-2.5 border-2 border-primary text-primary rounded-md font-medium hover:bg-primary hover:text-primary-foreground transition-colors">
          View All Programs
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {programs.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            viewport={{ once: true }}
          >
            <Link
              to="/programs"
              className="group block p-6 bg-card rounded-lg border border-border hover:border-primary hover:shadow-lg transition-all"
            >
              <div className="h-12 w-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <p.icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">{p.title}</h3>
              <p className="text-sm text-muted-foreground">{p.desc}</p>
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 md:hidden text-center">
        <Link to="/programs" className="inline-flex px-5 py-2.5 border-2 border-primary text-primary rounded-md font-medium hover:bg-primary hover:text-primary-foreground transition-colors">
          View All Programs
        </Link>
      </div>
    </div>
  </section>
);

export default ProgramsSection;
