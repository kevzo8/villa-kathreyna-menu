import { CateringPackageCard } from "./catering-package-card"

export const diamondCateringMenuA = [
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

export const diamondCateringMenuB = [
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

export const diamondCateringMenuC = [
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

export const diamondPricePerHead = 700

export function PageCateringDiamond() {
  return <CateringPackageCard packageName="Diamond" menuA={diamondCateringMenuA} menuB={diamondCateringMenuB} menuC={diamondCateringMenuC} pricePerHead={diamondPricePerHead} pageNumber={11} />
}
