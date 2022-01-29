import React, { useEffect } from 'react';
import login from './src/Pages/Login/login';
import home from './src/Pages/Home/home';
import cadastro from './src/Pages/Cadastro/cadastro';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="login"
        component={login}/>

      <Stack.Screen
        options={{ headerShown: false }}
        name="home"
        component={home}/>
        
      <Stack.Screen
        options={{ headerShown: false }}
        name="cadastro"
        component={cadastro}/>
    </Stack.Navigator>
  );
}

const App =() => {

  useEffect(() => {
    SplashScreen.hide();
  }, [])

  
  return (
    <NavigationContainer>
        <MyStack />
    </NavigationContainer>
  );
};          

export default App;