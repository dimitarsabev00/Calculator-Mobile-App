import { StyleSheet, Switch } from "react-native";
import { ThemeContext } from "../contexts/ThemeContext";
import { useState } from "react";
import { Colors } from "@/styles/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import MyKeyboard from "@/components/MyKeyboard";

export default function Index() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={theme}>
      <SafeAreaView
        style={
          theme === "light"
            ? styles.container
            : [styles.container, { backgroundColor: "black" }]
        }
      >
        <Switch
          value={theme === "dark"}
          onValueChange={() => setTheme(theme === "light" ? "dark" : "light")}
        />
        <MyKeyboard />
      </SafeAreaView>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light,
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
