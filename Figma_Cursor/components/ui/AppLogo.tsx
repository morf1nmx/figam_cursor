import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const AppLogo: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconWrapper}>
        <Ionicons name="heart" size={36} color="#144c85" />
      </View>

      <Text style={styles.title}>Pausa Digital</Text>
      <Text style={styles.subtitle}>Inicia sesión para continuar</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,                 // ocupa todo el espacio disponible
    justifyContent: 'center',// centra verticalmente
    alignItems: 'center',    // centra horizontalmente
    paddingHorizontal: 16,   // espacio a los lados
  },
  iconWrapper: {
    width: 64,               // equivalente a w-16
    height: 64,              // equivalente a h-16
    borderRadius: 16,        // rounded-2xl
    backgroundColor: '#c0f0ff', // bg-cyan-100
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,        // mb-4
  },
  title: {
    fontSize: 24,            // text-3xl
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,         // mb-2
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,            // text-base
    color: 'rgba(0,0,0,0.8)',
    textAlign: 'center',
    paddingHorizontal: 16,   // px-4
  },
});

export default AppLogo;
