import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import Home from './src/views/screens/Home';
import OnBoardScreen from './src/views/screens/OnBoardScreen';
import DetailsScreen from './src/views/screens/DetailProduct';
import SignIn from './src/views/screens/SignIn';
import SignUp from './src/views/screens/SignUp';
import Verification from './src/views/screens/Verification';
import Profile from './src/views/screens/Profile';
import CartScreen from './src/views/screens/Cart';
import AlertSuccess from './src/views/screens/AlertSuccess';
import Favorite from './src/views/screens/Favorite';
import History from './src/views/screens/History';
import DetailHistory from './src/views/screens/DetailHistory';
import EditProfile from './src/views/screens/EditProfile';
import AdminHome from './src/views/screens/AdminHome';
import AdminCatalog from './src/views/screens/AdminCatalog';
import AdminDetailsScreen from './src/views/screens/AdminDetailProduct';
import PopupDelete from './src/views/screens/PopupDelete';
import AddCategory from './src/views/screens/AddCategory';
import AddProduct from './src/views/screens/AddProduct';
import AdminEditProfile from './src/views/screens/AdminEditProfile';
import InfoPetStore from './src/views/screens/StoreProfile';
import AdminSummary from './src/views/screens/AdminSummary'
import AdminEditProduk from './src/views/screens/AdminEditProduk'
import AdminOrderCheck from './src/views/screens/AdminOrderCheck'
import AdminDetailUnprocessed from './src/views/screens/AdminDetailUnprocessed'
import AdminDetailProcessed from './src/views/screens/AdminDetailProcessed'
import AdminDetailFinished from './src/views/screens/AdminDetailFinished'
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
            {/* scene login signup and onboard */}
            <Stack.Screen name="OnBoard" component={OnBoardScreen} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="Verification" component={Verification} />
            {/* user */}
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="DetailProduct" component={DetailsScreen} />
            <Stack.Screen name="Cart" component={CartScreen} />
            <Stack.Screen name="Favourite" component={Favorite} />
            <Stack.Screen name="History" component={History} />
            <Stack.Screen name="DetailHistory" component={DetailHistory} />
            <Stack.Screen name="InfoPetStore" component={InfoPetStore} />
            <Stack.Screen name="EditProfile" component={EditProfile} />
            <Stack.Screen name="Success" component={AlertSuccess} />
            {/* admin */}
            <Stack.Screen name="AdminHome" component={AdminHome} />
            <Stack.Screen name="AdminCatalog" component={AdminCatalog} />
            <Stack.Screen name="AdminSummary" component={AdminSummary} />
            <Stack.Screen name="AdminEditProfile" component={AdminEditProfile} />
            <Stack.Screen name="AdminDetailsScreen" component={AdminDetailsScreen} />
            <Stack.Screen name="AddCategory" component={AddCategory} />
            <Stack.Screen name="AddProduct" component={AddProduct} />
            <Stack.Screen name="AdminEditProduk" component={AdminEditProduk} />
            <Stack.Screen name="AdminOrderCheck" component={AdminOrderCheck} />
            <Stack.Screen name="AdminDetailUnprocessed" component={AdminDetailUnprocessed} />
            <Stack.Screen name="AdminDetailProcessed" component={AdminDetailProcessed} />
            <Stack.Screen name="AdminDetailFinished" component={AdminDetailFinished} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  )
} 

export default App;


