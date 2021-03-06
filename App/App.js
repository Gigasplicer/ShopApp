import React, { useState } from 'react';
import { AppLoading } from 'expo'
import { StyleSheet, Text, View } from 'react-native';
import { createStore, combineReducers, applyMiddleware } from 'redux';//create one root reducer.  will have multiple so need to be combined to 1.
import { Provider } from 'react-redux';// used to wrap around the main function/app to 'provide' something
import productsReducer from './store/reducers/products';
import ShopNavigator from './navigation/ShopNavigator';
import * as Font from 'expo-font'; // npm install --save expo-font
import cartReducer from './store/reducers/cart';
import ordersReducer from './store/reducers/orders';
import ReduxThunk from 'redux-thunk';//npm install --save redux-thunk.  also, add applyMiddleware


const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  orders: ordersReducer, 
});



const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
}

//the above are props that can be referenced if App.js redirects us to another component.  For example, 'ProductsOverviewScreen' uses products which inturn uses 'productsReducer'
export default function App() {

  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => {
          setFontLoaded(true);
        }}
      />
    );
  }


  return (
    //this {store} needs to be the same as the const created above
    //apparently you can't comment inside of a component.
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aaa',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


//npm install --save redux react-redux react-navigation react-navigation-header-buttons