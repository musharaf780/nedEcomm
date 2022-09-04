import React, {useEffect} from 'react';
import {View, Image} from 'react-native';
const SplashScreen = props => {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate('Auth');
    }, 3000);
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Image
        style={{height: 200, width: 250, resizeMode: 'contain'}}
        source={require('../Assets/Images/logo.png')}
      />
    </View>
  );
};

export default SplashScreen;
