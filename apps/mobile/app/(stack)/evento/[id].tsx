import { useEvents } from "@/data/hooks/useEvents";
import { bgBlack, centerGrow, flex1, gapX4, p4, py8, roundedLg, textWhite, wFull } from "@/style";
import { useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import { SafeAreaView, ScrollView, Text, View, Image } from "react-native";

const DetailEvent = () => {
  const { id } = useLocalSearchParams();
  const { selectEvent, evento } = useEvents();

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

  return (
    <SafeAreaView style={[bgBlack, flex1, p4]}>
      <ScrollView contentContainerStyle={[gapX4, py8]}>
        <Image source={{ uri: evento.image }} style={[wFull, roundedLg, { height: 200 }]} />
        <Text>{id}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailEvent;
