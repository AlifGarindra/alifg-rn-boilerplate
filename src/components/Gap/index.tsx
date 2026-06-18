import { View, ViewProps } from 'react-native'
import React from 'react'

interface GapProps extends ViewProps {
  height?: number;
  width?: number;
}

const Gap = ({ height, width, style, ...props }: GapProps) => {
  if (height || width) {
    return <View style={[{ height, width }, style]} {...props} />
  } else {
    return null
  }
}

export default Gap
