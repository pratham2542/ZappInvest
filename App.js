import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Stack1 from "./navigation/navigator";
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ToastProvider } from 'react-native-toast-notifications'
import ToastMessage from './components/utils/ToastMessage';

SplashScreen.preventAutoHideAsync()
  .then(result => console.log(`succeeded: ${result}`))
  .catch(console.warn);




export default function App() {
  //timout starts after preventAutoAsync
  //change color and image of splash screen in app.json
  useEffect(() => {
    setTimeout(async () => {
      await SplashScreen.hideAsync();

    }, 2000);
  }, []);


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ToastProvider>
        <View style={styles.container}>
          <NavigationContainer>
            <Stack1 />
          </NavigationContainer>
        </View>
      </ToastProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
});
