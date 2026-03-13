const events = [
  "Visit to ICAR–Indian Institute of Pulses Research",
  "MoU Signing with MRD LifeSciences Pvt. Ltd",
  "Pharmtech Expo 4.0 & Pharmakon Felicitation Ceremony",
  "Educational Visit to Fragrance & Flavour Development Centre (FFDC)",
  "Diabetes Awareness Session",
  "Diwali Donation Outreach Program",
  "Sophisticated Instrumental Hands-on Training",
  "World Pharmacist Day",
];

const NewsTicker = () => (
  <div className="bg-primary overflow-hidden py-2.5">
    <div className="flex animate-marquee whitespace-nowrap">
      {[...events, ...events].map((ev, i) => (
        <span key={i} className="mx-8 text-sm text-primary-foreground font-medium">
          • {ev}
        </span>
      ))}
    </div>
  </div>
);

export default NewsTicker;
