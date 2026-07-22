import api from "./api";


const chave = "6ee34c3ed30212681414fb0dc9bcf982";


export async function buscarClima(cidade){

    const resposta = await api.get("/weather",{

        params:{
            q:cidade,
            appid:chave,
            units:"metric",
            lang:"pt_br"
        }

    });


    return resposta.data;

}