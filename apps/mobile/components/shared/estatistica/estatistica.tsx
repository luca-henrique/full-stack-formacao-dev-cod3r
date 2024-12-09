import { bgZinc900, flex1, fontBlack, gapY2, itemsCenter, p4, roundedLg, textCenter, textWhite, textXl, textZinc400 } from "@/style";
import { Image, Text, View } from "react-native";

export interface EstastisticaProps {
  text: string;
  value: any;
  image: any;
}

export const Estatistica = ({ image, value, text }: EstastisticaProps) => {
  return (
    <View style={[flex1, itemsCenter, bgZinc900, p4, roundedLg]}>
      <Image
        source={image}
        style={{ width: 80, height: 80, marginTop: -40 }}
      />
      <View style={[itemsCenter, gapY2]}>
        <Text style={[textZinc400, textCenter]}>{text}</Text>
        <Text style={[textWhite, textXl, fontBlack]}>{value}</Text>
      </View>
    </View>
  );
};
