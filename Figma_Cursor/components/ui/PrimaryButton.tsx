// src/components/ui/PrimaryButton.tsx
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

type PrimaryButtonProps = {
  label: string;
  onPress: () => void;
};

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ label, onPress }) => {
  return (
    <TouchableOpacity
      className="mt-4 rounded-xl overflow-hidden shadow-lg"
      activeOpacity={0.9}
      onPress={onPress}
      style={{
        shadowColor: '#121218',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 6,
      }}
    >
      <LinearGradient
        colors={['#0a0a24', '#151518']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        className="h-14 flex-row items-center justify-center rounded-xl"
      >
        <Text className="text-white text-lg font-bold">{label}</Text>
        <Ionicons
          name="leaf-outline"
          size={20}
          color="#fff"
          style={{ marginLeft: 8 }}
        />
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default PrimaryButton;