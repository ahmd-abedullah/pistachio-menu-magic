import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Minus, Trash2, MapPin, Send, ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const PHONE = "96176531977";

const formatPrice = (price: number) => `${price.toLocaleString()} L.L`;

const CartDrawer = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const { items, removeItem, updateQuantity, clearCart, totalPrice } = useCart();
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [locationLink, setLocationLink] = useState("");
  const [locating, setLocating] = useState(false);

  const shareLocation = () => {
    if (!navigator.geolocation) {
      toast.error("Geolocation is not supported by your browser");
      return;
    }
    setLocating(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const link = `https://www.google.com/maps?q=${pos.coords.latitude},${pos.coords.longitude}`;
        setLocationLink(link);
        setLocating(false);
        toast.success("Location shared!");
      },
      () => {
        setLocating(false);
        toast.error("Could not get your location");
      }
    );
  };

  const submitOrder = () => {
    if (items.length === 0) {
      toast.error("Your cart is empty");
      return;
    }
    if (!phone.trim()) {
      toast.error("Please enter your phone number");
      return;
    }
    if (!address.trim() && !locationLink) {
      toast.error("Please enter your address or share your location");
      return;
    }

    const orderLines = items
      .map((i) => `- ${i.name} x${i.quantity} – ${formatPrice(i.price * i.quantity)}`)
      .join("\n");

    let msg = `🟢 New Order – PISTACHIO\n\n📦 Order Details:\n${orderLines}\n\n💰 Total: ${formatPrice(totalPrice)}\n\n📞 Phone:\n${phone.trim()}`;

    if (address.trim()) {
      msg += `\n\n📍 Address:\n${address.trim()}`;
    }
    if (locationLink) {
      msg += `\n\n📌 Google Maps Location:\n${locationLink}`;
    }

    const url = `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
    clearCart();
    setPhone("");
    setAddress("");
    setLocationLink("");
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60"
            onClick={onClose}
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-md bg-background shadow-2xl flex flex-col"
          >
            <div className="flex items-center justify-between p-4 border-b border-border">
              <h2 className="font-display text-xl font-bold flex items-center gap-2">
                <ShoppingCart className="h-5 w-5 text-primary" />
                Your Cart
              </h2>
              <button onClick={onClose} className="p-2 hover:bg-muted rounded-md" aria-label="Close cart">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {items.length === 0 ? (
                <p className="text-center text-muted-foreground py-12">Your cart is empty</p>
              ) : (
                <>
                  <ul className="space-y-3">
                    {items.map((item) => (
                      <li key={item.name} className="flex items-center gap-3 bg-card border border-border rounded-lg p-3">
                        <div className="flex-1 min-w-0">
                          <p className="font-bold text-sm truncate">{item.name}</p>
                          <p className="text-xs text-muted-foreground">{formatPrice(item.price)} each</p>
                        </div>
                        <div className="flex items-center gap-1">
                          <button
                            onClick={() => updateQuantity(item.name, -1)}
                            disabled={item.quantity <= 1}
                            className="h-7 w-7 flex items-center justify-center rounded-md border border-border disabled:opacity-30 hover:bg-muted transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="w-7 text-center text-sm font-bold">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.name, 1)}
                            className="h-7 w-7 flex items-center justify-center rounded-md border border-border hover:bg-muted transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                        <span className="font-display font-bold text-primary w-24 text-right text-sm">{formatPrice(item.price * item.quantity)}</span>
                        <button
                          onClick={() => removeItem(item.name)}
                          className="text-destructive hover:text-destructive/80 p-1"
                          aria-label="Remove item"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </li>
                    ))}
                  </ul>

                  <div className="flex justify-between items-center font-display text-lg font-bold border-t border-border pt-3">
                    <span>Total</span>
                    <span className="text-primary">{formatPrice(totalPrice)}</span>
                  </div>

                  <div className="space-y-3 border-t border-border pt-4">
                    <h3 className="font-display font-bold text-base">Your Details</h3>

                    <div className="space-y-1.5">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="03xxxxxx"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="address">
                        Hat location te3ak, kteblna wen enta seken (shi ma3ruf)
                      </Label>
                      <Input
                        id="address"
                        placeholder="Your address..."
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </div>

                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={shareLocation}
                      disabled={locating}
                    >
                      <MapPin className="h-4 w-4 mr-2" />
                      {locating ? "Getting location..." : locationLink ? "Location Shared ✓" : "Share Location"}
                    </Button>

                    {locationLink && (
                      <p className="text-xs text-muted-foreground break-all">{locationLink}</p>
                    )}
                  </div>
                </>
              )}
            </div>

            {items.length > 0 && (
              <div className="p-4 border-t border-border">
                <Button className="w-full text-base font-bold h-12" onClick={submitOrder}>
                  <Send className="h-4 w-4 mr-2" />
                  B3at l-talabiye
                </Button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
