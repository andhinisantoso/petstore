import React, { useEffect } from 'react';
import Home from './src/views/screens/Home';
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