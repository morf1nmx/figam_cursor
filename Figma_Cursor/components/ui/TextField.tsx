// src/components/ui/TextField.tsx
import React from 'react';
import { View, Text, TextInput, TextInputProps } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export type TextFieldProps = {
  label: string;
  icon?: keyof typeof Ionicons.glyphMap;
} & TextInputProps;

const TextField: React.FC<TextFieldProps> = ({ label, icon, ...inputProps }) => {
  return (
    <View className="mb-4">
      <Text className="text-sm font-semibold text-gray-600 mb-2">{label}</Text>
      <View className="flex-row items-center border border-gray-300 rounded-xl bg-gray-50 px-4 h-14">
        {icon && (
          <Ionicons
            name={icon}
            size={20}
            color="#64748b"
            style={{ marginRight: 12 }}
          />
        )}
        <TextInput
          className="flex-1 text-base text-black h-14 py-0"
          placeholderTextColor="#94a3b8"
          {...inputProps}
        />
      </View>
    </View>
  );
};

export default TextField;