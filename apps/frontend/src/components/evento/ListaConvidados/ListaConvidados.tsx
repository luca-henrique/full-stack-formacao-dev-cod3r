import { Convidado } from "core";
import { ConvidadoItem } from "../ConvidadoItem/ConvidadoItem";

export interface ListaConvidadosProps {
  convidados: Convidado[];
}

export const ListaConvidados = ({ convidados }: ListaConvidadosProps) => {
  return (
    <div>
      <ul className="flex flex-col gap-4">
        {convidados.map((convidado) => (
          <ConvidadoItem key={convidado.id} convidado={convidado} />
        ))}
      </ul>
    </div>
  );
};
