import { fontBold, py4, selfCenter, textXl, textZinc400 } from "@/style";
import { Text } from "react-native";

export interface TituloSection {
  text: string;
}

export const TituloSection = ({ text }: TituloSection) => {
  return (
    <Text style={[textXl, fontBold, py4, textZinc400, selfCenter]}>{text}</Text>
  );
};
