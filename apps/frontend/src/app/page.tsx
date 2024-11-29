import { LargerLogo } from "@/components/template/LargerLogo";
import Link from "next/link";

export default function Home() {

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-[url('/background-home.svg')] bg-cover gap-10">
      <div className="flex flex-col items-center">
        <LargerLogo />

        <p className="text-zinc-500 font-light w-96 leading-6 text-center select-none">
          Cie e gerencie o convite do seu evento de forma rapida e facil, sem complicações
        </p>

      </div>
      <Link href={'/evento'} className="button blue text-lg uppercase">
        Crie o seu Evento
      </Link>
    </div>
  );
}
