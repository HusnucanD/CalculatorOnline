import fs from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";
import { Calculator } from "../model/types";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export async function GET() {
  const json = await fs.readFile(path.join(process.cwd(), "public", "data.json"), "utf8");
  const calculators = JSON.parse(json) as Calculator[];
  const urls: string[] = [];
  calculators.forEach((calculator: Calculator) => {
    urls.push(`${calculator.slug}`);
  });
  const lastmod = new Date().toISOString().split("T")[0];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
                <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
                ${urls
                  .map((loc) => `<url><loc>${loc}</loc><lastmod>${lastmod}</lastmod></url>`)
                  .join("\n")}
                </urlset>`;
  return new NextResponse(xml, {
    headers: { "Content-Type": "application/xml" },
  });
}

export const revalidate = 86_400;
