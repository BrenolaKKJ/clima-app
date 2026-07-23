import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebase";
import { router } from "expo-router";


export default function Login(){

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");


  async function entrar(){

    try{

      await signInWithEmailAndPassword(
        auth,
        email,
        senha
      );

      router.push("/home");

    }catch(error){

      alert("Email ou senha incorretos");

    }

  }


  return(

    <View style={styles.container}>


      <View style={styles.logo}>

        <Ionicons
          name="cloud-outline"
          size={90}
          color="#7FA7D8"
        />

      </View>


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
          color="#94A3B8"
        />

        <TextInput

          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}

        />

      </View>




      <View style={styles.inputBox}>

        <Ionicons
          name="lock-closed-outline"
          size={22}
          color="#94A3B8"
        />

        <TextInput

          placeholder="Senha"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
          style={styles.input}

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



      <Text style={styles.register}>
        Ainda não possui conta?
      </Text>



      <TouchableOpacity
        onPress={() => router.push("/register")}
      >

        <Text style={styles.create}>
          Criar conta
        </Text>

      </TouchableOpacity>



    </View>

  );

}




const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:"#D8E3EC",
    justifyContent:"center",
    padding:25
  },


  logo:{
    alignItems:"center",
    marginBottom:20
  },


  title:{
    fontSize:30,
    fontWeight:"bold",
    color:"#334155",
    textAlign:"center"
  },


  subtitle:{
    textAlign:"center",
    color:"#94A3B8",
    marginTop:8,
    marginBottom:35
  },


  inputBox:{
    flexDirection:"row",
    alignItems:"center",
    backgroundColor:"#FFFFFF",
    borderRadius:12,
    paddingHorizontal:15,
    marginBottom:15
  },


  input:{
    flex:1,
    padding:15
  },


  button:{
    backgroundColor:"#A7C7E7",
    padding:16,
    borderRadius:12,
    alignItems:"center",
    marginTop:10
  },


  buttonText:{
    color:"#334155",
    fontWeight:"bold"
  },


  register:{
    textAlign:"center",
    marginTop:25,
    color:"#94A3B8"
  },


  create:{
    textAlign:"center",
    marginTop:8,
    color:"#7FA7D8",
    fontWeight:"bold"
  }


});