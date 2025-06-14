import CalculatorsGrid from "@/app/components/CalculatorsGrid";
import { getCalculatorsAndCategories } from "@/lib/calculatorsAndCategories";
import { CalculatorAndCategoryData } from "@/app/model/types";

export const revalidate = false;

export default async function Page({ }) {
  const calculatorAndCategoryData: CalculatorAndCategoryData = await getCalculatorsAndCategories();
  return (
    <main className="w-full px-4 md:px-8 pt-2 mx-auto max-w-5xl h-auto md:min-h-full pb-10">
      <CalculatorsGrid calculators={calculatorAndCategoryData.calculators}></CalculatorsGrid>
    </main>
  );
}
