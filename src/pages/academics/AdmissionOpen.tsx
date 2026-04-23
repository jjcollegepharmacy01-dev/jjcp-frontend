import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import hero2 from "@/assets/hero-2.webp";

const AdmissionOpen = () => (
  <Layout>
    {/* Page Banner */}
    <section className="relative h-[300px] overflow-hidden">
      <img src={hero2} alt="Admission Open" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-primary-dark/80 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground">Admission Open</h1>
          <p className="text-primary-foreground/70 mt-2">Home / Academics / Admission Open</p>
        </div>
      </div>
    </section>

    {/* Content Section */}
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto space-y-8">
          <div>
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Apply Now</h2>
            <div className="h-1 w-12 bg-primary rounded mb-6" />
            <p className="text-muted-foreground leading-relaxed mb-4">
              JJ College of Pharmacy is a well established and trusted name in the field of pharmacy education. We are running with the highly demanded D. PHARMA and B. PHARMA courses in Chhatarpur, Madhya Pradesh, with the help of potentially highly qualified and experienced faculties.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              JJ College of Pharmacy has been granted approval by Pharmacy Council of India (PCI), New Delhi, and affiliated to R.G.P.V., Bhopal (M.P.). These are the apex bodies controlling technical and professional education in the country and state.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              This is highly needed and serves as a very important sector because medicines play a vital role in our lives and we know our dependency on them.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our mission is to cultivate graduates of ability and conviction to provide patient-centered care guided by respect for the infinite worth of individuals; and dedicated to improving communities by advancing pharmacy education, practice and service. The college provides a quality education that effectively integrates critical thinking, problem-solving, and leadership skills.
            </p>
          </div>

          <div className="bg-secondary p-8 rounded-xl border border-border">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Start Your Journey with JJCP</h2>
            <p className="text-muted-foreground mb-6">Step forward towards your dream career in Allopathic Pharmacy.</p>
            <a href="/contact" className="inline-block px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary-dark transition-colors">
              Contact Us Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default AdmissionOpen;
