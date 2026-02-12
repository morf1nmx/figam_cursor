// src/components/ui/SocialButton.tsx
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

type SocialButtonProps = {
  provider: 'google';
  onPress: () => void;
};

const SocialButton: React.FC<SocialButtonProps> = ({ provider, onPress }) => {
  if (provider === 'google') {
    return (
      <TouchableOpacity
        className="flex-row items-center justify-center border border-gray-300 rounded-xl h-14 bg-white"
        activeOpacity={0.8}
        onPress={onPress}
      >
        <Text className="text-2xl font-bold text-gray-700 mr-2">G</Text>
        <Text className="text-base font-medium text-gray-800">Google</Text>
      </TouchableOpacity>
    );
  }
  return null;
};

export default SocialButton;