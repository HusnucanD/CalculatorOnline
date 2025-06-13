import { IconName } from "lucide-react/dynamic";

export interface Category {
  id: string;
  name: string;
}

export interface Calculator {
  id: string;
  categoryId: string;
  name: string;
  description: string;
  calculationFunction: string;
  slug: string;
  icon: IconName;
}

export interface CalculatorAndCategoryData {
  categories: Category[];
  calculators: Calculator[];
}
