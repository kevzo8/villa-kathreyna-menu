import { CateringPackageCard } from "./catering-package-card"

const menuA = [
  "Creamy Mushroom Soup",
  "Pork Steak",
  "Pan-Seared Chicken with Roasted Garlic",
  "Garlic Mixed Vegetable",
  "Rice",
  "Fruit Salad",
  "Juice",
]

const menuB = [
  "Corn Soup",
  "Pork Medallion",
  "Fried Chicken",
  "Chopsuey",
  "Rice",
  "Leche Flan",
  "Juice",
]

const menuC = [
  "Creamy Onion Soup",
  "Pork Hamonado",
  "Cordon Bleu",
  "Mixed Vegetables",
  "Rice",
  "Buko Salad",
  "Juice",
]

export function PageCateringGold() {
  return <CateringPackageCard packageName="Gold" menuA={menuA} menuB={menuB} menuC={menuC} />
}
