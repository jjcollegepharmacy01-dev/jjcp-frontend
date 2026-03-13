import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Target, Eye, Award, Users, BookOpen, Building } from "lucide-react";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const About = () => (
  <Layout>
    {/* Banner */}
    <section className="relative h-[300px] overflow-hidden">
      <img src={hero2} alt="Campus" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-primary-dark/80 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground">About Us</h1>
          <p className="text-primary-foreground/70 mt-2">Home / About Us</p>
        </div>
      </div>
    </section>

    {/* About Content */}
    <section className="py-16">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <div className="h-1 w-12 bg-primary rounded mb-3" />
          <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
            About <span className="text-primary">JJ College of Pharmacy</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            JJ College of Pharmacy (JJCP) is a premier pharmacy institution located in Chhatarpur (M.P.). Established with a vision for excellence, JJCP is committed to providing quality education in pharmaceutical sciences with a strong emphasis on innovation, research, and industry readiness.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Run by RD Education Society, Chhatarpur (M.P.), and Approved by P.C.I. New Delhi (PCI-6188), Affiliated by R.G.P.V., Bhopal (M.P.), the institute offers the D. PHARMA program. Our curriculum is designed to bridge the gap between academic knowledge and industry requirements.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            With experienced and proficient young dynamic faculty, fully equipped laboratories with the latest modern equipment and machinery, JJCP prepares students to become competent pharmaceutical professionals ready to make a meaningful contribution to healthcare.
          </p>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <img src={hero3} alt="Students" className="rounded-xl shadow-xl w-full" />
        </motion.div>
      </div>
    </section>

    {/* Vision & Mission */}
    <section id="vision" className="py-16 bg-secondary">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card p-8 rounded-xl border border-border"
        >
          <div className="h-14 w-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
            <Eye className="h-7 w-7" />
          </div>
          <h3 className="text-2xl font-heading font-bold text-foreground mb-3">Our Vision</h3>
          <p className="text-muted-foreground leading-relaxed">
            To be a center of excellence in pharmaceutical education and research, producing globally competent professionals who contribute to the advancement of healthcare and serve society with integrity and innovation.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-card p-8 rounded-xl border border-border"
        >
          <div className="h-14 w-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
            <Target className="h-7 w-7" />
          </div>
          <h3 className="text-2xl font-heading font-bold text-foreground mb-3">Our Mission</h3>
          <p className="text-muted-foreground leading-relaxed">
            To provide quality pharmacy education through innovative teaching methods, promote research culture, develop industry-ready graduates, and foster ethical values and social responsibility among students.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-heading font-bold text-foreground text-center mb-10">
          Why Choose <span className="text-primary">JJCP?</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Award, title: "Quality Education", desc: "Outcome-based and value-based education system" },
            { icon: Users, title: "Expert Faculty", desc: "Experienced and eminent faculty members" },
            { icon: Building, title: "Infrastructure", desc: "Well-equipped advanced laboratories and facilities" },
            { icon: BookOpen, title: "Industry Exposure", desc: "Regular industrial visits, internships, and trainings" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-shadow"
            >
              <div className="h-14 w-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                <item.icon className="h-7 w-7" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
