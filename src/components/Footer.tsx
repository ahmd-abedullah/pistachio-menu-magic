import { Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground py-10">
    <div className="container max-w-2xl text-center space-y-4">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-primary-foreground/70">
        <a href="tel:+96176531977" className="flex items-center gap-2 hover:text-primary transition-colors">
          <Phone className="h-4 w-4" /> +961 76 531 977
        </a>
        <span className="hidden sm:inline text-primary-foreground/30">|</span>
        <span className="flex items-center gap-2">
          <MapPin className="h-4 w-4" /> Akkar, Kafartoun Al Wasta
        </span>
      </div>
      <p className="text-xs text-primary-foreground/40">
        © {new Date().getFullYear()} PISTACHIO. Developed by AhmadAbd
      </p>
    </div>
  </footer>
);

export default Footer;
