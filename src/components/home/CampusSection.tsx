import { motion } from "framer-motion";
import hero2 from "@/assets/hero-2.jpg";
import hero4 from "@/assets/hero-4.png";

const CampusSection = () => (
  <>
    {/* Section 1: Academic & Facilities */}
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <div className="h-1 w-12 bg-primary rounded mb-3" />
          <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
            A Vibrant <span className="text-primary">Learning Environment</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            At JJ College of Pharmacy, our campus is designed to foster a culture of academic excellence and continuous learning.
            With well-equipped modern laboratories, spacious classrooms, and a comprehensive library, students are provided with
            all the necessary resources they need to excel in their pharmaceutical studies.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Beyond academics, our campus acts as a thriving hub for innovation and collaborative learning.
            Students frequently engage in interactive workshops, seminars, and hands-on training sessions that prepare them
            for real-world challenges in the dynamic healthcare industry.
          </p>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <img src={hero2} alt="Learning Environment" className="rounded-xl shadow-xl w-full h-[400px] object-cover" />
        </motion.div>
      </div>
    </section>

    {/* Section 2: Student Life & Extracurriculars */}
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-2 lg:order-1">
          <img src={hero4} alt="Student Life" className="rounded-xl shadow-xl w-full h-[400px] object-cover" />
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-1 lg:order-2">
          <div className="h-1 w-12 bg-primary rounded mb-3" />
          <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
            Dynamic <span className="text-primary">Student Experience</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Life at JJCP is not just confined to classrooms and laboratories. We strongly believe in the holistic development
            of our students. Our expansive campus is buzzing with extracurricular activities, cultural events, sports competitions,
            and interactive sessions that cater to a wide range of interests.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Whether it's participating in annual college fests, celebrating diverse festivals together, or engaging in community outreach
            programs, students get ample opportunities to showcase their talents and build lasting friendships. The engaging campus life at
            JJCP ensures that every student's journey is memorable and helps in developing essential leadership and teamwork skills.
          </p>
        </motion.div>
      </div>
    </section>
  </>
);

export default CampusSection;
