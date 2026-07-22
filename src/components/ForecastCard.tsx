import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  icon: any;
  titulo: string;
  valor: string;
};

export default function WeatherCard({ icon, titulo, valor }: Props) {
  return (
    <View style={styles.card}>
      <Ionicons
        name={icon}
        size={30}
        color="#7FA7D8"
      />

      <Text style={styles.title}>{titulo}</Text>

      <Text style={styles.value}>{valor}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 130,
    height: 130,
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    marginTop: 8,
    color: "#64748B",
  },

  value: {
    marginTop: 6,
    fontSize: 20,
    fontWeight: "bold",
    color: "#334155",
  },
});