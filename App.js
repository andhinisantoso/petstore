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
import History from './src/views/screens/History';
import DetailHistory from './src/views/screens/DetailHistory';
import AdminHome from './src/views/screens/AdminHome';
import AdminCatalog from './src/views/screens/AdminCatalog';
import AdminDetailsScreen from './src/views/screens/AdminDetailProduct';
import PopupDelete from './src/views/screens/PopupDelete';
import AddCategory from './src/views/screens/AddCategory';
import AddProduct from './src/views/screens/AddProduct';
import AdminEditProfile from './src/views/screens/AdminEditProfile';
import InfoPetStore from './src/views/screens/StoreProfile';
import BottomNavigation from './src/views/navigation/BottomNavigation';
// navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// redux
import { store, persistore } from './src/redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

const Stack = createStackNavigator();


const App = () => {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistore} >
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
      </PersistGate>
    </Provider>
  )
}

export default App;


