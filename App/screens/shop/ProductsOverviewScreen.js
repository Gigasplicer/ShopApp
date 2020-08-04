import React from 'react';
import { View, Text, StyleSheet, FlatList} from 'react-native';
import {useSelector} from 'react-redux';


const ProductsOverviewScreen = props =>{
    const products = useSelector(state => state.products.availableProducts); //grab products and store them in products. state is arbituary. ie. how useSelector works
    //takes a function.  takes the redux state, and returns what we point to.  In this case it grabs 'products' from the root reducer found in App.js. 
    //Which in turn points to /reducers/products and 'availableProducts' this name needs to be correct. 
 return(
     //data is grabbed from the above const which in this case is an array of 6 products(the products in the dummydata)
     //keyextractor is only needed for older version.  Not sure when the cutoff is
     //renderItem will return a jsx item ( <Text> for example)
     //continued.  itemData is our made up name for the 'variable' basically meaning itemData === data === {products} meaning we can use "." to find specific data. '.item.' is provided by flatlist and React Native.
     <FlatList data={products} keyExtractor={item => item.id} renderItem={itemData => <Text>{itemData.item.title}</Text>}/>
 )

};

const styles = StyleSheet.create({

});
//NavigationOption updates need to be rebuilt on the emulator to work.  Reload to see updates.
ProductsOverviewScreen.navigationOptions ={
    headerTitle: 'All Products'
}

export default ProductsOverviewScreen;
