import Layout from "@/components/layout/Layout";
import { useLocation } from "react-router-dom";
import hero2 from "@/assets/hero-2.jpg";

const pageTitles: Record<string, { title: string; desc: string }> = {
  "/academics": { title: "Academics", desc: "Academic excellence at JJCP" },
  "/campus": { title: "Campus Life", desc: "Experience our vibrant campus" },
  "/alumni": { title: "Alumni", desc: "Our proud alumni network" },
  "/placements": { title: "Training & Placement", desc: "Industry partnerships and placements" },
  "/media": { title: "Media & Events", desc: "Latest news and events" },
  "/research": { title: "Research", desc: "Research and publications" },
};

const GenericPage = () => {
  const { pathname } = useLocation();
  const page = pageTitles[pathname] || { title: "Page", desc: "" };

  return (
    <Layout>
      <section className="relative h-[300px] overflow-hidden">
        <img src={hero2} alt={page.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary-dark/80 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground">{page.title}</h1>
            <p className="text-primary-foreground/70 mt-2">{page.desc}</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="h-14 w-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">🔬</span>
            </div>
            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Content Coming Soon</h2>
            <p className="text-muted-foreground">
              This page is currently under development. Please check back soon for updates about our {page.title.toLowerCase()} offerings.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GenericPage;
