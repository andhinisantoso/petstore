import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import Home from './src/views/screens/Home';
import OnBoardScreen from './src/views/screens/OnBoardScreen';
import DetailsScreen from './src/views/screens/DetailProduct';
import SignIn from './src/views/screens/SignIn';
import SignUp from './src/views/screens/SignUp';
import Verification from './src/views/screens/Verification';
import CartScreen from './src/views/screens/Cart';
import AlertSuccess from './src/views/screens/AlertSuccess';
import Favorite from './src/views/screens/Favorite';
import BottomNavigation from './src/views/navigation/BottomNavigation';
// navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// redux
import store from './src/redux/store';
import { Provider } from 'react-redux';

const Stack = createStackNavigator();

const App = () => {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen name="OnBoard" component={OnBoardScreen} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Cart" component={CartScreen} />
          <Stack.Screen name="Favourite" component={Favorite} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App;


