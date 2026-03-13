import { Link } from "react-router-dom";
import { Calendar, MapPin, User } from "lucide-react";

const events = [
  { date: "21 Feb", title: "International Conference on Advanced Research: AI-Powered Revolution", desc: "Redefining Pharmaceutical & Biological Sciences", location: "AV Room & JJCP Department" },
  { date: "02 Feb", title: "Workshop by Ikigai School of AI", desc: "Preparing Students for an AI-Powered Future!", location: "New AV Room & Pharmacy Computer Lab" },
  { date: "30 Jan", title: "Basic Life Support (CPR) & Trauma Care Training", desc: "Life-Saving Skills in Action", location: "New AV Room" },
  { date: "28 Jan", title: "Industrial Visit to Anode Pharma Pvt Ltd", desc: "Bridging Classroom Learning with Industry Practice", location: "Anode Pharma, Chhatarpur" },
];

const EventsSection = () => (
  <section className="py-16 bg-secondary">
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
          JJCP Latest <span className="text-primary">Events</span>
        </h2>
        <Link to="/media" className="hidden md:inline-flex px-5 py-2.5 border-2 border-primary text-primary rounded-md font-medium hover:bg-primary hover:text-primary-foreground transition-colors">
          View All Events
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {events.map((ev, i) => (
          <div key={i} className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow group">
            <div className="bg-primary text-primary-foreground px-4 py-3 flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span className="font-semibold text-sm">{ev.date}</span>
            </div>
            <div className="p-5">
              <h4 className="font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">{ev.title}</h4>
              <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{ev.desc}</p>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <MapPin className="h-3 w-3" />
                <span className="line-clamp-1">{ev.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default EventsSection;
