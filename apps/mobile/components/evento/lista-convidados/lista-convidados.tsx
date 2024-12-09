import { border, borderZinc800, gapY2, px4, py2, roundedMd, textLg, textSm, textWhite, textZinc400 } from "@/style"
import { Convidado } from "core"
import { View, Text } from "react-native"

export interface ListaConvidadosProps {
  convidados: Convidado[]
}


export const ListaConvidados = ({ convidados = [] }: ListaConvidadosProps) => {


  if (convidados.length === 0) {
    return (
      <Text style={[textZinc400, textLg]}>Ninguém por aqui</Text>
    )
  }

  return (
    <View style={[gapY2]}>
      {convidados.map((convidado) => {
        return (
          <View key={convidado.id} style={[border, borderZinc800, roundedMd, px4, py2]}>
            <Text style={[textWhite, textLg]}>{convidado.nome}</Text>
            <Text style={[textZinc400, textSm]}>{convidado.email}</Text>
          </View>
        )
      })}
    </View>
  )
}