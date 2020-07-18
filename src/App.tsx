import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { StatusBar, Platform } from 'react-native';
import ProductList from './screens/ProductList';
import ProductDetails from './screens/ProductDetails';

const Stack = createStackNavigator();

StatusBar.setBarStyle('light-content');

/* istanbul ignore if */
if (Platform.OS === 'android') {
  StatusBar.setBackgroundColor('#ffffff60');
  StatusBar.setTranslucent(true);
}

function App() {
  const headerStyles = {
    headerTransparent: true,
    headerStyle: {
      backgroundColor: 'transparent',
      borderBottomWidth: 0,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontSize: 27,
      marginTop: -39,
      textTransform: 'uppercase'
    },
    headerBackTitle: '',
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS
        }}
      >
        <Stack.Screen
          name="ProductList"
          component={ProductList}
          options={{ title: 'Lista de produtos', ...headerStyles }}
        />

        <Stack.Screen
          name="ProductDetails"
          component={ProductDetails}
          options={{ title: 'Detalhes do produto', ...headerStyles }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
