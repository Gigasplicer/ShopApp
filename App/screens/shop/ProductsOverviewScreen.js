import React, {useEffect} from 'react';
import { View, Text, StyleSheet, FlatList, Platform, Button, Slider } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import ProductItem from '../../components/shop/ProductItem';
import * as cartActions from '../../store/actions/cart';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../../components/UI/HeaderButton';
import Colors from '../../constants/colors'
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as productsActions from '../../store/actions/products';
import NumberSlider from '../../components/UI/NumberSlider';


const ProductsOverviewScreen = props => { //this is referred to as a component.  You can have more than one per js file, but data delt with inside is not immediately available outside of it.
    const products = useSelector(state => state.products.availableProducts); //grab products and store them in products. state is arbituary. ie. how useSelector works
    const dispatch = useDispatch();

useEffect(() => {
    dispatch(productsActions.fetchProducts())
}, [dispatch])

    const selectItemHandler = (id, title) => {
        props.navigation.navigate("ProductDetails", { productId: id, productTitle: title })
        //On view detail button pressed.  Will navigate to details screen and pass the id of the product selected.
        //props.navigation.navigate gives us access to the stack that we created in the shopNavigato
    }

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
                    onSelect={() => {
                        selectItemHandler(itemData.item.id, itemData.item.title)
                    }}

                >
                    <Text style={styles.font}>Off</Text>
                    <View style={styles.bgslider}>
                    <TouchableOpacity onPress={()=>{console.log(itemData.item.lightBars[0])}}>
                        <Text>    0</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{console.log(itemData.item.id), console.log('2')}}>
                        <Text> 2 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{console.log(itemData.item.id), console.log('4')}}>
                        <Text> 4 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{console.log(itemData.item.id), console.log('6')}}>
                        <Text> 6 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{console.log(itemData.item.id), console.log('8')}}>
                        <Text> 8 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{console.log(itemData.item.id), console.log('10')}}>
                        <Text> 10    </Text>
                    </TouchableOpacity>
                    </View>

                    <Text style={styles.font}>On</Text>
                    <Button color={Colors.primary2} title="Advanced" onPress={() => {
                        selectItemHandler(itemData.item.id, itemData.item.title)
                    }} />
                    {/* <Button color={Colors.primary} title="To Cart" onPress={() => {
                        dispatch(cartActions.addToCart(itemData.item))
                    }} /> */}

                </ProductItem>
            )}
        //need image, title, price, and event handler?  this might be handled in productItem.js
        />
    )

};

const styles = StyleSheet.create({
slid:{
    width: 150,
},
font:{
    fontSize: 6,
},
button:{
    borderRadius: 50,
},
bgslider:{
    borderRadius: 10,
    width:200,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(0,0,0,.1)'
},
});
//NavigationOption updates need to be rebuilt on the emulator to work.  Reload to see updates.
ProductsOverviewScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Superior Exhibits and Design',
        headerLeft: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='Cart' iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
                onPress={() => {
                    navData.navigation.toggleDrawer();
                }}
            />
        </HeaderButtons>,

        // headerRight: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
        //     <Item title='Cart' iconName={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
        //         onPress={() => {
        //             navData.navigation.navigate('Cart')
        //         }}
        //     />

        // </HeaderButtons>
    }
}

export default ProductsOverviewScreen;
