import { EventoInformacoes } from "@/components/evento/evento-informacoes/evento-informacoes";
import { ListaConvidados } from "@/components/evento/lista-convidados/lista-convidados";
import { Estatistica } from "@/components/shared/estatistica/estatistica";
import { TituloSection } from "@/components/shared/titulo-section/titulo-section";
import { useEvents } from "@/data/hooks/useEvents";
import { bgBlack, bgRed500, button, centerGrow, flex1, flexRow, fontBold, gapX2, gapX4, gapY4, p4, py4, py8, roundedLg, selfCenter, textWhite, w4_5, wFull } from "@/style";
import { AntDesign } from "@expo/vector-icons";
import { Convidado } from "core";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect } from "react";
import { SafeAreaView, ScrollView, Text, View, Image, Pressable } from "react-native";

const DetailEvent = () => {
  const { id } = useLocalSearchParams();
  const { selectEvent, evento, deleteEvent } = useEvents();
  const router = useRouter()


  const deleteEventById = (id: string) => {
    deleteEvent(id)
    router.back()
  }


  useEffect(() => {
    selectEvent(id as string);
  }, [id]);


  if (!evento?.id) {
    return (
      <View style={[centerGrow]}>
        <Text style={[textWhite]}>Evento não encontrado</Text>
      </View>
    );
  }

  const presents = evento.convidados.filter((convidado: Convidado) => convidado.confirmado) ?? []

  const ausentes = evento.convidados.filter((convidado: Convidado) => !convidado.confirmado) ?? []

  const total = presents.reduce((total, convidado) => {
    return total + convidado.qtdAcompanhate + 1
  }, 0)

  return (
    <SafeAreaView style={[bgBlack, flex1, p4]}>
      <ScrollView contentContainerStyle={[gapY4, py4]}>
        <Image source={{ uri: evento.image }} style={[wFull, roundedLg, { height: 200 }]} />
        <EventoInformacoes {...evento} />
        <View style={[flexRow, gapX2, { marginTop: 40 }]}>
          <Estatistica text="Expectativa" value={evento.publicoEsperado} image={require("@/assets/images/convidados.png")} />
          <Estatistica text="Confirmações" value={presents.length} image={require("@/assets/images/confirmados.png")} />
          <Estatistica text="Total" value={total} image={require("@/assets/images/acompanhantes.png")} />
        </View>
        <TituloSection text="Presenças confirmadas" />
        <ListaConvidados convidados={ausentes} />
        <TituloSection text="Ausencias confirmadas" />
        <ListaConvidados convidados={presents} />

        <Pressable style={[button, bgRed500, w4_5, selfCenter]} onPress={() => deleteEventById(evento.id)}>
          <AntDesign name="delete" size={20} color={'white'} />

          <Text style={[textWhite, fontBold]}>Excluir Evento</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailEvent;
