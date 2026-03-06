import { CateringPackageCard } from "./catering-package-card"

export const goldCateringMenuA = [
  "Creamy Mushroom Soup",
  "Pork Steak",
  "Pan-Seared Chicken with Roasted Garlic",
  "Garlic Mixed Vegetable",
  "Rice",
  "Fruit Salad",
  "Juice",
]

export const goldCateringMenuB = [
  "Corn Soup",
  "Pork Medallion",
  "Fried Chicken",
  "Chopsuey",
  "Rice",
  "Leche Flan",
  "Juice",
]

export const goldCateringMenuC = [
  "Creamy Onion Soup",
  "Pork Hamonado",
  "Cordon Bleu",
  "Mixed Vegetables",
  "Rice",
  "Buko Salad",
  "Juice",
]

export const goldPricePerHead = 500

export function PageCateringGold() {
  return <CateringPackageCard packageName="Gold" menuA={goldCateringMenuA} menuB={goldCateringMenuB} menuC={goldCateringMenuC} pricePerHead={goldPricePerHead} pageNumber={9} />
}
