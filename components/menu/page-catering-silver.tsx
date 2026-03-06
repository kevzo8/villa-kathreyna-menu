import { CateringPackageCard } from "./catering-package-card"

export const silverCateringMenuA = [
  "Creamy Onion Soup",
  "Chicken Ala King",
  "Sweet & Sour Fish Fillet",
  "Mixed Vegetable",
  "Rice",
  "Buko Pandan",
  "Juice",
]

export const silverCateringMenuB = [
  "Creamy Onion Soup",
  "Chicken Teriyaki",
  "Garlic Mixed Vegetable",
  "Pandan Rice",
  "Macaroni Salad",
  "Juice",
]

export const silverCateringMenuC = [
  "Corn Soup",
  "Chicken Salpicao",
  "Lechon Kawali",
  "Rice",
  "Fruit Salad",
  "Juice",
]

export const silverPricePerHead = 400

export function PageCateringSilver() {
  return <CateringPackageCard packageName="Silver" menuA={silverCateringMenuA} menuB={silverCateringMenuB} menuC={silverCateringMenuC} pricePerHead={silverPricePerHead} pageNumber={8} />
}
