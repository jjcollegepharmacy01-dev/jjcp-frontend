import { useEffect, useRef, useState } from "react";

const stats = [
  { label: "Faculty", value: 30, suffix: "" },
  { label: "Departments", value: 2, suffix: "" },
  { label: "Established", value: 2020, suffix: "", isYear: true },
  { label: "Students", value: 650, suffix: "+" },
  { label: "Publications & Patents", value: 51, suffix: "" },
  { label: "Placements", value: 90, suffix: "%" },
];

const Counter = ({ target, suffix, isYear }: { target: number; suffix: string; isYear?: boolean }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const start = isYear ? target - 10 : 0;
          const range = target - start;
          const startTime = Date.now();
          const step = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            setCount(Math.floor(start + range * progress));
            if (progress < 1) requestAnimationFrame(step);
          };
          step();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, isYear]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground">
        {count}{suffix}
      </div>
      <div className="text-primary-foreground/70 text-sm mt-1 font-medium">{stats.find(s => s.value === target)?.label}</div>
    </div>
  );
};

const StatsSection = () => (
  <section className="py-14 bg-stats-bg">
    <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
      {stats.map((s) => (
        <Counter key={s.label} target={s.value} suffix={s.suffix} isYear={s.isYear} />
      ))}
    </div>
  </section>
);

export default StatsSection;
