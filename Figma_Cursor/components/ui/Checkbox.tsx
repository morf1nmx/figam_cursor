// src/components/ui/Checkbox.tsx
import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type CheckboxProps = {
  label: string;
  value: boolean;
  onChange: (value: boolean) => void;
};

const Checkbox: React.FC<CheckboxProps> = ({ label, value, onChange }) => {
  return (
    <TouchableOpacity
      className="flex-row items-center mt-5"
      activeOpacity={0.7}
      onPress={() => onChange(!value)}
    >
      <View
        className={`w-5 h-5 rounded border-2 mr-3 items-center justify-center ${
          value ? 'bg-indigo-500 border-indigo-500' : 'border-gray-400'
        }`}
      >
        {value && <Ionicons name="checkmark" size={14} color="#ddd7e6" />}
      </View>
      <Text className="text-base text-gray-700">{label}</Text>
    </TouchableOpacity>
  );
};

export default Checkbox;