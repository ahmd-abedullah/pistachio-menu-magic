import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MenuCategory } from "@/data/menuData";
import { useCart } from "@/contexts/CartContext";
import { Plus, Check, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";

const formatPrice = (price: number) => {
  return `${price.toLocaleString()} L.L`;
};

const AddButton = ({ name, price, label }: { name: string; price: number; label?: string }) => {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const cartName = label ? `${name} (${label})` : name;

  const handleAdd = () => {
    addItem(cartName, price);
    setAdded(true);
    setTimeout(() => setAdded(false), 800);
  };

  return (
    <button
      onClick={handleAdd}
      className="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
      aria-label={`Add ${cartName} to cart`}
    >
      {added ? <Check className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
    </button>
  );
};

const MenuSection = () => {
  const [categories, setCategories] = useState<MenuCategory[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch(
          "https://pistachio-menu-data.tiiny.site/menu.json",
        );
        if (!response.ok) throw new Error("External API failed");
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.warn("External API failed. Loading local fallback...", error);
        try {
          const localResponse = await fetch("/data/menu.json");
          if (!localResponse.ok) throw new Error("Local fallback also failed");
          const localData = await localResponse.json();
          setCategories(localData);
        } catch (localError) {
          console.error("Both API and local fallback failed:", localError);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchMenu();
  }, []);

  return (
    <section id="menu" className="py-16 md:py-24 bg-background">
      <div className="container max-w-2xl">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-2">
          Our Menu
        </h2>
        <p className="text-center text-muted-foreground mb-10">
          Crafted with love, served with passion
        </p>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <Loader2 className="h-10 w-10 animate-spin text-primary" />
            <p className="text-muted-foreground animate-pulse font-medium">
              Preparing our delicious menu...
            </p>
          </div>
        ) : (
          <Accordion type="single" collapsible className="space-y-3">
            {categories.map((cat) => (
              <AccordionItem
                key={cat.id}
                value={cat.id}
                className="border border-border rounded-lg px-4 overflow-hidden bg-card shadow-sm"
              >
                <AccordionTrigger className="text-lg font-display font-semibold hover:no-underline py-5">
                  <span className="flex items-center gap-3">
                    <span className="text-2xl">{cat.icon}</span>
                    {cat.title}
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="divide-y divide-border">
                    {cat.items.map((item) => (
                      <li key={item.name} className="py-4">
                        {item.sizes && item.sizes.length > 0 ? (
                          <div>
                            <div className="mb-2">
                              <h4 className="font-body font-bold text-foreground">
                                {item.name}
                              </h4>
                              <p className="text-sm text-muted-foreground mt-0.5 leading-relaxed">
                                {item.description}
                              </p>
                            </div>
                            <div className="flex flex-col gap-2 ml-4">
                              {item.sizes.map((size) => (
                                <div key={size.label} className="flex items-center gap-3">
                                  <span className="text-sm text-muted-foreground w-16">{size.label}</span>
                                  <span className="font-display font-bold text-primary whitespace-nowrap text-sm flex-1">
                                    {formatPrice(size.price)}
                                  </span>
                                  <AddButton name={item.name} price={size.price} label={size.label} />
                                </div>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <div className="flex items-center gap-3">
                            <div className="flex-1 min-w-0">
                              <h4 className="font-body font-bold text-foreground">
                                {item.name}
                              </h4>
                              <p className="text-sm text-muted-foreground mt-0.5 leading-relaxed">
                                {item.description}
                              </p>
                            </div>
                            <span className="font-display font-bold text-primary whitespace-nowrap text-lg">
                              {formatPrice(item.price!)}
                            </span>
                            <AddButton name={item.name} price={item.price!} />
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )}
      </div>
    </section>
  );
};

export default MenuSection;
