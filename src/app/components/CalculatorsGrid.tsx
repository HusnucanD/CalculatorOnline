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
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
      {calculators.map((calculator) => (
        <Link key={calculator.id} className="cursor-pointer" href={`/${calculator.slug}`}>
          <Card className="flex items-center justify-center gap-1 px-2 py-3 card-foreground hover:bg-accent hover:text-primary-foreground transition-all">
            <div style={{ width: "40px", height: "40px" }}>
              <DynamicIcon name={calculator.icon} size={40} />
            </div>
            <p className="text-base font-medium flex flex-col items-center w-[90%] min-h-14 text-center">
              {calculator.name}
            </p>
          </Card>
        </Link>
      ))}
    </div>
  );
}
