import { motion } from "framer-motion";

const Hero = () => (
  <section className="relative flex flex-col items-center justify-center py-20 md:py-32 bg-foreground text-primary-foreground overflow-hidden">
    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,hsl(var(--pistachio))_0%,transparent_70%)]" />
    <motion.img
      src="/pistachio_logo.png"
      alt="PISTACHIO"
      className="h-32 w-32 md:h-40 md:w-40 rounded-full object-cover shadow-2xl mb-6 relative z-10"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6 }}
    />
    <motion.h1
      className="font-display text-4xl md:text-6xl font-bold tracking-tight text-center relative z-10"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      PISTACHIO
    </motion.h1>
    <motion.p
      className="mt-3 text-lg md:text-xl text-primary-foreground/70 font-body tracking-wide text-center relative z-10"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.5 }}
    >
      Coffee Shop & Crêpe
    </motion.p>
    <motion.p
      className="mt-1 text-sm text-primary/80 font-body uppercase tracking-[0.3em] relative z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.5 }}
    >
      Taste the difference
    </motion.p>
  </section>
);

export default Hero;
