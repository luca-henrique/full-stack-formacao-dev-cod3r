import { Convidado } from "./convidado";

export interface Evento {
  id: string;
  alias: string;
  senha: string;
  nome: string;
  data: Date;
  local: string;
  descricao: string;
  image: string;
  imageBackground: string;
  publicoEsperado: number;
  convidados: Convidado[];
}
