export interface MenuItem {
  name: string
  price: string
  description: string
  image?: string
}

export interface MenuCategory {
  title: string
  subtitle?: string
  items: MenuItem[]
}

export const appetizers: MenuCategory = {
  title: "Appetizers",
  items: [
    {
      name: "Tokwa't Baboy",
      price: "190",
      description: "Fried pork and tofu with special vinegar and onions.",
      image: "/images/food/tokwa-baboy.jpg",
    },
    {
      name: "Calamares Fritos",
      price: "265",
      description: "Tasty deep-fried squid rings.",
      image: "/images/food/calamares.jpg",
    },
    {
      name: "Spicy Sisig",
      price: "220",
      description: "Crispy spiced minced pork mask.",
      image: "/images/food/sisig.jpg",
    },
    {
      name: "French Fries",
      price: "110",
      description: "Shoestring fries fried until crispy and served hot.",
      image: "/images/food/french-fries.jpg",
    },
    {
      name: "Spicy Chicken Wings",
      price: "250",
      description: "Succulent spicy fried chicken wings.",
      image: "/images/food/chicken-wings.jpg",
    },
    {
      name: "Chicharon Bulaklak",
      price: "225",
      description: "Deep-fried pork ruffle fats cooked to perfect crispiness.",
      image: "/images/food/chicharon-bulaklak.jpg",
    },
  ],
}

export const soups: MenuCategory = {
  title: "Soups",
  items: [
    {
      name: "La Paz Batchoy",
      price: "175",
      description: "Ilonggo noodle soup with pork entrails and cracklings.",
      image: "/images/food/batchoy.jpg",
    },
    {
      name: "Goto Batangas",
      price: "235",
      description: "Filipino soup with beef offals, tendons, ginger, and garlic.",
      image: "/images/food/goto.jpg",
    },
    {
      name: "Crab & Corn Chowder",
      price: "150",
      description: "Rich soup with crab and corn.",
      image: "/images/food/corn-chowder.jpg",
    },
    {
      name: "Molo Soup",
      price: "200",
      description: "Soup with meat-filled dumplings, shredded chicken, and robust broth.",
      image: "/images/food/molo-soup.jpg",
    },
  ],
}

export const alaCarte: MenuCategory = {
  title: "Ala Carte",
  items: [
    {
      name: "Crispy Pata",
      price: "640",
      description: "Deep-fried front pork leg that is crispy on the outside and moist inside.",
      image: "/images/food/crispy-pata.jpg",
    },
    {
      name: "Half Fried Chicken",
      price: "275",
      description: "Mouthwatering in-house specialty fried chicken, good for sharing.",
      image: "/images/food/fried-chicken.jpg",
    },
    {
      name: "Crispy Lechon Kawali",
      price: "260",
      description: "Desirable crispy deep-fried pork belly.",
      image: "/images/food/lechon-kawali.jpg",
    },
    {
      name: "Pan Grilled Liempo",
      price: "295",
      description: "Definitely as tasty as your traditional pork barbecue.",
      image: "/images/food/grilled-liempo.jpg",
    },
    {
      name: "Chicken Pork Adobo",
      price: "230",
      description: "Rich, dark marinated chicken and pork stew.",
      image: "/images/food/adobo.jpg",
    },
  ],
}

export const nilagaSinigang: MenuCategory = {
  title: "Nilaga & Sinigang",
  items: [
    {
      name: "Nilagang Bulalo",
      price: "385",
      description: "Boiled beef shanks with bone marrow cooked in a delicious Batangas recipe.",
      image: "/images/food/bulalo.jpg",
    },
    {
      name: "Nilagang Baka Batangas",
      price: "265",
      description: "Delightful boiled beef brisket and short ribs soup.",
      image: "/images/food/nilagang-baka.jpg",
    },
    {
      name: "Sinigang na Baboy",
      price: "265",
      description: "Enjoyable pork and vegetables in a tamarind-based soup.",
      image: "/images/food/sinigang-baboy.jpg",
    },
    {
      name: "Sinigang na Hipon",
      price: "285",
      description: "Tempting fresh shrimp and vegetables in a tamarind-based soup.",
      image: "/images/food/sinigang-hipon.jpg",
    },
    {
      name: "Sinigang sa Miso",
      price: "295",
      description: "Maya-maya fish in a delicious tamarind and miso combination soup.",
      image: "/images/food/sinigang-miso.jpg",
    },
  ],
}

export const filipinoBreakfast: MenuCategory = {
  title: "Filipino Breakfast",
  subtitle: "Served with egg, pickled papaya & garlic rice. Choice of coffee, hot tea, iced tea, or Milo.",
  items: [
    {
      name: "Beef Tapa",
      price: "200",
      description: "Marinated beef sirloin stir-fried to perfection.",
      image: "/images/food/beef-tapa.jpg",
    },
    {
      name: "Daing na Bangus",
      price: "220",
      description: "Milkfish marinated in vinegar and garlic, fried till golden brown.",
      image: "/images/food/daing-bangus.jpg",
    },
    {
      name: "Native Longganisa",
      price: "200",
      description: "Northern-style sausage seasoned with garlic, black pepper, and spices.",
      image: "/images/food/longganisa.jpg",
    },
    {
      name: "Pork Tocino",
      price: "200",
      description: "Authentic Kapampangan sweet marinated pork.",
      image: "/images/food/tocino.jpg",
    },
  ],
}

