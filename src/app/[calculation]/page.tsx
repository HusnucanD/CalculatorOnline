import fs from "node:fs/promises";
import path from "node:path";
import { redirect, RedirectType } from "next/navigation";
import CalculatorLogo from "@/app/components/CalculatorLogo";
import { Card } from "@/components/ui/card";
import { Calculator } from "@/app/model/types";

export const revalidate = false;

export default async function Page({ params }: any) {
  if (params.calculation) {
    const slug = params.calculation;
    const file = await fs.readFile(path.join(process.cwd(), "public", "data.json"), "utf8");
    const calculators = JSON.parse(file) as Calculator[];
    const index = calculators.findIndex((calculator) => calculator.slug == slug);
    if (index != -1) {
      const calculator = calculators[index];
      return (
        <main className="w-full px-4 md:px-8 py-6 md:py-3">
          <div className="mx-auto max-w-6xl h-auto md:min-h-full flex flex-col gap-5 pb-10">
            <CalculatorLogo />
            <div className="flex flex-col md:flex-row gap-6">
              <Card className="w-full md:w-[50%] px-3 gap-2"></Card>
              <Card className="w-full md:w-[50%] px-3 gap-2">
                <h2 className="text-xl font-semibold">{calculator.name}</h2>
                <p className="text-base">{calculator.description}</p>
              </Card>
            </div>
          </div>
        </main>
      );
    } else {
      redirect("/", RedirectType.replace);
    }
  }
}
