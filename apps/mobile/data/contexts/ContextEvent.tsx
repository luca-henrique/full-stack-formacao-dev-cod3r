import { createContext, ReactNode } from "react"

interface ProviderEventProps {
  children: ReactNode
}

interface ContextEventProps {

}

export const ContextEvent = createContext<ContextEventProps>({} as any)

export const ProviderEvent = ({ children }: ProviderEventProps) => {
  return (<ContextEvent.Provider value={{}}>{children}</ContextEvent.Provider>)
}


