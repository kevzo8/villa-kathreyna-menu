import { CateringPackageCard } from "./catering-package-card"

export const silverCateringMenuA = [
  "Creamy Onion Soup",
  "Chicken Caldereta",
  "Sweet & Sour Fish Fillet",
  "Mixed Vegetable",
  "Rice",
  "Buko Pandan",
  "Juice",
]

export const silverCateringMenuB = [
  "Creamy Mushroom Soup",
  "Chicken Marengo",
  "Fish Fillet w/ Tartar Sauce",
  "Garlic Mixed Vegetable",
  "Pandan Rice",
  "Macaroni Salad",
  "Juice",
]

export const silverCateringMenuC = [
  "Corn Soup",
  "Chicken Salpicao",
  "Fish Fillet w/ Creamy White Sauce",
  "Chopsuey",
  "Rice",
  "Fruit Salad",
  "Juice",
]

export const silverPricePerHead = 400

export function PageCateringSilver() {
  return <CateringPackageCard packageName="Silver" menuA={silverCateringMenuA} menuB={silverCateringMenuB} menuC={silverCateringMenuC} pricePerHead={silverPricePerHead} pageNumber={8} />
}
