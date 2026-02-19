import { Phone, MapPin } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="py-16 md:py-24 bg-background">
    <div className="container max-w-xl text-center">
      <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">Contact Us</h2>
      <div className="flex flex-col gap-6">
        <a
          href="tel:+96176531977"
          className="flex items-center justify-center gap-3 text-lg hover:text-primary transition-colors"
        >
          <Phone className="h-5 w-5 text-primary" />
          +961 76 531 977
        </a>
        <div className="flex items-center justify-center gap-3 text-lg text-muted-foreground">
          <MapPin className="h-5 w-5 text-primary" />
          Akkar, Kafartoun Al Wasta
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
