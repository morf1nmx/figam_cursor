import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";

type SocialButtonProps = {
  provider: string;
  onPress: () => void;
};

const SocialButton: React.FC<SocialButtonProps> = ({ provider, onPress }) => {
  if (provider === "google") {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={onPress}>
          <Text style={styles.icon}>G</Text>
          <Text style={styles.text}>Google</Text>
        </TouchableOpacity>
      </View>
    );
  }
  return null;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", // centra vertical
    alignItems: "center",     // centra horizontal
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 12,
    height: 56,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  icon: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#4a4a4a",
    marginRight: 8,
  },
  text: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
  },
});

export default SocialButton;