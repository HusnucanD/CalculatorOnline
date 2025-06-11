import CalculatorLogo from "@/app/components/CalculatorLogo";
import CalculatorHeader from "@/app/components/CalculatorHeader";
import CalculatorsGrid from "@/app/components/CalculatorsGrid";
import { getCalculators } from "@/lib/calculators";
import { Calculator } from "@/app/model/types";

export const revalidate = false;

export default async function Page({}) {
  const calculators: Calculator[] = await getCalculators();
  return (
    <main className="w-full px-4 md:px-8 py-6 md:py-3">
      <div className="mx-auto max-w-5xl h-auto md:min-h-full flex flex-col gap-5 pb-10">
        <CalculatorLogo></CalculatorLogo>
        <CalculatorHeader></CalculatorHeader>
        <CalculatorsGrid calculators={calculators}></CalculatorsGrid>
      </div>
    </main>
  );
}
