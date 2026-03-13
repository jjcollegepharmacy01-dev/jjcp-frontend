const recruiters = [
  "Sun Pharma", "Pfizer", "Lupin", "Mankind", "Zydus", "Patanjali", "Intas",
  "Macleods", "Hamdard", "Alembic", "LifeCell", "Medox", "Tirupati", "Scott",
  "Magnus", "Koye", "Akums", "Bengal Chemicals", "Galentic", "Flora Pharma",
];

const RecruitersSection = () => (
  <section className="py-16 bg-background overflow-hidden">
    <div className="container mx-auto px-4 mb-8">
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground text-center">
        Our <span className="text-primary">Recruiters</span>
      </h2>
    </div>
    <div className="relative">
      <div className="flex animate-scroll-left">
        {[...recruiters, ...recruiters].map((name, i) => (
          <div
            key={i}
            className="flex-shrink-0 mx-4 w-36 h-20 bg-card border border-border rounded-lg flex items-center justify-center p-3"
          >
            <span className="text-xs font-semibold text-muted-foreground text-center">{name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default RecruitersSection;
