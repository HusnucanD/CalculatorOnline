import Link from "next/link";
import { DynamicIcon } from "lucide-react/dynamic";
import { Card } from "@/components/ui/card";
import { Calculator } from "@/app/model/types";

export const revalidate = false;

interface CalculatorsGridProps {
  calculators: Calculator[];
}

export default function CalculatorsGrid({ calculators }: CalculatorsGridProps) {
  return (
    <div className="grid grid-cols-5 gap-4">
      {calculators.map((calculator) => (
        <Link key={calculator.id} className="cursor-pointer" href={`/${calculator.slug}`}>
          <Card className="flex items-center justify-center gap-1 card-foreground hover:bg-accent hover:text-primary-foreground transition-all">
            <div style={{ width: "40px", height: "40px" }}>
              <DynamicIcon name={calculator.icon} size={40} />
            </div>
            <h2 className="font-semibold flex flex-col items-center">
              <span>{calculator.name.split(" ")[0]}</span>
              <span>{calculator.name.split(" ")[1]}</span>
            </h2>
          </Card>
        </Link>
      ))}
    </div>
  );
}
