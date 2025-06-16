import { redirect, RedirectType } from "next/navigation";
import { Metadata } from "next";
import { Card } from "@/components/ui/card";
import CalculatorForm from "@/app/components/CalculatorForm";
import CalculatorInfo from "@/app/components/CalculatorInfo";
import { CalculatorAndCategoryData } from "@/app/model/types";
import { getCalculatorsAndCategories } from "@/lib/calculatorsAndCategories";

export const revalidate = false;

export async function generateMetadata({ params }: any): Promise<Metadata> {
  let calculatorTitle = "";
  const { calculation } = await params;
  let calculationPath: string = calculation;
  if (calculationPath) {
    calculationPath = calculationPath.replaceAll("-", " ");
    const calculationPathWords = calculationPath.split(" ");
    calculationPath = calculationPathWords
      .map((word) => {
        return word[0].toUpperCase() + word.substring(1);
      })
      .join(" ");
    calculatorTitle = calculationPath;
  }
  return {
    title: calculatorTitle,
    alternates: {
      canonical: `/${calculation}`,
    },
  };
}

const chartBGs = ["bg-chart-1/10", "bg-chart-2/10", "bg-chart-3/10", "bg-chart-4/10", "bg-chart-5/10"];

const getBG = (index: number, columns = 5) => {
  const row = Math.floor(index / columns);
  const col = index % columns;
  return chartBGs[(col + row) % chartBGs.length];
};

export default async function Page({ params }: any) {
  const { calculation } = await params;
  const calculatorAndCategoryData: CalculatorAndCategoryData = await getCalculatorsAndCategories();
  if (calculation) {
    const index = calculatorAndCategoryData.calculators.findIndex(
      (calculator) => calculator.slug == calculation
    );
    if (index != -1) {
      const calculator = calculatorAndCategoryData.calculators[index];
      const categoryName =
        calculatorAndCategoryData.categories.find((x) => x.id == calculator.categoryId)?.name || "";
      return (
        <main className="w-full px-4 md:px-8 pt-2 pb-10 mx-auto max-w-6xl h-auto md:min-h-full">
          <div className="flex flex-col md:flex-row gap-6">
            <Card className={`w-full md:w-[50%] h-auto md:h-[60vh] p-6`}>
              <CalculatorForm calculator={calculator}></CalculatorForm>
            </Card>
            <Card className={`w-full md:w-[50%] h-auto md:h-[60vh] p-6 ${getBG(+calculator.id - 1)}`}>
              <CalculatorInfo categoryName={categoryName} calculator={calculator}></CalculatorInfo>
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
