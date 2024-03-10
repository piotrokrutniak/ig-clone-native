import { useColorScheme } from "react-native";

export const useThemeColors = () => {
  const colorScheme = useColorScheme();
  const backgroundColor = colorScheme === "dark" ? "black" : "white";
  const textColor = colorScheme === "dark" ? "white" : "black";
  const primaryColor = colorScheme === "dark" ? "white" : "black";
  const secondaryColor = colorScheme === "dark" ? "white" : "black";
  return { backgroundColor, textColor, primaryColor, secondaryColor };
};
