export interface MenuItem {
  name: string
  price: string
  price2?: string
  description: string
  image?: string
  badge?: string
}

export interface MenuCategory {
  title: string
  subtitle?: string
  items: MenuItem[]
}

// ===== APPETIZERS (removed old soups that moved) =====
export const appetizers: MenuCategory = {
  title: "Appetizers",
  items: [
    { name: "Calamares Fritos", price: "265", description: "Tasty deep-fried squid rings.", image: "/images/food/calamares.jpg" },
    { name: "Salt & Pepper Squid", price: "265", description: "Crispy squid tossed with garlic, chilies, and cracked black pepper.", image: "/images/food/salt-pepper-squid.jpg" },
    { name: "Spicy Chicken Wings", price: "250", description: "Succulent spicy fried chicken wings.", image: "/images/food/chicken-wings.jpg" },
    { name: "Chicharon Bulaklak", price: "225", description: "Deep-fried pork ruffle fats cooked to perfect crispiness.", image: "/images/food/chicharon-bulaklak.jpg" },
    { name: "Spicy Sisig", price: "220", description: "Crispy spiced minced pork mask.", image: "/images/food/sisig.jpg", badge: "Best Seller" },
    { name: "Tokwa't Baboy", price: "190", description: "Fried pork and tofu with special vinegar and onions.", image: "/images/food/tokwa-baboy.jpg" },
    { name: "French Fries", price: "110", description: "Shoestring fries fried until crispy and served hot.", image: "/images/food/french-fries.jpg" },
  ],
}

// ===== SOUPS (updated: removed La Paz Batchoy, Goto Batangas, Molo Soup, Crab & Corn Chowder; added new) =====
export const soups: MenuCategory = {
  title: "Soups",
  items: [
    { name: "Lomi Overload", price: "199", description: "Thick egg noodle soup loaded with pork, liver, vegetables, and quail eggs.", image: "/images/food/lomi.jpg", badge: "Best Seller" },
    { name: "Mushroom Soup", price: "135", description: "Rich and creamy mushroom soup.", image: "/images/food/mushroom-soup.jpg" },
    { name: "Crab & Corn Soup", price: "135", description: "Hearty soup with crab meat and sweet corn.", image: "/images/food/corn-chowder.jpg" },
  ],
}

// ===== ALA CARTE (updated: removed Half Fried Chicken, Sinigang na Hipon, Sinigang sa Miso; added new) =====
export const alaCarte: MenuCategory = {
  title: "Ala Carte",
  items: [
    { name: "Crispy Pata", price: "750", description: "Deep-fried front pork leg that is crispy on the outside and moist inside.", image: "/images/food/crispy-pata.jpg", badge: "Best Seller" },
    { name: "Salmon Belly Sinigang", price: "299", description: "Fresh salmon belly in a savory tamarind-based sour soup.", image: "/images/food/salmon-belly.jpg" },
    { name: "Chicken Ala Max", price: "299", description: "Signature-style crispy fried chicken with special seasoning.", image: "/images/food/fried-chicken.jpg" },
    { name: "Pan Grilled Liempo", price: "295", description: "Definitely as tasty as your traditional pork barbecue.", image: "/images/food/grilled-liempo.jpg" },
    { name: "Crispy Lechon Kawali", price: "260", description: "Desirable crispy deep-fried pork belly.", image: "/images/food/lechon-kawali.jpg" },
    { name: "Orange Chicken", price: "250", description: "Crispy fried chicken glazed in sweet tangy orange sauce.", image: "/images/food/orange-chicken.jpg", badge: "Best Seller" },
    { name: "Chicken Pork Adobo", price: "230", description: "Rich, dark marinated chicken and pork stew.", image: "/images/food/adobo.jpg" },
    { name: "Breaded Porkchop", price: "230", description: "Golden crispy breaded pork cutlet served with gravy.", image: "/images/food/porkchop.jpg" },
    { name: "Chicken Pastel", price: "230", description: "Creamy chicken stew with carrots, potatoes, and green peas.", image: "/images/food/chicken-pastel.jpg" },
  ],
}

