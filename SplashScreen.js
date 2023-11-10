import React, { useEffect, useState } from 'react';
import { View, LottieView, SplashScreen } from 'react-native';
import MainContainer from './navigation/MainContainer';

const hideSplashScreen = async () => {
  await SplashScreen.preventAutoHideAsync();
  await SplashScreen.hideAsync();
};

const SplashScreenComponent = () => {
  const [appReady, setAppReady] = useState(false);

  useEffect(() => {
    hideSplashScreen();

    setTimeout(() => {
      setAppReady(true);
    }, 2000);
  }, []);

  if (!appReady) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <LottieView source={require('./lottie/loading.json')} autoPlay loop />
      </View>
    );
  }

  return <MainContainer />;
};

export default SplashScreenComponent;
