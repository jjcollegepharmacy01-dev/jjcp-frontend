import { Mail, Globe } from "lucide-react";

const TopBar = () => (
  <div className="bg-topbar py-2 px-4">
    <div className="container mx-auto flex flex-wrap items-center justify-between text-sm text-primary-foreground">
      <div className="font-medium hidden md:block">
        A golden opportunity to make a career in Allopathic Pharmacy
      </div>
      <div className="flex items-center gap-6">
        <a href="mailto:jjcolgofpharmacy@gmail.com" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
          <Mail className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">jjcolgofpharmacy@gmail.com</span>
        </a>
        <a href="https://www.jjcp.co.in" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
          <Globe className="h-3.5 w-3.5" />
          <span>www.jjcp.co.in</span>
        </a>
      </div>
    </div>
  </div>
);

export default TopBar;
