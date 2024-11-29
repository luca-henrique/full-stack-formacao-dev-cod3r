import { Convidado } from "../models/convidado";

export const validarConvidado = (convidado: Partial<Convidado>): string[] => {
  const errors: string[] = [];

  if (!convidado.email) {
    errors.push("convidado é obrigatorio");
  }

  if (!convidado.nome) {
    errors.push("nome é obrigatorio");
  }

  return errors;
};
