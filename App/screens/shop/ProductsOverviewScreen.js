import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import ProductItem from '../../components/shop/ProductItem';


const ProductsOverviewScreen = props => { //this is referred to as a component.  You can have more than one per js file, but data delt with inside is not immediately available outside of it.
    const products = useSelector(state => state.products.availableProducts); //grab products and store them in products. state is arbituary. ie. how useSelector works
    //takes a function.  takes the redux state, and returns what we point to.  In this case it grabs 'products' from the root reducer found in App.js. 
    //Which in turn points to /reducers/products and 'availableProducts' this name needs to be correct. use select returns the value to the right of =>
    return (
        //data is grabbed from the above const which in this case is an array of 6 products(the products in the dummydata)
        //keyextractor is only needed for older version.  Not sure when the cutoff is
        //renderItem will return a jsx item ( <Text> for example)
        //continued.  itemData is our made up name for the 'variable' basically meaning itemData === data === {products} meaning we can use "." to find specific data. '.item.' is provided by flatlist and React Native.
        <FlatList
            data={products}
            keyExtractor={item => item.id}
            renderItem={itemData =>(
                <ProductItem
                    image={itemData.item.imageUrl}
                    title={itemData.item.title}
                    price={itemData.item.price}
                    onViewDetail={() => {
                        props.navigation.navigate({routeName: "ProductDetails"})
                     }}
                    onAddToCart={() => { }}
                />
            )}
        //need image, title, price, and event handler?  this might be handled in productItem.js
        />
    )

};

const styles = StyleSheet.create({

});
//NavigationOption updates need to be rebuilt on the emulator to work.  Reload to see updates.
ProductsOverviewScreen.navigationOptions = {
    headerTitle: 'All Products'
}

export default ProductsOverviewScreen;
