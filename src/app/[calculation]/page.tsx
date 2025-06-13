import { redirect, RedirectType } from "next/navigation";
import { DynamicIcon } from "lucide-react/dynamic";
import { Card } from "@/components/ui/card";
import CalculatorLogo from "@/app/components/CalculatorLogo";
import { CalculatorAndCategoryData } from "@/app/model/types";
import { getCalculatorsAndCategories } from "@/lib/calculatorsAndCategories";

export const revalidate = false;

export default async function Page({ params }: any) {
  const { calculation } = await params;
  const calculatorAndCategoryData: CalculatorAndCategoryData = await getCalculatorsAndCategories();
  if (calculation) {
    const index = calculatorAndCategoryData.calculators.findIndex((calculator) => calculator.slug == calculation);
    if (index != -1) {
      const calculator = calculatorAndCategoryData.calculators[index];
      console.log(calculator);
      return (
        <main className="w-full px-4 md:px-8 py-6 md:py-3">
          <div className="mx-auto max-w-6xl h-auto md:min-h-full flex flex-col gap-5 pb-10">
            <CalculatorLogo />
            <div className="flex flex-col md:flex-row gap-6">
              <Card className="w-full md:w-[50%] h-[40vh] p-6">
                <h1 className="text-3xl font-semibold">{calculator.name}</h1>
              </Card>
              <Card className="w-full md:w-[50%] h-[40vh] p-6">
                <div className="mx-auto" style={{ width: "100px", height: "100px" }}>
                  <DynamicIcon name={calculator.icon} size={100} className="text-primary-foreground" />
                </div>
                <p className="text-base">{calculator.description}</p>
              </Card>
            </div>
          </div>
        </main>
      );
    } else {
      redirect("/", RedirectType.replace);
    }
  } else {
    redirect("/", RedirectType.replace);
  }
}
