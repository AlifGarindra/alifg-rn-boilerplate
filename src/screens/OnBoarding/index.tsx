import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {IFitnessXLogo} from '../../assets';
import {Gap, MainButton, OnBoardingButton} from '../../components';
import {
  onBoardingConstants,
  onBoardingImage,
} from '../../constants/onBoardingConstants';

const OnBoardingComponent = () => {
  const [step, setStep] = useState(0);

  const handleStep = () => {
    if (step < 4) {
      setStep(prevStep => prevStep + 1);
    } else {
      
    }
  };

  const renderScreenStep = (): JSX.Element | null => {
    if (step == 0) {
      return (
        <>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <IFitnessXLogo />
            <Gap height={15} />
            <Text>Everybody Can Train</Text>
          </View>
          <View style={{paddingHorizontal: 30}}>
            <MainButton handleStep={handleStep} />
          </View>
        </>
      );
    } else {
      return (
        <View style={{flex: 1}}>
          <View style={{flex: 1}}>
            <Image
              source={onBoardingImage[step - 1]}
              style={{width: '100%', height: '100%'}}
              resizeMode="stretch"
            />
          </View>
          <View style={{flex: 0.8, paddingHorizontal: 30}}>
            <Gap height={64} />
            <Text
              style={{
                fontSize: 24,
                fontFamily: 'Poppins-Bold',
                color: '#1D1617',
              }}>
              {onBoardingConstants[step - 1]['title']}
            </Text>
            <Gap height={15} />
            <Text style={{fontSize: 14, color: '#7B6F72', lineHeight: 21}}>
              {onBoardingConstants[step - 1]['body']}
            </Text>
          </View>
          <View style={{alignItems: 'flex-end', paddingHorizontal: 30}}>
            <OnBoardingButton step={step} onPress={handleStep} />
          </View>
        </View>
      );
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: '#ffffff'}}>
      {renderScreenStep()}
    </View>
  );
};

export default OnBoardingComponent;
