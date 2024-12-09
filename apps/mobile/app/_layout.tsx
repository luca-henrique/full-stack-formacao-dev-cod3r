import { ProviderEvent } from "@/data/contexts/ContextEvent";
import { colors } from "@/style/colors";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <ProviderEvent>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(stack)/evento/[id]" options={{
          title: 'Detalhe do Evento',
          headerShown: true,
          headerBackTitle: "Voltar",
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: colors.zinc[900]
          }
        }} />
      </Stack>
    </ProviderEvent>
  );
}
