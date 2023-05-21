import  React  from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
    Button,
    TouchableOpacity,
    TextInput} from 'react-native';
    import { Ionicons } from '@expo/vector-icons';
    import { LinearGradient } from 'expo-linear-gradient'; 

export default function FazerLogin ({navigation}){
  return(
    
    <LinearGradient
    style={{
        flex: 1
    }}
    colors={["#B0C4DE", "#ffffff", "#B0C4DE"]}>
      
      
    
      <View style={estilos.fundo}>
        <Image source={require('../Imagens/estacioTransparente.png' )} style={estilos.logo}>
        </Image>
  
  
        <View style={estilos.espaco}>
            <Text style={estilos.titulo1}>Olá.</Text>
            <Text style={estilos.titulo2}>Seja bem vindo(a)!</Text>
        </View>



            
          <View style={estilos.janela}>

          <Text style={estilos.titulo3}>
              FAÇA SEU LOGIN
            </Text>
            <View style={estilos.item_login}>
              <Text style={estilos.textMatricula}>
                MATRÍCULA:
              </Text>
              <TextInput style={estilos.textCampo} 
              placeholder={'Digite sua matrícula'} ></TextInput>
            </View>
            
            <View style={estilos.item_senha}>
              <Text style={estilos.textSenha}>
                SENHA:
              </Text>
              <TextInput style={estilos.textCampo} 
              placeholder={'Digite sua senha'} ></TextInput>
              <TouchableOpacity style={estilos.icon}>
                <Ionicons 
                name="eye" 
                color="grey"
                size={20}
                />
              </TouchableOpacity>
            </View>
            
            <TouchableOpacity 
                onPress = {() => navigation.navigate('Conta')}
                style={estilos.bottonEsquec}
                activeOpacity={0.5}>
                <View>
                  <Text style={estilos.esqueceu}>Esqueceu a senha?</Text>
                </View>
            
              </TouchableOpacity>
            <View>
              <Text style={estilos.naoTemConta}>
               Não tem conta?
              </Text>
            </View>

              <TouchableOpacity 
                onPress = {() => navigation.navigate('Conta')}
                style={estilos.bottonCadastre}
                activeOpacity={0.5}>
                <View>
                  <Text style={estilos.cadastre}>
                    CADASTRE-SE!
                  </Text>
                </View>
            
              </TouchableOpacity>
            <View style={estilos.botao}>
            <Button title=" LOGIN" color= '#B0C4DE'onPress={
              ()=>navigation.navigate('Inicio')} />
            </View>

       
          </View>
      </View>
        
    </LinearGradient>
    
  );
}

const estilos = StyleSheet.create({

  fundo: {
    flex: 1
  },
  
  espaco:{
    marginTop: 30
  },
  textMatricula:{
    
    marginTop: 5,
    marginLeft: 7,
    fontWeight: 'bold'
  },
  
  textSenha:{
    
    marginTop: -15,
    marginLeft: 7,
    fontWeight: 'bold'
  },

  textCampo: {
    
    backgroundColor: '#F4F3F3',
    height: '35%',
    color: '#a1a1a1',
    borderRadius: 10,
    marginTop: 3,
    marginLeft: 7,
    margin: '10%',
    padding: 3
  },

  item_login:{
    
    marginHorizontal: 25,
    height: 80,
    marginLeft: 20,
    marginTop: 20
  },

  item_senha:{
    marginTop: 20,
    marginLeft: 20,
    height: 80,
    marginHorizontal: 25
  },

  icon: {
    width: 37,
    height: 26,
    right: -285,
    bottom: 64,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F4F3F3'
  },

  esqueci_senha:{

    marginHorizontal: '15%',
    height: '80%',
    fontSize: 12,
    justifyContent: 'center',
    textAlign: 'right',
    color: 'black'

  },
  
  naoTemConta:{

    marginHorizontal: '15%',
    marginLeft: 205,
    marginTop: 11,
    height: '80%',
    fontSize: 10,
    color: 'black'

  },

  bottonCadastre:{
    position: 'absolute',
    width: 270,
    height: 120,
    fontSize: 7,
    justifyContent: 'center',
    right: -145,
    bottom: 90,
    padding: 2
    
  },
  
  cadastre:{

    marginTop: 5,
    width: '30%',
    fontSize: 10,
    fontWeight: 'bold',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: '#F4F3F3',
    color: 'black'

  },

  esqueceu:{

    marginHorizontal: '62%',
    marginTop: '-3%',
    width: '30%',
    fontSize: 10,
    fontWeight: 'bold',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: '#F4F3F3',
    color: 'black'

  },
  
  botao:{
    position: 'absolute',
    width: 122,
    height: 40,
    fontSize: 7,
    justifyContent: 'center',
    right: 155,
    bottom: 50,
    padding: 2
    
  },
  
  janela:{
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: 25,
    width: '100%',
    textAlign: 'center',
    justifyContent: 'center'
  },
   
  titulo1:{
    margin: 8,
    marginTop: 17,
    marginLeft: 20,
    width: 175,
    height: 55,
    left: 5,
    fontSize: 25,
    color: 'black'
  },
  titulo2:{
    marginVertical: 5,
    marginTop: -12,
    marginLeft: 20,
    width: 250,
    height: 55,
    fontSize: 25,
    color: 'black'
  },
  titulo3:{
    marginVertical: 5,
    marginTop: 270,
    marginLeft: 140,
    width: 175,
    height: 55,
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black'
  },
  logo:{
    resizeMode: 'contain',
    marginTop: 12,
    marginLeft: 80,
    width: 230
  }
})




