import {TouchableOpacity, View, StyleSheet} from 'react-native';
import React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';
import {onBoardingConstants} from '../../constants/onBoardingConstants';

interface OnBoardingButtonProps {
  step: number; // step aktif (0-based)
  onPress: () => void;
  size?: number; // diameter area cincin
  color?: string;
}

const TOTAL_STEPS = onBoardingConstants.length;

const OnBoardingButton = ({
  step,
  onPress,
  size = 60,
  color = '#92A3FD',
}: OnBoardingButtonProps) => {
  const strokeWidth = 2;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  // seberapa penuh cincinnya berdasarkan step
  const progress = (step) / TOTAL_STEPS;
  const strokeDashoffset = circumference * (1 - progress);

  const buttonSize = size * 0.72; // lingkaran biru sedikit lebih kecil dari cincin

  return (
    <View style={[styles.wrapper, {width: size, height: size}]}>
      {/* Cincin progress (SVG) */}
      <Svg width={size} height={size} style={StyleSheet.absoluteFill}>
        {/* track abu-abu tipis di belakang */}
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeOpacity={0.25}
          strokeWidth={strokeWidth}
          fill="none"
        />
        {/* progress aktif */}
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          fill="none"
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </Svg>

      {/* Tombol bulat + panah */}
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.8}
        style={[
          styles.button,
          {
            width: buttonSize,
            height: buttonSize,
            borderRadius: buttonSize / 2,
            backgroundColor: color,
          },
        ]}>
        <Svg width={buttonSize * 0.4} height={buttonSize * 0.4} viewBox="0 0 24 24">
          <Path
            d="M9 6l6 6-6 6"
            stroke="#FFFFFF"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </Svg>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default OnBoardingButton;
