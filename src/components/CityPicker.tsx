import { StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

type Props = {
  cidade: string;
  setCidade: (cidade: string) => void;
};

export default function CityPicker({ cidade, setCidade }: Props) {
  return (
    <Picker
      selectedValue={cidade}
      onValueChange={(itemValue) => setCidade(itemValue)}
      style={styles.picker}
    >
      <Picker.Item label="Recife" value="Recife" />
      <Picker.Item label="São Paulo" value="São Paulo" />
      <Picker.Item label="Rio de Janeiro" value="Rio de Janeiro" />
      <Picker.Item label="Salvador" value="Salvador" />
      <Picker.Item label="Fortaleza" value="Fortaleza" />
      <Picker.Item label="Curitiba" value="Curitiba" />
      <Picker.Item label="Brasília" value="Brasília" />
    </Picker>
  );
}

const styles = StyleSheet.create({
  picker: {
    width: 260,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    marginVertical: 20,
  },
});