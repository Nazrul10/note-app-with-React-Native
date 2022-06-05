import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import home from './src/screens/home';
import edit from './src/screens/edit';
import create from './src/screens/create';
import signIn from './src/screens/signIn';
import signup from './src/screens/signup';

const appTheme = {
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    background: '#fff'
  },
};

const Stack = createNativeStackNavigator();

export default function App() {
  const user = false;
  return (
    <NavigationContainer theme={appTheme}>
       <Stack.Navigator>
       {user? (<>
        <Stack.Screen name="Home" component={home} />
        <Stack.Screen name="Edit" component={edit} />
        <Stack.Screen name="Create" component={create} />
       </>) : (
         <>
         <Stack.Screen name="SignIn" component={signIn}  options={{headerShown:false}}/>
         <Stack.Screen name="Signup" component={signup} />
         </>
       )}
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
