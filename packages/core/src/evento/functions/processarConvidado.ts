import { Convidado } from "../models/convidado";
import { validarConvidado } from "./validarConvidado";

export const processarConvidado = (
  convidado: Partial<Convidado>
): Convidado => {
  const errors = validarConvidado(convidado);

  if (errors.length > 0) {
    throw new Error(errors.join("\n"));
  }

  const quantidadeAcompanhantes = convidado.qtdAcompanhate ?? 0;

  const temAcompanahantes =
    convidado.possuiAcompanhantes &&
    convidado.confirmado &&
    quantidadeAcompanhantes > 0;

  const convidadoAtualizado = {
    ...convidado,
    qtdAcompanhate: temAcompanahantes ? quantidadeAcompanhantes : 0,
    possuiAcompanhantes: temAcompanahantes,
  };

  return convidadoAtualizado as Convidado;
};
