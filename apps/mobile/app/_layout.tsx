import { ProviderEvent } from "@/data/contexts/ContextEvent";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <ProviderEvent>
      <Stack screenOptions={{ headerShown: false }} />
    </ProviderEvent>
  );
}
