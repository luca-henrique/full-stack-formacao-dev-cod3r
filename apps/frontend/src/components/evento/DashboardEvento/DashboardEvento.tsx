import { Evento } from "core";
import { InformacoesEvento } from "../InformacoesEvento/InformacoesEvento";
import { AcessarQrCode } from "../AcessarQrCode/AcessarQrCode";
import { Estatisticas } from "@/components/shared/Estatisticas/Estatisticas";
import { ListaConvidados } from "../ListaConvidados/ListaConvidados";

export interface DashboardEventoProps {
  evento: Evento;
}

export const DashboardEvento = ({ evento }: DashboardEventoProps) => {
  const presentes = evento?.convidados.filter((c) => c.confirmado) ?? [];

  const ausentes = evento?.convidados.filter((c) => !c.confirmado) ?? [];

  const totalAcompanhantes = presentes.reduce((acc, participante) => {
    return acc + (participante.possuiAcompanhantes ? participante.qtdAcompanhate : 0);
  }, 0);



  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2 self-stretch">
        <InformacoesEvento evento={evento} className="flex-1" />
        <AcessarQrCode evento={evento} />
      </div>
      <div className="grid grid-cols-3 gap-6 mt-4">
        <Estatisticas
          text="Espectativa de convidados:"
          value={evento.publicoEsperado}
          image={"/icones/convidados.svg"}
        />
        <Estatisticas
          text="Confirmações:"
          value={presentes.length}
          image={"/icones/confirmados.svg"}
        />
        <Estatisticas
          text="Total Confirmado:"
          value={totalAcompanhantes}
          image={"/icones/acompanhantes.svg"}
        />
      </div>

      <button className="button blue self-end mt-12">
        <span>Atualizar Lista de convidados</span>
      </button>

      <span className="flex py-2 text-xl font-bold text-white/80">Convidados que confirmaram presença</span>
      <ListaConvidados convidados={presentes} />
      <span className="flex py-2 text-xl font-bold text-white/80">Convidados que confirmaram ausencia</span>
      <ListaConvidados convidados={ausentes} />
    </div>
  );
};
