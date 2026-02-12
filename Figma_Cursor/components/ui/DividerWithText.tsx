// src/components/ui/DividerWithText.tsx
import React from 'react';
import { View, Text } from 'react-native';

type DividerWithTextProps = {
  text: string;
};

const DividerWithText: React.FC<DividerWithTextProps> = ({ text }) => (
  <View className="flex-row items-center my-6">
    <View className="flex-1 h-px bg-gray-300" />
    <Text className="mx-3 text-sm text-gray-500">{text}</Text>
    <View className="flex-1 h-px bg-gray-300" />
  </View>
);

export default DividerWithText;