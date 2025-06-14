import { redirect, RedirectType } from "next/navigation";
import { DynamicIcon } from "lucide-react/dynamic";
import { Card } from "@/components/ui/card";
import { CalculatorAndCategoryData } from "@/app/model/types";
import { getCalculatorsAndCategories } from "@/lib/calculatorsAndCategories";
import CalculatorForm from "../components/CalculatorForm";

export const revalidate = false;

export default async function Page({ params }: any) {
  const { calculation } = await params;
  const calculatorAndCategoryData: CalculatorAndCategoryData = await getCalculatorsAndCategories();
  if (calculation) {
    const index = calculatorAndCategoryData.calculators.findIndex((calculator) => calculator.slug == calculation);
    if (index != -1) {
      const calculator = calculatorAndCategoryData.calculators[index];
      const category = calculatorAndCategoryData.categories.find((x) => x.id == calculator.categoryId)?.name;
      return (
        <main className="w-full px-4 md:px-8 pt-2 pb-10 mx-auto max-w-6xl h-auto md:min-h-full">
          <div className="flex flex-col md:flex-row gap-6">
            <Card className="w-full md:w-[50%] h-auto md:h-[60vh] p-6">
              <CalculatorForm calculator={calculator}></CalculatorForm>
            </Card>
            <Card className="w-full md:w-[50%] h-[50vh] md:h-[60vh] p-6">
              <div className="mx-auto" style={{ width: "100px", height: "100px" }}>
                <DynamicIcon name={calculator.icon} size={100} />
              </div>
              <h1 className="text-2xl font-medium">{calculator.name}</h1>
              <p className="text-base font-medium -mt-4">{category}</p>
              <div className="overflow-y-auto pr-5">
                <p className="text-base">{calculator.description}</p>
              </div>
            </Card>
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
