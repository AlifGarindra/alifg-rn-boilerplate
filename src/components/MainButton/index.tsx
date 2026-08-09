import {
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import React from 'react';

interface MainButtonProps {
  handleStep: () => void;
  textStyle?: StyleProp<TextStyle>;
  buttonStyle?: StyleProp<ViewStyle>;
}

const MainButton = ({handleStep, textStyle, buttonStyle}: MainButtonProps) => {
  return (
    <TouchableOpacity
      onPress={handleStep}
      style={[
        {
          backgroundColor: '#92A3FD',
          borderRadius: 20,
          paddingVertical: 18,
          alignItems: 'center',
        },
        buttonStyle,
      ]}>
      <Text
        style={[
          {
            color: 'white',
            fontSize: 16,
            fontFamily: 'Poppins-Bold',
          },
          textStyle,
        ]}>
        Get Started
      </Text>
    </TouchableOpacity>
  );
};

export default MainButton;
