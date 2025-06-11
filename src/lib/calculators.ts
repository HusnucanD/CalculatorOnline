import { cache } from "react";
import fs from "fs/promises";
import path from "path";
import { Calculator } from "@/app/model/types";

export const getCalculators = cache(async () => {
  const file = await fs.readFile(path.join(process.cwd(), "public", "data.json"), "utf8");
  return JSON.parse(file) as Calculator[];
});
