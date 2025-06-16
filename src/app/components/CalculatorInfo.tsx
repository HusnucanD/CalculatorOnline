import { DynamicIcon } from "lucide-react/dynamic";
import { Calculator } from "@/app/model/types";

interface CalculatorInfoProps {
  calculator: Calculator;
  categoryName: string;
}

export default function CalculatorInfo({ calculator, categoryName }: CalculatorInfoProps) {
  return (
    <div className="flex flex-col gap-6 overflow-y-auto">
      <div className="mx-auto" style={{ width: "100px", height: "100px" }}>
        <DynamicIcon name={calculator.icon} size={100} />
      </div>
      <h1 className="text-2xl font-medium">{calculator.name}</h1>
      <p className="text-base font-medium -mt-4">{categoryName}</p>
      <div className="overflow-y-auto pr-4">
        <p className="text-base">{calculator.description}</p>
      </div>
    </div>
  );
}
