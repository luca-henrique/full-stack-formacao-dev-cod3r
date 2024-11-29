'use client'

import { DashboardEvento } from "@/components/evento/DashboardEvento/DashboardEvento"
import { FormSenhaEvento } from "@/components/evento/FormSenhaEvento/FormSenhaEvento"
import { Evento, eventos } from "core"
import { use, useEffect, useState } from "react"

export default function PaginaAdminEvento(props: any) {
  const params: any = use(props.params)
  const id = params.todos[0]

  const [senha, setSenha] = useState<string | null>(params.todos[1] ?? null)
  const [evento, setEvento] = useState<Evento>()

  const getEvents = () => {
    const selectedEvent = eventos.find(event => event.id === id && event.senha === senha)

    setEvento(selectedEvent)
  }

  useEffect(() => {
    getEvents()
  }, [id, senha])

  return (
    <div className="flex flex-col items-center">
      {evento ? <DashboardEvento evento={evento} /> : <FormSenhaEvento />}
    </div>
  )

}