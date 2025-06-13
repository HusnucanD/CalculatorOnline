import { NextResponse } from "next/server";
import { getCalculatorsAndCategories } from "@/lib/calculatorsAndCategories";
import { Calculator, CalculatorAndCategoryData } from "@/app/model/types";

export async function GET() {
  const calculatorAndCategoryData: CalculatorAndCategoryData = await getCalculatorsAndCategories();
  const urls: string[] = [];
  calculatorAndCategoryData.calculators.forEach((calculator: Calculator) => {
    urls.push(`${calculator.slug}`);
  });
  const lastmod = new Date().toISOString().split("T")[0];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
                <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
                ${urls.map((loc) => `<url><loc>${loc}</loc><lastmod>${lastmod}</lastmod></url>`).join("\n")}
                </urlset>`;
  return new NextResponse(xml, {
    headers: { "Content-Type": "application/xml" },
  });
}

export const revalidate = 86_400;
