import { alignCenter, flexRow, text2Xl, textBlue500, textCenter, textWhite, textZinc400, w4_5 } from "@/style";
import { View, Image, Text } from "react-native";

export const Logo = () => {
  return (
    <View style={alignCenter}>
      <Image
        source={require("@/assets/images/logo.png")}
        style={{ width: 80, height: 80 }}
      />
      <View style={flexRow}>
        <Text style={[text2Xl, textWhite]}>CONVIT</Text>
        <Text style={[text2Xl, textBlue500]}>3 </Text>
        <Text style={[text2Xl, textWhite]}>Digital</Text>
      </View>
      <View style={w4_5}>
        <Text style={[textZinc400, textCenter]}>Crie e gerencie o convite do seu evento de forma simples sem complicações</Text>
      </View>
    </View>
  );
};
