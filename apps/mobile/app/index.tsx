import { textXl } from "@/style";
import { centerGrow } from "@/style/components";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View style={[centerGrow]}>
      <Text style={[textXl]}>Edit app/index.tsx to edit this screen.</Text>
      <Link href={'/(tabs)/eventos'}>
        <Text>Eventos</Text>
      </Link>
    </View>
  );
}
