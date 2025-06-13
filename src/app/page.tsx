import CalculatorLogo from "@/app/components/CalculatorLogo";
import CalculatorHeader from "@/app/components/CalculatorHeader";
import CalculatorsGrid from "@/app/components/CalculatorsGrid";
import { getCalculatorsAndCategories } from "@/lib/calculatorsAndCategories";
import { Calculator, CalculatorAndCategoryData } from "@/app/model/types";

export const revalidate = false;

export default async function Page({ }) {
  const calculatorAndCategoryData: CalculatorAndCategoryData = await getCalculatorsAndCategories();
  return (
    <main className="w-full px-4 md:px-8 py-6 md:py-3">
      <div className="mx-auto max-w-5xl h-auto md:min-h-full flex flex-col gap-5 pb-10">
        <CalculatorLogo></CalculatorLogo>
        <CalculatorHeader></CalculatorHeader>
        <CalculatorsGrid calculators={calculatorAndCategoryData.calculators}></CalculatorsGrid>
      </div>
    </main>
  );
}
