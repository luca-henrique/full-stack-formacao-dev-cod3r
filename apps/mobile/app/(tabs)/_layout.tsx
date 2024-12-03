import { colors } from "@/style/colors";
import { Tabs } from "expo-router";

import { AntDesign } from "@expo/vector-icons";

export default function RootLayout() {
  const options = (label: string, icon: string) => {
    return {
      tabBarLabel: label,
      tabBarActiveTintColor: colors.blue[500],
      tabBarInactiveTintColor: colors.zinc[400],
      tabBarStyle: {
        backgroundColor: colors.zinc[950],
        borderTopWidth: 0,
      },
      tabBarIcon: ({ focused }: { focused: boolean }) => (
        <AntDesign
          name={icon as any}
          size={24}
          color={focused ? colors.blue[500] : colors.blue[700]}
        />
      ),
    };
  };

  return (
    <Tabs screenOptions={{ headerShown: false }} initialRouteName="index">
      <Tabs.Screen
        name="index"
        options={options('Inicio', 'home')}
      />
      <Tabs.Screen
        name="eventos"
        options={options('Eventos', 'calendar')}
      />
    </Tabs>
  );
}
