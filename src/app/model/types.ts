import { IconName } from "lucide-react/dynamic";

export interface Category {
  id: string;
  name: string;
  logo: string;
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
