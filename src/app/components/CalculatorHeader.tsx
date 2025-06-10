export const revalidate = false;

export default function CalculatorHeader() {
  return (
    <h1 className="text-2xl md:text-4xl mx-auto text-primary-foreground text-center font-bold my-1 flex flex-col">
      <span className="bg-card px-5 rounded-xl z-40 w-fit mx-auto -mb-px pt-2 pb-1 border border-b-transparent rounded-b-none">
        Calculate Anything
      </span>
      <span className="bg-card px-5 rounded-xl z-30 pb-2 pt-1 border">Fast Free & Accurate</span>
    </h1>
  );
}
