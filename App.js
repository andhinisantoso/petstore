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

// redux
import store from './src/redux/store';
import { Provider } from 'react-redux';

const App = () => {

  return (
    <Provider store={store}>
      <Home />
    </Provider>
  )
}

export default App;


