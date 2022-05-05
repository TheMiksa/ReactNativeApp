import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

type Routes = {
  Home: string;
};

const routes: Routes = {
  Home: 'Home',
};

const Home = () => (
  <View style={styles.container}>
    <Text>Open up App.tsx to start working on your app!</Text>
    <StatusBar style="auto" />
  </View>);
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={routes.Home}>
        <Stack.Screen name={routes.Home} component={Home} />
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
