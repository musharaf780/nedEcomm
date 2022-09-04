import React, {useState} from 'react';
import {View, Text, SafeAreaView, Image} from 'react-native';
import Colors from '../../Constants/Colors';
import MyFormInput from '../../Components/MyFormInput';
const LoginScreen = () => {
  const [textSecure, setTextSecure] = useState(true);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.primary}}>
      <View
        style={{
          height: '30%',
          width: '100%',

          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image source={require('../../Assets/Images/logo.png')} />
      </View>

      <View style={{height: '40%', width: '100%', paddingHorizontal: 10}}>
        <MyFormInput title="Email" placeHolder="Plese enter your email here" />

        <MyFormInput
          iconName={textSecure ? 'eye' : 'eye-off'}
          secure={textSecure}
          eyeShown={true}
          title="Password"
          placeHolder="Plese enter your password here"
          onPress={() => setTextSecure(!textSecure)}
        />
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
