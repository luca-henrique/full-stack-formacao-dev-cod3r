import { Righteous } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const font = Righteous({
  subsets: ["latin"],
  weight: "400",
});

export const LargerLogo = () => {
  return (
    <Link href="/" className={`${font.className} flex flex-col items-center gap-2`}>
      <Image src={"/logo.svg"} alt="logo" width={100} height={100} />
      <h1 className="text-5xl">
        Convit<span className="text-blue-500">3</span>Digital
      </h1>
    </Link>
  );
};
