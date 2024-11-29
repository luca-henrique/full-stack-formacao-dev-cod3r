import { Injectable } from '@nestjs/common';
import { Convidado, Evento } from 'core';
import { PrismaProvider } from 'src/db/prisma.provider';

@Injectable()
export class EventoPrisma {
  constructor(readonly prisma: PrismaProvider) {}

  save(evento: Evento) {
    return this.prisma.evento.create({
      data: { ...(evento as any), convidados: { create: evento.convidados } },
    });
  }

  saveGuest(eventId: string, convidado: Convidado) {
    return this.prisma.convidado.create({
      data: {
        ...convidado,
        qtdAcompanhate: +(convidado.qtdAcompanhate ?? 0),
        evento: {
          connect: { id: eventId },
        },
      },
    });
  }

  async searchAll(): Promise<Evento[]> {
    return this.prisma.evento.findMany() as any;
  }

  async searchById(
    id: string,
    completo: boolean = false,
  ): Promise<Evento | null> {
    return this.prisma.evento.findUnique({
      where: { id },
      include: { convidados: completo },
    }) as any;
  }

  async searchAlias(
    alias: string,
    completo: boolean = false,
  ): Promise<Evento | null> {
    return this.prisma.evento.findUnique({
      select: {
        id: true,
        alias: true,
        nome: true,
        descricao: true,
        data: true,
        local: true,
        image: true,
        imageBackground: true,
        senha: completo,
        publicoEsperado: completo,
        convidados: completo,
      },
      where: { alias },
    }) as any;
  }
}
