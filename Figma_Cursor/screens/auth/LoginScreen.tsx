// src/screens/auth/LoginScreen.tsx
import React, { useState } from 'react';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import Screen from 'components/Layout/Screen';
import HeaderBack from 'components/Layout/HeaderBack';
import AppLogo from '../../components/ui/AppLogo';
import TextField from '../../components/ui/TextField';
import PasswordField from 'components/ui/PasswordFile';
import PrimaryButton from '../../components/ui/PrimaryButton';
import Checkbox from '../../components/ui/Checkbox';
import DividerWithText from '../../components/ui/DividerWithText';
import SocialButton from '../../components/ui/SocialButton';
import { login } from 'Services/Login';

type RootStackParamList = {
  Home: { email: string; password: string };
};

const LoginScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(true);

const handleLogin = async () => {
  const data = await login(email, password);

  if (data.ok && data.email && data.password) {
    console.log('Login exitoso', data.email,data.password);
    navigation.navigate('Home', { email: data.email, password: data.password });
  } else {
    console.log('Error login:', data.message);
  }
};

  return (
    <Screen>
      <></>
      <HeaderBack />
      <AppLogo />

      <TextField
        label="Correo electrónico"
        icon="mail-outline"
        value={email}
        onChangeText={setEmail}
        placeholder="correo@ejemplo.com"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <PasswordField
        label="Contraseña"
        value={password}
        onChangeText={setPassword}
        placeholder="************"
      />

      <PrimaryButton label="Iniciar sesión" onPress={handleLogin} />

      <Checkbox
        label="Recordar sesión"
        value={remember}
        onChange={setRemember}
      />

      <DividerWithText text="o continúa con" />

      <SocialButton provider="google" onPress={() => {}} />
    </Screen>
  );
};

export default LoginScreen;