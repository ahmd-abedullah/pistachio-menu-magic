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

// menuCategories data has been moved to /public/data/menu.json
