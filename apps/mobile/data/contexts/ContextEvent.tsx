import { createContext, ReactNode, useState } from "react"
import { Evento, eventos as mockEventos } from "core"

interface ProviderEventProps {
  children: ReactNode
}

interface ContextEventProps {
  eventos: Evento[]
  evento: Evento | null;

  selectEvent: (idEvent: string) => void
  deleteEvent: (idEvent: string) => void
  createEventByQrcode: (qrcode: string) => void
}

export const ContextEvent = createContext<ContextEventProps>({} as any)

export const ProviderEvent = ({ children }: ProviderEventProps) => {

  const [eventos, setEventos] = useState<Evento[]>(mockEventos)
  const [evento, setEvento] = useState<Evento | null>(null)

  const selectEvent = (idEvent: string) => {
    const evento = eventos.find(e => e.id === idEvent)
    setEvento(evento || null)
  }

  const createEventByQrcode = (idEvent: string) => {
    const evento = eventos.find(e => e.id === idEvent)
    setEvento(evento || null)
  }

  const deleteEvent = (idEvent: string) => {
    const eventosDelete = eventos.filter(e => e.id !== idEvent)
    setEventos(eventosDelete)
  }

  return (<ContextEvent.Provider value={{ evento, eventos, selectEvent, deleteEvent, createEventByQrcode }}>{children}</ContextEvent.Provider>)
}


