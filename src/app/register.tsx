import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebase";
import { router } from "expo-router";


export default function Register(){

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");



  async function criarConta(){

    try{

      await createUserWithEmailAndPassword(
        auth,
        email,
        senha
      );


      alert("Conta criada com sucesso!");

      router.push("/");


    }catch(error){

      alert("Erro ao criar conta");

    }

  }



  return(

    <View style={styles.container}>


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
        onPress={criarConta}

      >

        <Text style={styles.buttonText}>
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


  back:{
    position:"absolute",
    top:50,
    left:25
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
    backgroundColor:"#9CC5E8",
    padding:16,
    borderRadius:12,
    alignItems:"center",
    marginTop:10
  },


  buttonText:{
    color:"#334155",
    fontWeight:"bold"
  }

});