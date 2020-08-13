import React from 'react';
import { View, Text, StyleSheet, FlatList, Platform } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import ProductItem from '../../components/shop/ProductItem';
import * as cartActions from '../../store/actions/cart';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../../components/UI/HeaderButton';


const ProductsOverviewScreen = props => { //this is referred to as a component.  You can have more than one per js file, but data delt with inside is not immediately available outside of it.
    const products = useSelector(state => state.products.availableProducts); //grab products and store them in products. state is arbituary. ie. how useSelector works
    const dispatch = useDispatch();
    
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
            renderItem={itemData => (
                <ProductItem
                    image={itemData.item.imageUrl}
                    title={itemData.item.title}
                    price={itemData.item.price}
                    onViewDetail={() => {//On view detail button pressed.  Will navigate to details screen and pass the id of the product selected.
                        props.navigation.navigate("ProductDetails", { productId: itemData.item.id, productTitle: itemData.item.title })//props.navigation.navigate gives us access to the stack that we created in the shopNavigator

                    }}
                    onAddToCart={() => {
                        dispatch(cartActions.addToCart(itemData.item));

                    }}
                />
            )}
        //need image, title, price, and event handler?  this might be handled in productItem.js
        />
    )

};

const styles = StyleSheet.create({

});
//NavigationOption updates need to be rebuilt on the emulator to work.  Reload to see updates.
ProductsOverviewScreen.navigationOptions = navData => {
    return {
        headerTitle: 'All Products',
        headerLeft: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='Cart' iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
                onPress={() => {
                    navData.navigation.toggleDrawer();
                }}
            />
        </HeaderButtons>,

        headerRight: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='Cart' iconName={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
                onPress={() => {
                    navData.navigation.navigate('Cart')
                }}
            />

        </HeaderButtons>
    }
}

export default ProductsOverviewScreen;
