import { CateringPackageCard } from "./catering-package-card"

const menuA = [
  "Creamy Onion Soup",
  "Chicken Ala King",
  "Sweet & Sour Fish Fillet",
  "Mixed Vegetable",
  "Rice",
  "Buko Pandan",
  "Juice",
]

const menuB = [
  "Creamy Onion Soup",
  "Chicken Teriyaki",
  "Garlic Mixed Vegetable",
  "Pandan Rice",
  "Macaroni Salad",
  "Juice",
]

const menuC = [
  "Corn Soup",
  "Chicken Salpicao",
  "Lechon Kawali",
  "Rice",
  "Fruit Salad",
  "Juice",
]

export function PageCateringSilver() {
  return <CateringPackageCard packageName="Silver" menuA={menuA} menuB={menuB} menuC={menuC} />
}
