import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import {
  Evento,
  Data,
  Id,
  Convidado,
  complementarEvento,
  processarConvidado,
} from 'core';
import { EventoPrisma } from './evento.prisma';

@Controller('eventos')
export class EventosController {
  constructor(readonly repositoryEventoPrisma: EventoPrisma) {}

  @Get()
  async buscarEventos() {
    const eventos = await this.repositoryEventoPrisma.searchAll();
    return eventos.map(this.serializar);
  }

  @Post()
  async salvarEvento(@Body() evento: Evento) {
    const eventoCadastrado = await this.repositoryEventoPrisma.searchAlias(
      evento.alias,
      true,
    );

    if (eventoCadastrado && eventoCadastrado.id !== evento.alias) {
      throw new Error('Já existe');
    }

    const eventoComplemento = complementarEvento(this.deserializar(evento));

    return await this.repositoryEventoPrisma.save(eventoComplemento);
  }

  @Post(':alias/convidado')
  async salvarConvidado(@Param('alias') alias, @Body() convidado: Convidado) {
    const evento = await this.repositoryEventoPrisma.searchAlias(alias);

    if (!evento) {
      throw new Error('Evento não encontrado');
    }

    const convidadoCompleto = processarConvidado(convidado);

    return await this.repositoryEventoPrisma.saveGuest(
      evento.id,
      convidadoCompleto,
    );
  }

  @Get(':params')
  async buscarEvento(@Param('params') params: string) {
    let evento: Evento;

    if (Id.isValidId(params)) {
      evento = await this.repositoryEventoPrisma.searchById(params, true);
    } else {
      evento = await this.repositoryEventoPrisma.searchAlias(params, true);
    }

    return this.serializar(evento);
  }

  @Get('validar/:alias/:id')
  async validarAlias(@Param('alias') alias: string, @Param('id') id: string) {
    const evento = await this.repositoryEventoPrisma.searchAlias(alias);

    return { valido: !evento || evento.id === id };
  }

  @Post('acessar')
  async acessarEvento(@Body() { id, senha }: { id: string; senha: string }) {
    const evento = await this.repositoryEventoPrisma.searchById(id);

    if (!evento) {
      throw new Error('Evento não encontrado');
    }

    if (evento.senha !== senha) {
      throw new Error('Evento não encontrado');
    }

    return this.serializar(evento);
  }

  private serializar(evento: Evento) {
    if (!evento) return null;
    return {
      ...evento,
      data: Data.formatDateToString(evento.data),
    };
  }

  private deserializar(evento: any): Evento {
    if (!evento) return null;
    return {
      ...evento,
      data: Data.parseStringToDate(evento.data),
    };
  }
}
