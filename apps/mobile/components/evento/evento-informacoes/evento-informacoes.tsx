import { Informacao } from "@/components/shared/informacao/informacao";
import { gapY2 } from "@/style";
import { Evento } from "core";
import { View } from "react-native";

export interface EventoInformacoesProps extends Evento { }

export const EventoInformacoes = ({ nome, data, descricao, local }: EventoInformacoesProps) => {
  return (
    <View style={[gapY2]}>
      <Informacao label="Nome">{nome}</Informacao>
      <Informacao label="Data">
        {new Date(data).toLocaleDateString("pt-BR")} ás{" "}
        {new Date(data).toLocaleTimeString("pt-BR")}
      </Informacao>
      <Informacao label="Local">{local}</Informacao>
      <Informacao label="Descrição">{descricao}</Informacao>
    </View>
  );
};
