export interface MenuItem {
  name: string;
  description: string;
  price: number;
}

export interface MenuCategory {
  id: string;
  title: string;
  icon: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    id: "hot-drinks",
    title: "Hot Drinks",
    icon: "☕",
    items: [
      { name: "Espresso", description: "Rich and bold single shot of pure Italian espresso", price: 4 },
      { name: "Double Espresso", description: "Twice the intensity, twice the pleasure", price: 5 },
      { name: "Americano", description: "Smooth espresso with hot water for a clean finish", price: 5 },
      { name: "Cappuccino", description: "Velvety steamed milk over a perfect espresso base", price: 6 },
      { name: "Latte", description: "Creamy milk blended with rich espresso", price: 6 },
      { name: "Mocha", description: "Chocolate and espresso united in a warm embrace", price: 7 },
      { name: "Hot Chocolate", description: "Silky Belgian chocolate melted to perfection", price: 6 },
      { name: "Turkish Coffee", description: "Traditional slow-brewed with cardamom", price: 5 },
      { name: "Pistachio Latte", description: "Our signature latte with real pistachio cream", price: 8 },
    ],
  },
  {
    id: "frappe",
    title: "Frappé",
    icon: "🧊",
    items: [
      { name: "Classic Frappé", description: "Icy blended coffee with a frothy top", price: 7 },
      { name: "Caramel Frappé", description: "Buttery caramel swirled into frozen coffee bliss", price: 8 },
      { name: "Mocha Frappé", description: "Chocolate lovers' frozen coffee dream", price: 8 },
      { name: "Vanilla Frappé", description: "Smooth vanilla bean blended with ice and coffee", price: 7 },
      { name: "Pistachio Frappé", description: "Our house special with real pistachio cream", price: 9 },
      { name: "Oreo Frappé", description: "Crushed Oreo cookies in a creamy frozen base", price: 9 },
    ],
  },
  {
    id: "milkshakes",
    title: "Milkshakes",
    icon: "🥤",
    items: [
      { name: "Chocolate Milkshake", description: "Thick and creamy chocolate indulgence", price: 7 },
      { name: "Strawberry Milkshake", description: "Fresh strawberries blended with real cream", price: 7 },
      { name: "Vanilla Milkshake", description: "Classic vanilla bean shake, rich and smooth", price: 7 },
      { name: "Banana Milkshake", description: "Ripe bananas whipped into creamy perfection", price: 7 },
      { name: "Pistachio Milkshake", description: "Nutty pistachio flavour in every sip", price: 8 },
      { name: "Lotus Milkshake", description: "Biscoff cookie butter blended to perfection", price: 8 },
    ],
  },
  {
    id: "smoothies",
    title: "Smoothies",
    icon: "🍓",
    items: [
      { name: "Mango Tango", description: "Tropical mango with a citrus twist", price: 8 },
      { name: "Berry Blast", description: "Mixed berries bursting with antioxidants", price: 8 },
      { name: "Green Detox", description: "Spinach, apple, ginger – fresh and energizing", price: 9 },
      { name: "Tropical Sunrise", description: "Pineapple, mango, and coconut paradise", price: 9 },
      { name: "Strawberry Banana", description: "A timeless duo blended smooth", price: 8 },
    ],
  },
  {
    id: "iced-drinks",
    title: "Iced Drinks",
    icon: "❄️",
    items: [
      { name: "Iced Americano", description: "Bold espresso chilled over crystal ice", price: 6 },
      { name: "Iced Latte", description: "Smooth cold milk with a shot of espresso", price: 7 },
      { name: "Iced Mocha", description: "Chocolate espresso served refreshingly cold", price: 7 },
      { name: "Iced Caramel Latte", description: "Sweet caramel drizzle over cold brew perfection", price: 8 },
      { name: "Iced Pistachio Latte", description: "Our signature flavour served cold", price: 8 },
    ],
  },
  {
    id: "iced-tea",
    title: "Iced Tea",
    icon: "🍵",
    items: [
      { name: "Peach Iced Tea", description: "Sweet Georgia peach steeped in cool tea", price: 6 },
      { name: "Lemon Iced Tea", description: "Zesty lemon in freshly brewed black tea", price: 5 },
      { name: "Passion Fruit Iced Tea", description: "Exotic passion fruit with green tea base", price: 6 },
      { name: "Mango Iced Tea", description: "Tropical mango infusion over ice", price: 6 },
    ],
  },
  {
    id: "refreshers",
    title: "Refreshers",
    icon: "🍋",
    items: [
      { name: "Strawberry Lemonade", description: "Fresh squeezed with real strawberry purée", price: 7 },
      { name: "Mojito Refresher", description: "Mint and lime – cool and invigorating", price: 7 },
      { name: "Blue Lagoon", description: "Vibrant blue curaçao with sparkling lemonade", price: 8 },
      { name: "Watermelon Cooler", description: "Summer in a glass – pure watermelon bliss", price: 7 },
      { name: "Pistachio Refresher", description: "Unique pistachio-infused sparkling drink", price: 8 },
    ],
  },
  {
    id: "crepes",
    title: "Crêpes",
    icon: "🥞",
    items: [
      { name: "Nutella Crêpe", description: "Warm crêpe filled with gooey Nutella", price: 8 },
      { name: "Nutella & Banana", description: "Nutella heaven with sliced fresh banana", price: 9 },
      { name: "Nutella & Strawberry", description: "Chocolate hazelnut with juicy strawberries", price: 9 },
      { name: "Pistachio Crêpe", description: "Our signature pistachio cream filling", price: 10 },
      { name: "Lotus Crêpe", description: "Biscoff spread with caramelized crunch", price: 9 },
      { name: "Mixed Berry Crêpe", description: "Seasonal berries with whipped cream", price: 10 },
      { name: "Cheese & Zaatar Crêpe", description: "Savory Lebanese-style with akkawi cheese", price: 8 },
      { name: "Cheese & Ham Crêpe", description: "Classic savory combination, golden-grilled", price: 9 },
    ],
  },
  {
    id: "cocktails",
    title: "Cocktails",
    icon: "🍹",
    items: [
      { name: "Virgin Mojito", description: "Classic lime and mint – no alcohol, all flavour", price: 8 },
      { name: "Piña Colada", description: "Creamy coconut and pineapple tropical escape", price: 9 },
      { name: "Strawberry Daiquiri", description: "Frozen strawberry bliss, refreshingly sweet", price: 9 },
      { name: "Passion Fruit Fizz", description: "Sparkling passion fruit with a citrus kick", price: 8 },
      { name: "Mango Margarita", description: "Tropical mango with a tangy lime edge", price: 10 },
    ],
  },
  {
    id: "croissants",
    title: "Croissants",
    icon: "🥐",
    items: [
      { name: "Plain Butter Croissant", description: "Flaky, golden, buttery layers of perfection", price: 4 },
      { name: "Chocolate Croissant", description: "Dark chocolate baked inside buttery pastry", price: 5 },
      { name: "Pistachio Croissant", description: "Filled with our house pistachio cream", price: 6 },
      { name: "Zaatar Croissant", description: "Lebanese zaatar twist on a French classic", price: 5 },
      { name: "Cheese Croissant", description: "Melted akkawi cheese in a crispy shell", price: 5 },
      { name: "Almond Croissant", description: "Topped with sliced almonds and cream filling", price: 6 },
    ],
  },
];
