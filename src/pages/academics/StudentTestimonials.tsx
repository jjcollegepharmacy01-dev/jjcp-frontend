import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import hero2 from "@/assets/hero-2.webp";

const StudentTestimonials = () => (
  <Layout>
    <section className="relative h-[300px] overflow-hidden">
      <img src={hero2} alt="Student Testimonials" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-primary-dark/80 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground">Student Testimonials</h1>
          <p className="text-primary-foreground/70 mt-2">Home / Academics / Testimonials</p>
        </div>
      </div>
    </section>

    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">What Our Students Say</h2>
            <div className="h-1 w-12 bg-primary rounded mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-xl border border-border flex flex-col justify-between h-full shadow-sm hover:shadow-md transition-shadow">
              <p className="italic text-muted-foreground mb-6">"JJ College of Pharmacy is a fantastic learning environment. I can declare with great pride that I received my Diploma in Pharmacy from this College. I was able to excel in my area of interest because of the friendly relationship between faculty and students."</p>
              <div>
                <h4 className="font-semibold text-foreground text-lg">Rishab Gupta</h4>
                <p className="text-sm text-primary font-medium">M-SWASTH SOLUTION PVT LTD</p>
              </div>
            </div>

            <div className="bg-card p-8 rounded-xl border border-border flex flex-col justify-between h-full shadow-sm hover:shadow-md transition-shadow">
              <p className="italic text-muted-foreground mb-6">"Being a part of JJ College of Pharmacy, where I may grow, was a tremendous stroke of luck and fortune for me. The entire faculty and department do everything possible to help one create their destiny. My time at JJCP has been a tremendous learning opportunity."</p>
              <div>
                <h4 className="font-semibold text-foreground text-lg">Akash Mishra</h4>
                <p className="text-sm text-primary font-medium">Akums Drugs & Pharmaceuticals Ltd.</p>
              </div>
            </div>

            <div className="bg-card p-8 rounded-xl border border-border flex flex-col justify-between h-full shadow-sm hover:shadow-md transition-shadow">
              <p className="italic text-muted-foreground mb-6">"At the JJ College of Pharmacy, I had a wonderful and unique experience. We were able to improve our intellectual and social abilities with the support of the mentors. I appreciate the institution for giving me the chance to develop my abilities."</p>
              <div>
                <h4 className="font-semibold text-foreground text-lg">Akhilesh Kr. Singh</h4>
                <p className="text-sm text-primary font-medium">Alembic Pharmaceuticals Ltd.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default StudentTestimonials;
