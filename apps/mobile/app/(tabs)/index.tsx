import { Logo } from "@/components/template/Logo/Logo";
import { bgBlack, centerGrow, flex1 } from "@/style";
import { ImageBackground } from "react-native";

export default function Index() {
  return (
    <ImageBackground
      style={[flex1, bgBlack, centerGrow]}
      source={require("@/assets/images/background.png")}
      resizeMode="cover"
    >

      <Logo />

    </ImageBackground>
  );
}
