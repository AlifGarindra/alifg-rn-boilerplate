import { View } from 'react-native'
import React from 'react'

const Gap = ({height, width}) => {
    if(height || width){
        return (
          <View style ={{height, width}} />
        )
    }else{
        return null
    }
}

export default Gap