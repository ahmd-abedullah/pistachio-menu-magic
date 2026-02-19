import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const PHONE = "96176531977";
const MESSAGE = encodeURIComponent("Hi Kifak bade etlub order");
const URL = `https://wa.me/${PHONE}?text=${MESSAGE}`;

const WhatsAppButton = () => (
  <motion.a
    href={URL}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Order via WhatsApp"
    className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-lg"
    style={{ backgroundColor: "#25D366" }}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
  >
    <MessageCircle className="h-7 w-7 text-white" fill="white" />
  </motion.a>
);

export default WhatsAppButton;
