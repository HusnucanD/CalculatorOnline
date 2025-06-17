import { CalculatorIconMap } from "@/app/model/types";

export const revalidate = false;

export function CalculatorStaticIcon({ icon, size = 100 }: { icon?: string; size?: number }) {
  const IconComponent = CalculatorIconMap[icon as keyof typeof CalculatorIconMap];

  if (!IconComponent) {
    console.warn(`Icon "${icon}" not found`);
    return null;
  }

  return <IconComponent size={size} strokeWidth={2} />;
}
