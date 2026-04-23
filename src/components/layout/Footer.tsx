import { Link } from "react-router-dom";
import { MapPin, Mail, Facebook, Instagram, Linkedin, Twitter, Globe } from "lucide-react";

const Footer = () => (
  <footer className="bg-footer text-footer-foreground">
    <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* About */}
      <div>
        <img src="/images/logo.png" alt="JJCP Logo" className="h-20 mb-12" />
        <p className="text-sm leading-relaxed opacity-80">
          JJ College of Pharmacy is committed to providing quality education in pharmaceutical sciences, fostering innovation and research excellence.
        </p>
        <div className="flex gap-3 mt-4">
          <a href="#" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-primary/20 hover:bg-primary transition-colors">
            <Facebook className="h-4 w-4" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-primary/20 hover:bg-primary transition-colors">
            <Instagram className="h-4 w-4" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-primary/20 hover:bg-primary transition-colors">
            <Linkedin className="h-4 w-4" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-primary/20 hover:bg-primary transition-colors">
            <Twitter className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Quick Links */}
      <div>
        <h4 className="text-lg font-semibold mb-4 text-primary-foreground font-heading">Quick Links</h4>
        <ul className="space-y-2 text-sm">
          {[
            { label: "Home", path: "/" },
            { label: "About Us", path: "/about" },
            { label: "Programs", path: "/programs" },
            { label: "Research", path: "/research" },
            { label: "Contact Us", path: "/contact" },
          ].map((link) => (
            <li key={link.label}>
              <Link to={link.path} className="hover:text-primary transition-colors opacity-80 hover:opacity-100">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Programs */}
      <div>
        <h4 className="text-lg font-semibold mb-4 text-primary-foreground font-heading">Our Programs</h4>
        <ul className="space-y-2 text-sm">
          {["D. PHARMA", "B. PHARMA"].map((p) => (
            <li key={p}>
              <Link to="/programs" className="hover:text-primary transition-colors opacity-80 hover:opacity-100">
                {p}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact Info */}
      <div>
        <h4 className="text-lg font-semibold mb-4 text-primary-foreground font-heading">Contact Info</h4>
        <div className="space-y-3 text-sm">
          <div className="flex items-start gap-2">
            <MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" />
            <span className="opacity-80">Gathewara, Panna Road, Chhatarpur (M.P.)</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-primary shrink-0" />
            <a href="mailto:jjcolgofpharmacy@gmail.com" className="opacity-80 hover:opacity-100">jjcolgofpharmacy@gmail.com</a>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="h-4 w-4 text-primary shrink-0" />
            <a href="https://www.jjcp.co.in" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100">www.jjcp.co.in</a>
          </div>
        </div>
      </div>
    </div>

    <div className="border-t border-primary/20">
      <div className="container mx-auto px-4 py-4 text-center text-sm opacity-60">
        © {new Date().getFullYear()} JJ College of Pharmacy. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