export const saversMeal: MenuCategory = {
  title: "Savers Meal",
  items: [
    {
      name: "1-pc Chicken w/ Rice & Iced Tea",
      price: "140",
      description: "",
    },
    {
      name: "2-pc Chicken w/ Rice & Iced Tea",
      price: "215",
      description: "",
    },
    {
      name: "Spaghetti & 1-pc Chicken w/ Iced Tea",
      price: "150",
      description: "",
    },
    {
      name: "Spaghetti w/ Iced Tea",
      price: "90",
      description: "",
    },
    {
      name: "Cheeseburger & Fries w/ Iced Tea",
      price: "140",
      description: "",
    },
    {
      name: "Cheeseburger & Spaghetti w/ Iced Tea",
      price: "145",
      description: "",
    },
  ],
}

export const rice: MenuCategory = {
  title: "Rice",
  items: [
    {
      name: "Plain Steamed Rice",
      price: "35",
      description: "Fragrant steamed white rice.",
    },
    {
      name: "Garlic Rice",
      price: "50",
      description: "Stir-fried rice with golden brown garlic.",
    },
    {
      name: "Yang Chow Rice",
      price: "120",
      description: "Chinese fried rice with chorizo, egg, green peas, and Chinese kangkong.",
      image: "/images/food/yang-chow.jpg",
    },
  ],
}

export const vegetables: MenuCategory = {
  title: "Vegetables",
  items: [
    {
      name: "Chopsuey",
      price: "205",
      description: "Chinese stir-fried mixed vegetables in special seasoning.",
      image: "/images/food/chopsuey.jpg",
    },
    {
      name: "Crispy Pinakbet",
      price: "225",
      description: "Northern vegetables simmered in shrimp paste topped with crispy pork belly.",
      image: "/images/food/pinakbet.jpg",
    },
  ],
}

export const sandwiches: MenuCategory = {
  title: "Sandwiches",
  items: [
    {
      name: "Cheeseburger",
      price: "165",
      description: "Delicious American-style burger topped with cheddar cheese.",
      image: "/images/food/cheeseburger.jpg",
    },
    {
      name: "Classic Clubhouse",
      price: "200",
      description: "Double-decker sandwich with ham, cheese, egg, and chicken.",
      image: "/images/food/clubhouse.jpg",
    },
    {
      name: "Grilled Ham & Cheese",
      price: "135",
      description: "Classic grilled sandwich with ham and cheese.",
      image: "/images/food/grilled-ham-cheese.jpg",
    },
  ],
}

export const desserts: MenuCategory = {
  title: "Desserts",
  items: [
    {
      name: "Leche Flan",
      price: "60",
      description: "Smooth caramel custard topped with sweet macapuno.",
      image: "/images/food/leche-flan.jpg",
    },
    {
      name: "Fruit Salad",
      price: "100",
      description: "Creamy blend of assorted fruit preserves.",
      image: "/images/food/fruit-salad.jpg",
    },
    {
      name: "Halo-Halo",
      price: "125",
      description: "Exciting Filipino icy dessert with assorted sweet preserves.",
      image: "/images/food/halo-halo.jpg",
    },
  ],
}

export const beverages = {
  title: "Beverages",
  juices: [
    { name: "Pineapple Juice", price: "65" },
    { name: "Mango Juice", price: "65" },
    { name: "Calamansi Juice", price: "65" },
  ],
  teaCoffee: [
    { name: "Iced Tea (Lemon)", price: "45" },
    { name: "Red Iced Tea", price: "45" },
    { name: "Hot Tea", price: "45" },
    { name: "Coffee (3-in-1)", price: "45" },
    { name: "Milo (Hot/Cold)", price: "45" },
  ],
  others: [
    { name: "Milk (Hot/Cold)", price: "70" },
    { name: "Softdrinks (Can)", price: "95" },
    { name: "Mineral Water (500ml)", price: "35" },
  ],
}

export const beer = {
  title: "Beer in Can",
  items: [
    { name: "Red Horse", price: "115" },
    { name: "San Mig Light", price: "115" },
    { name: "San Miguel Pale Pilsen", price: "115" },
    { name: "San Miguel Flavored Beer", price: "115", description: "Apple or Lemon" },
  ],
}

export const beerBites = {
  title: "The Royal Toast",
  price: "410",
  description: "3 Beer Cans (same kind) + 1 Royal Bite of your choice",
  choices: ["Crispy Chicken Skin", "Sauteed Sweet & Spicy Hotdog", "Tofu Sisig"],
}
