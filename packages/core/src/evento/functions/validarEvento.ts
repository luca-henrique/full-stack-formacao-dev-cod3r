import { Evento } from "../models/evento";

export const validarEvento = (evento: Partial<Evento>): string[] => {
  const errors: string[] = [];

  if (!evento.alias) {
    errors.push("alias é obrigatorio");
  }

  if (!evento.nome) {
    errors.push("Nome é obrigatorio");
  }

  if (!evento.descricao) {
    errors.push("descricao é obrigatorio");
  }

  if (!evento.data) {
    errors.push("data é obrigatorio");
  }

  if (!evento.local) {
    errors.push("local é obrigatorio");
  }

  if (!evento.publicoEsperado || evento.publicoEsperado < 1) {
    errors.push("publicoEsperado é obrigatorio");
  }

  if (!evento.imageBackground) {
    errors.push("imageBackground é obrigatorio");
  }

  if (!evento.image) {
    errors.push("imagem é obrigatorio");
  }

  return errors;
};
