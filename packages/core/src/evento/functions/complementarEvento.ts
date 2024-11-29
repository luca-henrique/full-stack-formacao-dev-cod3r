import { Id, Password } from "../../shared";
import { Evento } from "../models/evento";
import { validarEvento } from "./validarEvento";

export function complementarEvento(eventoParcial: Partial<Evento>): Evento {
  const errors = validarEvento(eventoParcial);

  if (errors.length) {
    throw new Error(errors.join("/"));
  }

  const evento: Evento = {
    ...eventoParcial,
    id: eventoParcial.id ?? Id.new(),
    senha: eventoParcial.senha ?? Password.generete(20),
    publicoEsperado: +(eventoParcial.publicoEsperado ?? 1),
  } as Evento;

  return evento;
}
