import {View, Text, TextInput} from 'react-native';
import React from 'react';
import {Gap} from '../../components';

const SignUpComponent = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      {/* title */}
      <View style={{alignItems: 'center'}}>
        <Text>Hey There,</Text>
        <Gap height={5} />
        <Text>Create an Account</Text>
      </View>
      {/* form */}
      <View style={{paddingHorizontal: 30}}>
        <TextInput
          placeholder="First Name"
          style={{padding: 15, backgroundColor: '#F7F8F8', borderRadius:10}}
        />
      </View>
      {/* button */}
      <View></View>
    </View>
  );
};

export default SignUpComponent;
