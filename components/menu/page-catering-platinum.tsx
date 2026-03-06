import { CateringPackageCard } from "./catering-package-card"

export const platinumCateringMenuA = [
  "Creamy Onion Soup",
  "Baby Back Ribs",
  "Fish Fillet with White Sauce",
  "Chicken Salpicao",
  "Mixed Vegetable",
  "Pandan Rice",
  "Buko Salad",
  "Juice",
]

export const platinumCateringMenuB = [
  "Corn Soup",
  "Pork Steak",
  "Grilled Tanigue",
  "Cordon Bleu",
  "Garlic Mixed Vegetable",
  "Plain Rice",
  "Leche Flan",
  "Juice",
]

export const platinumCateringMenuC = [
  "Creamy Mushroom Soup",
  "Pork Hamonado",
  "Chicken Teriyaki",
  "Fish Fillet with Tartar Sauce",
  "Mixed Vegetables with Quail Eggs",
  "Plain Rice",
  "Fruit Salad",
  "Juice",
]

export const platinumPricePerHead = 600

export function PageCateringPlatinum() {
  return <CateringPackageCard packageName="Platinum" menuA={platinumCateringMenuA} menuB={platinumCateringMenuB} menuC={platinumCateringMenuC} pricePerHead={platinumPricePerHead} pageNumber={10} />
}