// ===== NILAGA & SINIGANG (kept, minus removed items) =====
export const nilagaSinigang: MenuCategory = {
  title: "Nilaga & Sinigang",
  items: [
    { name: "Nilagang Bulalo", price: "385", description: "Boiled beef shanks with bone marrow cooked in a delicious Batangas recipe.", image: "/images/food/bulalo.jpg" },
    { name: "Nilagang Baka Batangas", price: "265", description: "Delightful boiled beef brisket and short ribs soup.", image: "/images/food/nilagang-baka.jpg" },
    { name: "Sinigang na Baboy", price: "265", description: "Enjoyable pork and vegetables in a tamarind-based soup.", image: "/images/food/sinigang-baboy.jpg" },
  ],
}

// ===== PASTA (new section) =====
export const pasta: MenuCategory = {
  title: "Pasta",
  subtitle: "Solo / Platter (good for 2-3)",
  items: [
    { name: "Chicken Alfredo", price: "199", price2: "299", description: "Creamy white sauce pasta with tender chicken strips.", image: "/images/food/carbonara.jpg" },
    { name: "Meatball Spaghetti", price: "199", price2: "299", description: "Filipino-style sweet tomato sauce with savory meatballs.", image: "/images/food/spaghetti.jpg" },
    { name: "Creamy Carbonara", price: "199", price2: "299", description: "Rich and creamy egg-based pasta with bacon.", image: "/images/food/carbonara.jpg" },
    { name: "Chicken  Fettuccine", price: "199", price2: "299", description: " Fettuccine noodles in a creamy chicken sauce.", image: "/images/food/spaghetti.jpg" },
  ],
}

// ===== NOODLES (new section) =====
export const noodles: MenuCategory = {
  title: "Noodles",
  subtitle: "Solo / Platter (good for 2-3)",
  items: [
    { name: "Pancit Guisado", price: "149", price2: "249", description: "Classic stir-fried rice noodles with meat and vegetables.", image: "/images/food/pancit-guisado.jpg" },
    { name: "Sotanghon Guisado", price: "149", price2: "249", description: "Glass noodles stir-fried with chicken and vegetables.", image: "/images/food/lomi.jpg" },
    { name: "Bihon Guisado", price: "149", price2: "249", description: "Thin rice noodles sauteed with pork and mixed vegetables.", image: "/images/food/pancit-guisado.jpg" },
    { name: "Palabok", price: "149", price2: "249", description: "Rice noodles in rich shrimp sauce with pork, egg, and chicharon.", image: "/images/food/pancit-guisado.jpg" },
  ],
}

// ===== FILIPINO BREAKFAST / SILOG (updated) =====
export const filipinoBreakfast: MenuCategory = {
  title: "Filipino Breakfast (Silog)",
  subtitle: "Served with egg, pickled papaya & garlic rice. Upgrade to Merah/Chiao Fan/Tinapa Rice +₱25",
  items: [
    { name: "Tapsilog", price: "149", description: "Marinated beef sirloin with egg and garlic rice.", image: "/images/food/beef-tapa.jpg" },
    { name: "Tocilog", price: "149", description: "Sweet cured pork with egg and garlic rice.", image: "/images/food/tocino.jpg" },
    { name: "Bangsilog", price: "149", description: "Milkfish marinated in vinegar and garlic, fried till golden.", image: "/images/food/daing-bangus.jpg" },
    { name: "Longsilog", price: "149", description: "Northern-style sausage with egg and garlic rice.", image: "/images/food/longganisa.jpg" },
    { name: "Hungarian Silog", price: "149", description: "Hungarian sausage with egg and garlic rice." },
    { name: "Chicken Silog", price: "149", description: "Fried chicken with egg and garlic rice." },
    { name: "Cornsilog", price: "149", description: "Corned beef with egg and garlic rice." },
    { name: "Sisigsilog", price: "149", description: "Spicy sizzling sisig with egg and garlic rice." },
    { name: "Liemposilog", price: "149", description: "Grilled liempo with egg and garlic rice." },
    { name: "Porkchopsilog", price: "149", description: "Breaded porkchop with egg and garlic rice." },
    { name: "Hotsilog", price: "129", description: "Hotdog with egg and garlic rice." },
    { name: "Hamsilog", price: "129", description: "Ham with egg and garlic rice." },
    { name: "Lumpiasilog", price: "149", description: "Crispy spring rolls with egg and garlic rice." },
    { name: "Adobo Silog", price: "159", description: "Chicken pork adobo with egg and garlic rice." },
  ],
}

