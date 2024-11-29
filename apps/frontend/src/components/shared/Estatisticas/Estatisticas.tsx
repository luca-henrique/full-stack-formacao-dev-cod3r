import Image from "next/image";

interface EstatisticasProps {
  text: string;
  value: any;
  image: string;
}

export const Estatisticas = ({ text, value, image }: EstatisticasProps) => {
  return (
    <div className="flex items-center bg-zinc-900 rounded-lg px-6 py-2.5 gap-5">
      <div className="flex-1 flex flex-col">
        <span className="font-light text-zinc-300">{text}</span>
        <span className="text-xl">{value}</span>
      </div>
      <Image src={image} width={80} height={80} alt="icon" />
    </div>
  );
};
