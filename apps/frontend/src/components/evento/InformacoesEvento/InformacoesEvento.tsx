import { Informacao } from "@/components/shared/Informacao/Informacao";
import { Evento } from "core";

export interface InformacoesEventoProps {
  evento: Evento;
  className?: string
}

export const InformacoesEvento = ({ evento, className }: InformacoesEventoProps) => {
  return (
    <div className={`${className} flex flex-col gap-2`}>
      <div className="flex-1 flex items-center gap-4 border border-zinc-800 px-6 py-3 rounded-lg">
        <span className="text-2xl font-black">{evento.alias}:</span>
        <span className="text-xl text-zinc-300">{evento.nome}</span>
      </div>
      <div className="flex gap-2">
        <Informacao label="Data:">
          {new Date(evento.data!).toLocaleDateString()} ás{" "}
          {new Date(evento.data!).toLocaleTimeString()}
        </Informacao>
        <Informacao label="Local:">{evento.local}</Informacao>
      </div>
      <div>
        <Informacao label="Descrição:">{evento.descricao}</Informacao>
      </div>
    </div>
  );
};