// ===== SAVERS MEAL (updated) =====
export const saversMeal: MenuCategory = {
  title: "Savers Meal",
  items: [
    { name: "1-pc Chicken + Rice + Iced Tea", price: "169", description: "" },
    { name: "2-pc Chicken + Rice + Iced Tea", price: "215", description: "" },
    { name: "1-pc Chicken + Spaghetti + Iced Tea", price: "199", description: "" },
    { name: "Spaghetti + Iced Tea", price: "99", description: "" },
    { name: "Cheeseburger + Fries + Iced Tea", price: "149", description: "" },
    { name: "Cheeseburger + Spaghetti + Iced Tea", price: "179", description: "" },
  ],
}

// ===== RICE (updated with new items) =====
export const rice: MenuCategory = {
  title: "Rice",
  subtitle: "Solo / Platter (good for 2-3)",
  items: [
    { name: "Plain Steamed Rice", price: "35", description: "Fragrant steamed white rice.", image: "/images/food/yang-chow.jpg" },
    { name: "Garlic Rice", price: "50", description: "Stir-fried rice with golden brown garlic.", image: "/images/food/pancit-guisado.jpg" },
    { name: "Yang Chow Fried Rice", price: "120", price2: "159", description: "Chinese fried rice with chorizo, egg, green peas.", image: "/images/food/yang-chow.jpg" },
    { name: "Merah Rice", price: "55", price2: "159", description: "Flavorful spiced rice.", image: "/images/food/chicken-wings.jpg" },
    { name: "Chiao Fan", price: "55", price2: "159", description: "Chinese-style fried rice.", image: "/images/food/carbonara.jpg" },
    { name: "Tinapa Rice", price: "55", price2: "159", description: "Rice with smoked fish flakes.", image: "/images/food/lomi.jpg" },
  ],
}


// ===== SANDWICHES (updated: added nachos) =====
export const sandwiches: MenuCategory = {
  title: "Snacks & Sandwiches",
  items: [
    { name: "Cheeseburger", price: "165", description: "Delicious American-style burger topped with cheddar cheese.", image: "/images/food/cheeseburger.jpg" },
    { name: "Classic Clubhouse", price: "200", description: "Double-decker sandwich with ham, cheese, egg, and chicken.", image: "/images/food/clubhouse.jpg" },
    { name: "Grilled Ham & Cheese", price: "135", description: "Classic grilled sandwich with ham and cheese.", image: "/images/food/grilled-ham-cheese.jpg" },
    { name: "Nachos Overload", price: "250", description: "Crispy tortilla chips topped with cheese and jalapeños.", image: "/images/food/french-fries.jpg" },
  ],
}

