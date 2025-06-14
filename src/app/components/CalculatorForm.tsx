"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calculator } from "@/app/model/types";

export const revalidate = false;

interface CalculatorFormProps {
  calculator: Calculator;
}

export default function CalculatorForm({ calculator }: CalculatorFormProps) {
  return (
    <div className="flex flex-col gap-1 overflow-y-auto pl-1 pr-3 -ml-1 -mr-3">
      {calculator.inputs.map((input, index) => {
        return (
          <div key={index}>
            <Label className="text-base font-medium">{input.label}</Label>
            <Input type={input.type} name={input.name} className="font-medium mt-2 mb-3" />
          </div>
        );
      })}
      <div className="flex gap-2 mt-1">
        <Button size="lg" className="cursor-pointer grow">
          <span className="text-base font-medium">Calculate</span>
        </Button>
        <Button size="lg" variant="secondary" className="cursor-pointer grow">
          <span className="text-base font-medium">Clear</span>
        </Button>
      </div>
      <div className="bg-accent text-accent-foreground text-xl font-medium p-3 mt-4 rounded-md cursor-pointer text-center">
        12345
      </div>
    </div>
  );
}
