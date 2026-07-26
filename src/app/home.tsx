import { View, Text, StyleSheet, ActivityIndicator, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { signOut } from "firebase/auth";

import { auth } from "../../services/firebase";
import { buscarClima } from "../../services/weather";

import CityPicker from "../components/CityPicker";
import WeatherCard from "../components/WeatherCard";

export default function Home() {

  const [cidade, setCidade] = useState("Recife");
  const [clima, setClima] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    carregarClima();
  }, [cidade]);

  async function carregarClima() {

    try {

      setLoading(true);

      const dados = await buscarClima(cidade);

      setClima(dados);

    } catch {

      alert("Erro ao carregar o clima.");

    } finally {

      setLoading(false);

    }

  }

  async function sair() {

    await signOut(auth);

    router.replace("/");

  }

  if (loading) {

    return (

      <View style={styles.loading}>

        <ActivityIndicator size="large" color="#6C8DB5" />

      </View>

    );

  }

  return (

    <View style={styles.container}>

      <TouchableOpacity
        style={styles.logout}
        onPress={sair}
      >

        <Ionicons
          name="log-out-outline"
          size={24}
          color="#475569"
        />

      </TouchableOpacity>

      <Ionicons
        name="partly-sunny-outline"
        size={80}
        color="#F4B942"
      />

      <Text style={styles.title}>
        Clima Agora
      </Text>

      <Text style={styles.label}>
        Escolha uma lugar
      </Text>

      <CityPicker
        cidade={cidade}
        setCidade={setCidade}
      />

      <Text style={styles.city}>
        {clima.name}
      </Text>

      <Text style={styles.temp}>
        {Math.round(clima.main.temp)}°
      </Text>

      <Text style={styles.desc}>
        {clima.weather[0].description}
      </Text>

      <View style={styles.cards}>

        <WeatherCard
          icon="water-outline"
          titulo="Umidade"
          valor={`${clima.main.humidity}%`}
        />

        <WeatherCard
          icon="navigate-outline"
          titulo="Vento"
          valor={`${clima.wind.speed} m/s`}
        />

      </View>

    </View>

  );

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#EDF4FA",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20
  },

  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  logout: {
    position: "absolute",
    top: 60,
    right: 25
  },

  title: {
    fontSize: 18,
    color: "#64748B",
    marginTop: 10
  },

  label: {
    marginTop: 25,
    marginBottom: 8,
    fontSize: 16,
    color: "#475569"
  },

  city: {
    marginTop: 20,
    fontSize: 30,
    fontWeight: "700",
    color: "#334155"
  },

  temp: {
    fontSize: 72,
    fontWeight: "bold",
    color: "#334155"
  },

  desc: {
    fontSize: 18,
    color: "#64748B",
    marginBottom: 30,
    textTransform: "capitalize"
  },

  cards: {
    flexDirection: "row",
    gap: 15
  }

});