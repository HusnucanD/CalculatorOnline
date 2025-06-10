import Link from "next/link";
import Image from "next/image";

export const revalidate = false;

export default function CalculatorLogo() {
  return (
    <Link href="/">
      <Image
        src="/logo.svg"
        alt="Calculator Online"
        width={1000}
        height={500}
        className="w-50 md:w-70 mx-auto rounded-xl p-1"
      />
    </Link>
  );
}