// ===== DESSERTS (updated: removed Leche Flan, added new) =====
export const desserts: MenuCategory = {
  title: "Desserts",
  items: [
    { name: "Halo-Halo", price: "75", description: "Icy Filipino dessert with sweet preserves.", image: "/images/food/halo-halo.jpg" },
    { name: "Leche Flan", price: "50", description: "Silky smooth custard dessert with caramel topping.", image: "/images/food/leche-flan.jpg" },
    { name: "Mango Graham", price: "50", description: "Graham layers with cream and mango.", image: "/images/food/mango-graham.jpg" },
    { name: "Fruit Salad", price: "50", description: "Creamy blend of assorted fruit preserves." },
    { name: "Mango Shake", price: "75", description: "Fresh blended mango shake." },
    { name: "Buko Shake", price: "75", description: "Fresh young coconut shake." },
    { name: "Mango Tapioca", price: "50", description: "Sweet mango with tapioca pearls." },
    { name: "Mais con Yelo", price: "75", description: "Sweet corn with shaved ice and milk." },
    { name: "Coffee Jelly", price: "50", description: "Chilled coffee-flavored gelatin in cream." },
  ],
}

// ===== BEVERAGES (reorganized by juice/tea/coffee with pitchered add-ons) =====
export const beverages = {
  title: "Beverages",
  juices: [
    { name: "Pineapple Juice", price: "45", pitcher: "299" },
    { name: "Mango Juice", price: "45", pitcher: "299" },
    { name: "Calamansi Juice", price: "45", pitcher: "299" },
    { name: "Iced Tea (Lemon)", price: "45", pitcher: "299" },
    { name: "Red Iced Tea", price: "45", pitcher: "299" },
    { name: "Cucumber", price: "45", pitcher: "299" },
    { name: "4 Seasons", price: "45", pitcher: "299" },
    { name: "Blue Lemonade", price: "45", pitcher: "299" },
  ],
  teaCoffee: [
    { name: "Coffee (3-in-1)", price: "30" },
    { name: "Milo (Hot/Cold)", price: "30" },
    { name: "Hot Tea", price: "30" },
    { name: "Mineral Water", price: "20" },
    { name: "Coke Mismo", price: "25" },
    { name: "Sting", price: "25" },
    { name: "Coke/Mountain Dew/Royal/Sprite 1.5L", price: "100" },
    { name: "Coke/Mountain Dew/Royal/Sprite in Can", price: "45" },
  ],
  note: undefined,
}

// ===== BEER & ALCOHOL =====
export const beer = {
  title: "Beer & Alcohol",
  items: [
    { name: "San Mig Pale", price: "80" },
    { name: "San Mig Apple", price: "80" },
    { name: "Gin", price: "90" },
    { name: "Club Mix", price: "55" },
    { name: "Red Horse", price: "150" },
    { name: "GSM Mojito", price: "160" },
    { name: "Fundador Light", price: "400" },
    { name: "Fundador Double Light", price: "300" },
    { name: "May Wine (Red/White)", price: "300" },
    { name: "Alfonso", price: "400" },
  ],
}

// ===== THE ROYAL TOAST (updated: price 499, sizzling hotdog) =====
export const beerBites = {
  title: "The Royal Toast",
  price: "499",
  description: "3 Beers + 1 Royal Bite of your choice",
  choices: ["Crispy Chicken Skin", "Tofu Sisig", "Sizzling Hotdog"],
}

// ===== CHIPS & SNACKS =====
export const chipsSnacks = {
  title: "Snacks / Chips",
  items: [
    { name: "Tempura", price: "40" },
    { name: "Fishda", price: "40" },
    { name: "Pic-A (Cheese)", price: "55" },
    { name: "Pic-A (BBQ)", price: "55" },
    { name: "PiC-A", price: "40 / 70" },
    { name: "Oishi (Spicy)", price: "30 / 40" },
    { name: "Oishi Prawn", price: "40" },
    { name: "Piatos", price: "50" },
    { name: "Nova", price: "50" },
    { name: "Mang Juan", price: "40" },
    { name: "Ding Dong", price: "70" },
    { name: "Martys", price: "35" },
    { name: "Boy Bawang", price: "35" },
    { name: "Tortillos", price: "40" },
    { name: "Chippy", price: "45" },
  ],
}

