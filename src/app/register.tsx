import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebase";
import { router } from "expo-router";

export default function Register() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function criarConta() {
    try {
      await createUserWithEmailAndPassword(auth, email, senha);

      alert("Conta criada com sucesso!");

      router.push("/");
    } catch (error) {
      alert("Erro ao criar conta");
    }
  }

  return (
    <ImageBackground
      source={require("../../assets/images/teladefundo.png")}
      style={styles.background}
      imageStyle={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <TouchableOpacity
          style={styles.back}
          onPress={() => router.back()}
        >
          <Ionicons
            name="arrow-back"
            size={28}
            color="#334155"
          />
        </TouchableOpacity>

        <View style={styles.logo}>
          <Ionicons
            name="person-circle-outline"
            size={75}
            color="#7FA7D8"
          />
        </View>

        <Text style={styles.title}>
          Criar conta
        </Text>

        <Text style={styles.subtitle}>
          Preencha seus dados para começar
        </Text>

        <View style={styles.inputBox}>
          <Ionicons
            name="mail-outline"
            size={22}
            color="#64748B"
          />

          <TextInput
            placeholder="Email"
            placeholderTextColor="#64748B"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
          />
        </View>

        <View style={styles.inputBox}>
          <Ionicons
            name="lock-closed-outline"
            size={22}
            color="#64748B"
          />

          <TextInput
            placeholder="Senha"
            placeholderTextColor="#64748B"
            secureTextEntry
            value={senha}
            onChangeText={setSenha}
            style={styles.input}
          />
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={criarConta}
        >
          <Text style={styles.buttonText}>
            Criar conta
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },

  backgroundImage: {
    width: "100%",
    height: "100%",
  },

  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "rgba(255,255,255,0.12)",
  },

  back: {
    position: "absolute",
    top: 50,
    left: 25,
  },

  logo: {
    alignItems: "center",
    marginBottom: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#334155",
    textAlign: "center",
  },

  subtitle: {
    textAlign: "center",
    color: "#64748B",
    marginTop: 8,
    marginBottom: 35,
    fontSize: 15,
  },

  inputBox: {
    width: 300,
    height: 55,
    backgroundColor: "rgba(255,255,255,0.70)",
    borderRadius: 14,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: "rgba(100,116,139,0.15)",
    elevation: 2,
  },

  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: "#334155",
  },

  button: {
    width: 300,
    height: 55,
    backgroundColor: "#7FA7D8",
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    elevation: 3,
  },

  buttonText: {
    color: "#FFF",
    fontSize: 17,
    fontWeight: "bold",
  },
});