import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native'

type RootStackParamList = {
  Home: { email: string; password: string };
};
  


const HomeScreen: React.FC = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'Home'>>();
  const [email, setEmail] = useState(route.params.email);
  const [password, setPassword] = useState(route.params.password);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>¡Bienvenido!</Text>

      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Correo</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="correo@ejemplo.com"
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Contraseña</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,                 // permite scroll si es necesario
    justifyContent: 'center',    // centra verticalmente
    alignItems: 'center',        // centra horizontalmente
    paddingHorizontal: 20,
    paddingVertical: 40,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#000',
  },
  fieldContainer: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 6,
    color: '#333',
  },
  input: {
    width: '100%',
    height: 48,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    paddingHorizontal: 12,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
});

export default HomeScreen;