// ===== DRINKS / ALCOHOL =====
export const drinksAlcohol = {
  title: "Drinks / Alcohol",
  items: [
    { name: "GSM Blue", price: "80" },
    { name: "GSM Apple / Honey Sun Mig", price: "80" },
    { name: "Gin", price: "90" },
    { name: "San Mig", price: "80" },
    { name: "Red Horse", price: "150" },
    { name: "Fundador (Giant)", price: "400" },
    { name: "Fundador (Doublelight)", price: "300" },
    { name: "GSM Mojito", price: "160" },
    { name: "May (White Wine)", price: "300" },
    { name: "May (Red Wine)", price: "300" },
    { name: "May Wine", price: "300" },
    { name: "Alfonso", price: "400" },
  ],
}

// ===== SOFTDRINKS / BEVERAGES =====
export const softdrinksBeverages = {
  title: "Softdrinks / Beverages",
  items: [
    { name: "Royal/Coke/Sprite in Can", price: "45" },
    { name: "1.5L Coke/Royal/Sprite/Mountain Dew", price: "100" },
    { name: "Sting", price: "25" },
  ],
}

// ===== NOODLES / FOOD =====
export const noodlesFood = {
  title: "Noodles / Food",
  items: [
    { name: "Lucky Me Cup Noodles (Small)", price: "35" },
    { name: "Nissin Cup Noodles", price: "50" },
    { name: "Supreme Jjamppong", price: "40" },
  ],
}

// ===== MEALS / ULAM =====
export const mealsUlam = {
  title: "Meals / Ulam",
  items: [
    { name: "Seafood", price: "35" },
    { name: "Spicy Seafood", price: "35" },
    { name: "Creamy Seafood", price: "35" },
    { name: "Bulalo", price: "35" },
    { name: "Batchoy", price: "35" },
    { name: "Beef", price: "35" },
  ],
}

// ===== COFFEE / POWDERED DRINKS =====
export const coffeePowderedDrinks = {
  title: "Coffee / Powdered Drinks",
  items: [
    { name: "Sugar Free Coffee", price: "15" },
    { name: "Kopiko (Brown)", price: "15" },
    { name: "Kopiko (Black)", price: "15" },
    { name: "Milo", price: "15" },
    { name: "Top Cafe Palm", price: "10" },
  ],
}

// ===== WATER =====
export const water = {
  title: "Water",
  items: [
    { name: "Water Bottle", price: "20" },
  ],
}

// ===== CANDIES =====
export const candies = {
  title: "Candies",
  items: [
    { name: "V-Fresh", price: "2" },
    { name: "Fres", price: "2" },
    { name: "Mentos", price: "2" },
  ],
}

// ===== CAFE MENU =====
export const cafeMenu = {
  title: "La Bella Caf\u00e8 Menu",
  drinkSizes: [
    "Hot Drinks – Tall (12oz)",
    "Iced Drinks – Grande (16oz)",
  ],
  espresso: [
    { name: "Caffè Americano", priceHot: "99", priceIced: "109" },
    { name: "Caffè Latte", priceHot: "119", priceIced: "129" },
    { name: "Cappuccino", priceHot: "119", priceIced: "129" },
    { name: "Spanish Latte", priceHot: "129", priceIced: "139" },
    { name: "Caramel Macchiato", priceHot: "139", priceIced: "149" },
    { name: "Caffè Mocha", priceHot: "139", priceIced: "149" },
    { name: "White Chocolate Mocha", priceHot: "139", priceIced: "149" },
    { name: "Salted Caramel Latte", priceHot: "139", priceIced: "149" },
    { name: "French Vanilla Latte", priceHot: "139", priceIced: "149" },
  ],
  nonCoffee: [
    { name: "Choco Latte", priceHot: "129", priceIced: "139" },
    { name: "Matcha Latte", priceHot: "129", priceIced: "139" },
    { name: "Ube Latte", priceHot: "139", priceIced: "149" },
  ],
  smoothies: [
    { name: "Strawberry", price: "159" },
    { name: "Mango", price: "159" },
    { name: "Blueberry", price: "159" },
  ],
}

