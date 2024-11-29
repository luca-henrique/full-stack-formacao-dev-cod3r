import { Id } from "../../shared";
import { Evento } from "../models/evento";

export const createEventEmpty = (): Partial<Evento> => {
  return {
    id: Id.new(),
    nome: "",
    descricao: "",
    data: new Date(),
    local: "",
    publicoEsperado: 1,
    image: "",
    imageBackground: "",
  };
};
