import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const navItems = [
  { label: "Home", path: "/" },
  {
    label: "About Us", path: "/about",
    children: [
      { label: "About JJCP", path: "/about" },
      { label: "Vision & Mission", path: "/about#vision" },
    ],
  },
  {
    label: "Program", path: "/programs",
    children: [
      { label: "D. PHARMA", path: "/programs#dpharm" },
    ],
  },
  { label: "Academics", path: "/academics" },
  { label: "Campus", path: "/campus" },
  { label: "Alumni", path: "/alumni" },
  { label: "Training & Placement", path: "/placements" },
  { label: "Media", path: "/media" },
  { label: "Research", path: "/research" },
  { label: "Contact Us", path: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="bg-background shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <img src="/images/logo.png" alt="JJ College of Pharmacy" className="h-24 md:h-28" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <div key={item.label} className="relative group">
              <Link
                to={item.path}
                className={`px-3 py-2 text-sm font-medium transition-colors flex items-center gap-1 rounded-md
                  ${location.pathname === item.path ? "text-primary" : "text-foreground hover:text-primary"}`}
              >
                {item.label}
                {item.children && <ChevronDown className="h-3 w-3" />}
              </Link>
              {item.children && (
                <div className="absolute top-full left-0 hidden group-hover:block bg-background shadow-lg rounded-md py-2 min-w-[200px] border border-border z-50">
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      to={child.path}
                      className="block px-4 py-2 text-sm text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="lg:hidden bg-background border-t border-border px-4 pb-4">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              onClick={() => setMobileOpen(false)}
              className={`block py-2.5 text-sm font-medium border-b border-border/50
                ${location.pathname === item.path ? "text-primary" : "text-foreground"}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
