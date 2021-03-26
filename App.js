import React, { useState } from 'react';
import { Alert, View, StyleSheet, Text, Linking, TextInput, TouchableOpacity } from 'react-native';

export default function App() {

  const [whatsAppMessage, setWhatsAppMessage] = useState();

  const sendMsg = () => {  
   
    let URL = 'whatsapp://send?text=' +  whatsAppMessage  ;

    Linking.openURL(URL)
      .then((data) => {
        console.log('WhatsApp Aberto');
      })
      .catch(() => {
        Alert.alert('WhatsApp não instalado');
      });
  };
  
  return (

    <View style={styleSheet.MainContainer}>

        <Text style={styleSheet.text1}>Enviar mensagem para o WhatsApp app React Native</Text>

        <TextInput
          value={whatsAppMessage}
          onChangeText={
            (whatsAppMessage) => setWhatsAppMessage(whatsAppMessage)
          }
          placeholder={'Escreva aqui sua mensagem'}
          style={styleSheet.textInputStyle}
        />

        <TouchableOpacity
          activeOpacity={0.7}
          style={styleSheet.button}
          onPress={sendMsg}>
          <Text style={styleSheet.buttonText}> Enviar mensagem para WhatsApp</Text>
        </TouchableOpacity>
      
    </View>

  );
}

const styleSheet = StyleSheet.create({
 
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
    padding: 10
  },

  text1: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  textInputStyle: {
    height: 42,
    borderColor: 'blue',
    borderWidth: 1,
    width: '100%',
    paddingHorizontal: 10,
    marginTop: 20
  },

  button: {
    justifyContent: 'center',
    marginTop: 18,
    padding: 12,
    backgroundColor: '#00B8D4',
  },

  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  
 
});