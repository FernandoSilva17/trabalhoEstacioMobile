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
    
    export default function Conta({navigation}){
      return(
       
        <LinearGradient
              style={{
                  flex: 1
              }}
              colors={["#B0C4DE", "#ffffff", "#B0C4DE"]}>
                
                
                
                <View style={estilos.fundo}>
                  
                  <Image source={require('../Imagens/estacioTransparente.png')} 
                  style={estilos.logo}></Image>
                  <View style={estilos.espaco}>
                      <Text style={estilos.titulo1}>Crie,</Text>
                      <Text style={estilos.titulo2}>Sua conta!</Text>
                  </View>
                  <View style={estilos.janela}>
                      <View style={estilos.item_email}>
                          <Text style={estilos.textEmail}>EMAIL:</Text>
                          <TextInput style={estilos.textCampo}
                              placeholder={'Digite seu email'}></TextInput>
                      </View>
                      <View style={estilos.item_matricula}>
                          <Text style={estilos.textMatricula}>MATRÍCULA:</Text>
                          <TextInput style={estilos.textCampo}
                              placeholder={'Digite sua matrícula'}></TextInput>
                      </View>
                      <View style={estilos.item_senha}>
                          <Text style={estilos.textSenha}>SENHA:</Text>

                          <View style={estilos.inputArea}>
                              <TextInput style={estilos.textInput}
                                  placeholder={'Digite sua senha'} />
                              <TouchableOpacity style={estilos.icon}>
                                  <Ionicons 
                                    name="eye" 
                                    color="grey"
                                    size={20}
                                  />
                              </TouchableOpacity>
                          </View>
                      </View>
                  </View>
                  <View style={estilos.botao}>
                      <Button title=" CADASTRE" color='#B0C4DE' onPress={
                        () => navigation.navigate('FazerLogin')} />
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
        marginTop: 70,
        marginLeft: 7
      },
    
      textEmail:{
        marginTop: -35,
        marginLeft: 7,
        fontWeight: 'bold'
      },
      textMatricula:{
        marginTop: -60,
        marginLeft: 7,
        fontWeight: 'bold'
      },
      
      textSenha:{
        marginTop: -80,
        marginLeft: 7,
        fontWeight: 'bold'
      },

      textCampo: {
        backgroundColor: '#F4F3F3',
        borderRadius: 10,
        height: '35%',
        color: '#a1a1a1',
        marginTop: 3,
        marginLeft: 7,
        margin: '10%',
        padding: 3
      },
    
      inputArea: {
        flexDirection: 'row',
        margin: '10%',
        height: '35%',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#a1a1a1',
        marginTop: 3,
        marginLeft: 7,
        marginRight: 42
      },
    
      icon: {
        width: 35,
        height: 28,
        right: 35,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F4F3F3'
      },
    
      textInput: {
        backgroundColor: '#F4F3F3',
        marginLeft: 40,
        borderRadius: 10,
        width:  325,
        height: 28,
        color: '#a1a1a1',
        padding: 3
      },
    
      item_email:{
        marginHorizontal: 25,
        height: 80,
        marginLeft: 20,
        marginTop: 20
      },
      item_matricula:{
        marginTop: 20,
        marginLeft: 20,
        height: 80,
        marginHorizontal: 25
      },
      item_senha:{
        marginTop: 20,
        marginLeft: 20,
        height: 80,
        marginHorizontal: 25
      },
    
      esqueci_senha:{
    
        marginHorizontal: '15%',
        height: '80%',
        fontSize: 12,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'right',
        color: 'black'
    
      },
      
      botao:{
        position: 'absolute',
        width: 122,
        height: 40,
        fontSize: '5%',
        alignItems: 'center',
        justifyContent: 'center',
        right: 155,
        bottom: 70,
        padding: 2
        
      },
      janela:{
        flex: 1,
        marginTop: 5,
        backgroundColor: 'white',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        height: 300,
        width: '100%',
        textAlign: 'center',
        justifyContent: 'center'
      },
       
      titulo1:{
    
        margin: 8,
        marginTop: 27,
        width: 175,
        height: 55,
        left: 5,
        fontSize: 25,
        color: 'black'
      },
      titulo2:{
        marginVertical: 5,
        marginLeft: 10,
        width: 175,
        height: 55,
        fontSize: 25,
        color: 'black'
      },
      logo:{
        resizeMode: 'contain',
        marginTop: 22,
        marginLeft: 40
      }
    })
