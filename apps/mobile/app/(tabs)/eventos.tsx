import { EventoCard } from "@/components/evento/evento-card/evento-card";
import { useEvents } from "@/data/hooks/useEvents";
import { bgBlack, flex1, gapY4, p4, py8 } from "@/style";
import { useRouter } from "expo-router";

import { Pressable, SafeAreaView, ScrollView } from "react-native";

export default function Index() {
  const { eventos } = useEvents();
  const router = useRouter()

  return (
    <SafeAreaView style={[flex1, bgBlack, p4]}>
      <ScrollView contentContainerStyle={[gapY4, py8]}>
        {eventos.map((evento) => (
          <Pressable onPress={() => router.push(`/evento/${evento.id}`)} key={evento.id}>
            <EventoCard  {...evento} />
          </Pressable>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
