import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { OnBoardingComponent } from '../../screens';

const Stack = createNativeStackNavigator();
let basicScreenOptions : object = {
  headerShown : false
}
const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="OnBoarding" component={OnBoardingComponent} options={basicScreenOptions} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigator;