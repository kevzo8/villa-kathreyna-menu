import { CateringPackageCard } from "./catering-package-card"

const menuA = [
  "Creamy Onion Soup",
  "Baby Back Ribs",
  "Fish Fillet with White Sauce",
  "Chicken Salpicao",
  "Mixed Vegetable",
  "Pandan Rice",
  "Buko Salad",
  "Juice",
]

const menuB = [
  "Corn Soup",
  "Pork Steak",
  "Grilled Tanigue",
  "Cordon Bleu",
  "Garlic Mixed Vegetable",
  "Plain Rice",
  "Leche Flan",
  "Juice",
]

const menuC = [
  "Creamy Mushroom Soup",
  "Pork Hamonado",
  "Chicken Teriyaki",
  "Fish Fillet with Tartar Sauce",
  "Mixed Vegetables with Quail Eggs",
  "Plain Rice",
  "Fruit Salad",
  "Juice",
]

export function PageCateringPlatinum() {
  return <CateringPackageCard packageName="Platinum" menuA={menuA} menuB={menuB} menuC={menuC} />
}
