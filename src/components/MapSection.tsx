const MapSection = () => (
  <section id="location" className="py-16 md:py-24 bg-secondary">
    <div className="container max-w-3xl">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-2">Our Location</h2>
      <p className="text-center text-muted-foreground mb-8">Come visit us!</p>
      <div className="rounded-lg overflow-hidden shadow-lg aspect-video">
        <iframe
          title="PISTACHIO Coffee & Crêpe location"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1500!2d36.359125!3d34.574991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2slb!4v1700000000000"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full min-h-[300px]"
        />
      </div>
    </div>
  </section>
);

export default MapSection;
