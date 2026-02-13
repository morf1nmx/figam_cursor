import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, Button, Alert } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native'
import { sendMessageToChat } from 'Services/Login';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import Screen from 'components/Layout/Screen';
import HeaderBack from 'components/Layout/HeaderBack';
import AppLogo from '../../components/ui/AppLogo';
import TextField from '../../components/ui/TextField';
import PasswordField from 'components/ui/PasswordFile';
import PrimaryButton from '../../components/ui/PrimaryButton';
import DividerWithText from '../../components/ui/DividerWithText';
import SocialButton from '../../components/ui/SocialButton';
type RootStackParamList = {
  Home: { email: string; password: string , message: string  };
};
const HomeScreen: React.FC = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'Home'>>();
  const [email, setEmail] = useState(route.params.email);
  const [password, setPassword] = useState(route.params.password);
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleSend = async () => {
    if (!message.trim()) {
      Alert.alert("Error", "Escribe una pregunta primero");
      return;
    }

    try {
      const result = await sendMessageToChat(message);

      if (result.reply) {
        Alert.alert("Respuesta:", result.reply);
      } else {
        Alert.alert("Error", "No se obtuvo respuesta de la API");
      }
    } catch (error) {
      Alert.alert("Error", "Ocurrió un error al conectarse");
    }
  };

  return (
   <Screen>
      <></>

      <TextField
        label="Pregunta aqui"
        value={message}
        onChangeText={setEmail}
        placeholder="ingresa tu pregunta"
      />

      <PasswordField
        label="Temperatura"
        value={password}
        onChangeText={setPassword}
        placeholder="Temperatura del ceular"
      />

      <PrimaryButton label="Enviar Pregunta" onPress={handleSend} />
    </Screen>
  );
};


;

export default HomeScreen;