import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore, combineReducers } from 'redux';//create one root reducer.  will have multiple so need to be combined to 1.
import { Provider } from 'react-redux';// used to wrap around the main function/app to 'provide' something
import productsReducer from './store/reducers/products';
import ShopNavigator from './navigation/ShopNavigator';

const rootReducer = combineReducers({
  products: productsReducer,
});

const store = createStore(rootReducer);
 //the above are props that can be referenced if App.js redirects us to another component.  For example, 'ProductsOverviewScreen' uses products which inturn uses 'productsReducer'
export default function App() {
  return (
    //this {store} needs to be the same as the const created above
    //apparently you can't comment inside of a component.
    <Provider store={store}>
      <ShopNavigator/>
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