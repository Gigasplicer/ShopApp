import React from 'react';
import { View, Text, StyleSheet, Button, ScrollView, Image } from 'react-native';
import { useSelector } from 'react-redux'
import Product from '../../models/products';
import Colors from '../../constants/colors'

const ProductDetailScreen = props => {

    const productId = props.navigation.getParam('productId');  //props.navigation is accessable from any screen that is navigated to through the stack navigator.  This is an best way to pass data.

    //useSelector acts on a state.  useSelector(state => state.(named value set in rootreducer).(named vale set in reducers folder))
    const selectedProduct = useSelector(state => state.products.availableProducts.find(prod => prod.id === productId))

    return (
        //wont be super long.. use scrollview
        <ScrollView>
            <Image style={styles.image} source={{ uri: selectedProduct.imageUrl }} />
            <View style={styles.actionButtons}>
                <Button color={Colors.primary} title="Add to Cart" onPress={() => { }} />
            </View>
            <Text style={styles.price}>${selectedProduct.price.toFixed(2)}</Text>
            <Text style={styles.description}>{selectedProduct.description}</Text>
        </ScrollView>
    );
};

ProductDetailScreen.navigationOptions = navData => {
    return {
        headerTitle: navData.navigation.getParam('productTitle')
    };
};

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300,
    },
    price: {
        fontSize: 20,
        color: '#888',
        textAlign: 'center',
        marginVertical: 20,
    },
    description: {
        fontSize: 14,
        textAlign: 'center',
        marginHorizontal: 20,

    },
    actionButtons:{
        alignItems: 'center',
        marginVertical: 10,

    },



});

export default ProductDetailScreen;
