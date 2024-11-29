import { Id } from "../../shared";
import { Convidado } from "../models/convidado";

export const convidadeVazio = (): Partial<Convidado> => {
  return {
    id: Id.new(),
    nome: "",
    email: "",
    confirmado: true,
    qtdAcompanhate: 0,
    possuiAcompanhantes: false,
  };
};
