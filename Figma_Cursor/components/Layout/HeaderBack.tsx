// src/components/layout/HeaderBack.tsx
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const HeaderBack: React.FC = () => {
  const navigation = useNavigation();

  return (
   <TouchableOpacity
    className="items-center justify-center w-10 h-10 rounded-full bg-gray-200"
    activeOpacity={0.8}
    onPress={() => navigation.goBack()}
  >
    <Ionicons name="arrow-back" size={24} color="#1d1a1a" />
  </TouchableOpacity>
  );
};

export default HeaderBack;