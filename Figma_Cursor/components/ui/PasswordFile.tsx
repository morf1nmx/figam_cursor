// src/components/ui/PasswordField.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, TextInputProps } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type PasswordFieldProps = {
  label: string;
} & TextInputProps;

const PasswordField: React.FC<PasswordFieldProps> = ({ label, ...inputProps }) => {
  const [visible, setVisible] = useState(false);

  return (
    <View className="mb-2">
      <Text className="text-sm font-semibold text-gray-600 mb-2">{label}</Text>
      <View className="flex-row items-center border border-gray-300 rounded-xl bg-gray-50 px-4 h-14">
        <Ionicons
          name="lock-closed-outline"
          size={20}
          color="#64748b"
          style={{ marginRight: 12 }}
        />
        <TextInput
          className="flex-1 text-base text-black h-14 py-0"
          placeholderTextColor="#94a3b8"
          secureTextEntry={!visible}
          {...inputProps}
        />
        <TouchableOpacity
          onPress={() => setVisible(!visible)}
          hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
          className="p-1"
        >
          <Ionicons
            name={visible ? 'eye-off-outline' : 'eye-outline'}
            size={22}
            color="#64748b"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PasswordField;