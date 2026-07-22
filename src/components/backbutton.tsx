import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";


export default function BackButton(){

  return(
    <TouchableOpacity
      onPress={() => router.back()}
    >

      <Ionicons
        name="arrow-back"
        size={28}
        color="#334155"
      />

    </TouchableOpacity>
  );

}