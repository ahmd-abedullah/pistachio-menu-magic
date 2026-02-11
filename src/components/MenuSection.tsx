import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { menuCategories } from "@/data/menuData";

const MenuSection = () => (
  <section id="menu" className="py-16 md:py-24 bg-background">
    <div className="container max-w-2xl">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-2">Our Menu</h2>
      <p className="text-center text-muted-foreground mb-10">Crafted with love, served with passion</p>

      <Accordion type="single" collapsible className="space-y-3">
        {menuCategories.map((cat) => (
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
                  <li key={item.name} className="py-4 flex justify-between items-start gap-4">
                    <div className="flex-1 min-w-0">
                      <h4 className="font-body font-bold text-foreground">{item.name}</h4>
                      <p className="text-sm text-muted-foreground mt-0.5 leading-relaxed">{item.description}</p>
                    </div>
                    <span className="font-display font-bold text-primary whitespace-nowrap text-lg">${item.price}</span>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default MenuSection;
