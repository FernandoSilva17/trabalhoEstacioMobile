import  React  from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

export default function Comecar({navigation}){
  return(

    <LinearGradient 
          style={{
            flex: 1}}
            colors={["#B0C4DE", "#ffffff", "#B0C4DE"]}>
        
        
      <View style={estilos.item_login}>
       <Image source={require('../Imagens/estacioTransparente.png' )} style={estilos.logo}></Image>
       <Text style={estilos.titulo1}>Obrigado(a),</Text>
       <Text style={estilos.titulo2}>Vamos começar!</Text>
       
       <View style={estilos.janela}>
          <Text style={estilos.titulo}>NOSSO OBJETIVO É FACILITAR
           SUA VIDA!  {'\n'}
           PLANEJE, AGENDE E ACOMPANHE SUAS ATIVIDADES, TUDO NA PALMA
            DA SUA MÃO. {'\n'}
            DÊ SEUS PRIMEIROS PASSOS, CLIQUE EM VOLTAR E FAÇA SEU LOGIN!</Text>
       </View>
    
        
       <View style={estilos.botao}>
        <TouchableOpacity 
                onPress = {() => navigation.navigate('Conta')}
                style={estilos.bottonLogoStyle}
                activeOpacity={0.5}>
            <Image source={require('../Imagens/logoReturn2.png' ) } 
            style={estilos.  logoReturn}></Image>
            </TouchableOpacity>
        
        </View>
    </View>

    </LinearGradient>
  );
}

const estilos = StyleSheet.create({

  titulo: {


    textAlign: 'center',
    marginTop: "-15%",
    margin: '3%',
    fontSize: 12,
    fontWeight: 'bold'
  },
  
  janela:{
    
  },
  item_login:{
    textAlign: 'left',
    width: '90%',
    height:'80%'
  }, 
  titulo1:{
    margin: '-12%',
    marginTop: '18%',
    width: '44%',
    height: '10%',
    left: '17%',
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold'

  },
  titulo2:{
    margin: '42%',
    marginTop: '10%',
    fontSize: 25,
    color: 'black',
    width: '65%',
    height: '10%',
    left: '-36%'
  },
  logo:{
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: '10%'
  },
  logoReturn:{
    marginTop: '20%',
    resizeMode: 'contain',
    alignSelf: 'center'
  }
  
})




