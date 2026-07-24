import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { auth } from "../../services/firebase";

export default function Index() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function entrar() {
    try {
      await signInWithEmailAndPassword(auth, email, senha);
      router.replace("/home");
    } catch {
      alert("Email ou senha incorretos.");
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

        <Ionicons
          name="cloud-outline"
          size={90}
          color="#6C8DB5"
        />

        <Text style={styles.title}>
          Bem-vindo
        </Text>

        <Text style={styles.subtitle}>
          Entre na sua conta para continuar
        </Text>

        <View style={styles.inputBox}>
          <Ionicons
            name="mail-outline"
            size={22}
            color="#64748B"
          />

          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#64748B"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View style={styles.inputBox}>
          <Ionicons
            name="lock-closed-outline"
            size={22}
            color="#64748B"
          />

          <TextInput
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor="#64748B"
            secureTextEntry
            value={senha}
            onChangeText={setSenha}
          />
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={entrar}
        >
          <Text style={styles.buttonText}>
            Entrar
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.push("/register")}
        >
          <Text style={styles.create}>
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

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#334155",
    marginTop: 15,
  },

  subtitle: {
    fontSize: 15,
    color: "#64748B",
    marginTop: 8,
    marginBottom: 35,
    textAlign: "center",
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

  create: {
    marginTop: 20,
    color: "#4F83C2",
    fontWeight: "bold",
    fontSize: 15,
  },

});