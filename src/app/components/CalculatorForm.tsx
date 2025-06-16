"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calculator } from "@/app/model/types";
import React, { useState } from "react";

interface CalculatorFormProps {
  calculator: Calculator;
}

export default function CalculatorForm({ calculator }: CalculatorFormProps) {
  const [values, setValues] = useState<Record<string, string>>(
    calculator.inputs.reduce((acc, cur) => {
      acc[cur.name] = "";
      return acc;
    }, {} as Record<string, string>)
  );
  const [result, setResult] = useState<string | number>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCalculate = () => {
    try {
      const fn = eval(`(${calculator.calculationFunction})`);
      const args = calculator.inputs.map((i) =>
        isNaN(Number(values[i.name])) ? values[i.name] : Number(values[i.name])
      );
      const res = fn(...args);
      setResult(res);
    } catch (error) {
      console.error("Calculation error:", error);
      setResult("Error");
    }
  };

  const handleClear = () => {
    setValues(
      calculator.inputs.reduce((acc, cur) => {
        acc[cur.name] = "";
        return acc;
      }, {} as Record<string, string>)
    );
    setResult("");
  };

  return (
    <div className="flex flex-col gap-1 overflow-y-auto pl-1 pr-4 -ml-1">
      {calculator.inputs.map((input, index) => {
        return (
          <div key={index}>
            <Label className="text-base font-medium">{input.label}</Label>
            <Input
              type={input.type}
              name={input.name}
              value={values[input.name]}
              onChange={handleChange}
              className="font-medium mt-2 mb-3"
            />
          </div>
        );
      })}
      <div className="flex gap-2 mt-1">
        <Button size="lg" className="cursor-pointer grow" onClick={handleCalculate}>
          <span className="text-base font-medium">Calculate</span>
        </Button>
        <Button size="lg" variant="secondary" className="cursor-pointer grow" onClick={handleClear}>
          <span className="text-base font-medium">Clear</span>
        </Button>
      </div>
      <div className="bg-accent text-accent-foreground text-xl font-medium p-3 mt-4 rounded-md cursor-pointer text-center min-h-13">
        {result + (result ? " " + calculator.displayExpression : "")}
      </div>
    </div>
  );
}
