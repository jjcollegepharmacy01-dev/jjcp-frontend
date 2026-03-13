import Layout from "@/components/layout/Layout";
import hero2 from "@/assets/hero-2.webp";
import CampusSection from "@/components/home/CampusSection";

const Campus = () => (
  <Layout>
    {/* Page Banner */}
    <section className="relative h-[300px] overflow-hidden">
      <img src={hero2} alt="Campus Life" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-primary-dark/80 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground">Campus Life</h1>
          <p className="text-primary-foreground/70 mt-2">Home / Campus</p>
        </div>
      </div>
    </section>

    <CampusSection />
  </Layout>
);

export default Campus;
