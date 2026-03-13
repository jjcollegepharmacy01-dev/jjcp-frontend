import Layout from "@/components/layout/Layout";
import HeroSlider from "@/components/home/HeroSlider";
import NewsTicker from "@/components/home/NewsTicker";
import ProgramsSection from "@/components/home/ProgramsSection";
import HighlightsSection from "@/components/home/HighlightsSection";
import CampusSection from "@/components/home/CampusSection";
import FAQSection from "@/components/home/FAQSection";
import StatsSection from "@/components/home/StatsSection";
import RecruitersSection from "@/components/home/RecruitersSection";
import EventsSection from "@/components/home/EventsSection";
import BlogSection from "@/components/home/BlogSection";

const Index = () => (
  <Layout>
    <HeroSlider />
    <NewsTicker />
    <ProgramsSection />
    <CampusSection />
    <HighlightsSection />
    <FAQSection />
    <StatsSection />
    <RecruitersSection />
    <EventsSection />
    <BlogSection />
  </Layout>
);

export default Index;
