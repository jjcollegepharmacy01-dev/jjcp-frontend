import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import hero1 from "@/assets/hero-1.webp";
import hero2 from "@/assets/hero-2.webp";
import hero3 from "@/assets/hero-3.webp";

const slides = [
  { image: hero1, subtitle: "Welcome to JJ College of Pharmacy", title: "UNLEASHING INNOVATION IN PHARMA STUDIES" },
  { image: hero2, subtitle: "State-of-the-Art Campus", title: "WORLD-CLASS INFRASTRUCTURE FOR LEARNING" },
  { image: hero3, subtitle: "Join Our Community", title: "SHAPING FUTURE PHARMACEUTICAL LEADERS" },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <img src={slides[current].image} alt={slides[current].title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/85 via-primary-dark/60 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <motion.div
          key={`text-${current}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl"
        >
          <p className="text-primary-foreground/80 text-sm md:text-base font-medium mb-2 tracking-widest uppercase">
            {slides[current].subtitle}
          </p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-6">
            {slides[current].title}
          </h1>
          <div className="flex gap-4">
            <Link
              to="/programs"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary-light transition-colors"
            >
              Explore
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 border-2 border-primary-foreground text-primary-foreground rounded-md font-medium hover:bg-primary-foreground/10 transition-colors"
            >
              Join Now
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2.5 rounded-full transition-all ${i === current ? "w-8 bg-primary-foreground" : "w-2.5 bg-primary-foreground/50"}`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
