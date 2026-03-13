import { motion } from "framer-motion";
import { Bus, Briefcase, Trophy, BookMarked, Target, Users, FlaskConical, Building } from "lucide-react";

const highlights = [
  { icon: Bus, label: "Transport Facilities" },
  { icon: Briefcase, label: "Strong Training & Placement Cell" },
  { icon: Trophy, label: "Extracurricular Activities" },
  { icon: BookMarked, label: "Value Added Sessions" },
  { icon: Target, label: "Outcome Based Education" },
  { icon: Users, label: "Experienced Faculty Members" },
  { icon: FlaskConical, label: "Advanced Laboratories" },
  { icon: Building, label: "Excellent Infrastructure" },
];

const HighlightsSection = () => (
  <section className="py-16 bg-secondary">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground text-center mb-10">
        Our <span className="text-primary">Highlights</span>
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {highlights.map((h, i) => (
          <motion.div
            key={h.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.06 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center p-5 bg-card rounded-lg border border-border hover:shadow-md transition-shadow"
          >
            <div className="h-14 w-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-3">
              <h.icon className="h-7 w-7" />
            </div>
            <p className="text-sm font-medium text-foreground">{h.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HighlightsSection;
