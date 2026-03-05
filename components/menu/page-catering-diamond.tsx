import { CateringPackageCard } from "./catering-package-card"

const menuA = [
  "Corn Soup",
  "Baby Back Ribs",
  "Fish Fillet with White Sauce",
  "Orange Chicken",
  "Beef with Potato Marbles",
  "Buttered Mixed Seafoods",
  "Mixed Vegetables",
  "Pandan Rice",
  "Fruit Salad",
  "Juice",
]

const menuB = [
  "Creamy Onion Soup",
  "Pork Steak",
  "Grilled Tuna",
  "Chicken Cordon Bleu",
  "Korean Beef",
  "Mixed Seafoods with Cajun Sauce",
  "Buttered Mixed Vegetables",
  "Pandan Rice",
  "Buko Salad",
  "Juice",
]

const menuC = [
  "Creamy Mushroom Soup",
  "Pork Hamonado",
  "Spicy Chicken Teriyaki",
  "Sweet & Sour Fish Fillet",
  "Chinese Beef Steak",
  "Special Mixed Seafood",
  "Creamy Mixed Vegetables with Quail Eggs",
  "Pandan Rice",
  "Mango Tapioca ala Villa",
  "Juice",
]

export function PageCateringDiamond() {
  return <CateringPackageCard packageName="Diamond" menuA={menuA} menuB={menuB} menuC={menuC} />
}
