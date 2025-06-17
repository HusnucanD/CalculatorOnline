import { IconName } from "lucide-react/dynamic";

import {
  Percent,
  PersonStanding,
  House,
  HandCoins,
  Calculator,
  Calendar,
  HandPlatter,
  Ham,
  Landmark,
  Calendar1,
  BadgeDollarSign,
  BadgePercent,
  BriefcaseBusiness,
  ArrowDown01,
  School,
  Clock,
  Venus,
  ClipboardPlus,
  HeartPulse,
  Tickets,
  PiggyBank,
  EarthLock,
  Euro,
  Fuel,
  Speech,
  CircleDashed,
  DecimalsArrowRight,
  HousePlus,
  WalletCards,
  Hand,
} from "lucide-react";

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
  displayExpression: string;
  inputs: CalculatorInput[];
  slug: string;
  icon: IconName;
}

export interface CalculatorAndCategoryData {
  categories: Category[];
  calculators: Calculator[];
}

export interface CalculatorInput {
  name: string;
  label: string;
  type: string;
}

export const CalculatorIconMap = {
  Percent,
  PersonStanding,
  House,
  HandCoins,
  Calculator,
  Calendar,
  HandPlatter,
  Ham,
  Landmark,
  Calendar1,
  BadgeDollarSign,
  BadgePercent,
  BriefcaseBusiness,
  ArrowDown01,
  School,
  Clock,
  Venus,
  ClipboardPlus,
  HeartPulse,
  Tickets,
  PiggyBank,
  EarthLock,
  Euro,
  Fuel,
  Speech,
  CircleDashed,
  DecimalsArrowRight,
  HousePlus,
  WalletCards,
  Hand,
};
