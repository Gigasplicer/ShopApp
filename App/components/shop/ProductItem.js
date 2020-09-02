import React from 'react';
import { Text, View, ImageBackground, StyleSheet, Button, TouchableNativeFeedback, Platform, TouchableOpacity } from 'react-native'



const ProductItem = props => {

    let TouchMe = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {

        TouchMe = TouchableNativeFeedback;
    }

    //can name the props.x whatever, but when I reference <ProductItem/> I need to set x= to something.
    //need to set up a style for network images to set width and height.
    return (

        <View style={styles.product}>
            <View style={styles.touchame}>
                <TouchMe onPress={props.onSelect} useForeground>
                        <View style={styles.container}>
                            <ImageBackground style={styles.image} source={{ uri: props.image}}>
                            <View style={styles.details}>
                            <Text style={styles.title}> {props.title} Lights: {props.price} </Text>
                        </View>
                                </ImageBackground>
                        </View>
                        
                </TouchMe>

                        <View style={styles.action}>
                            {props.children}
                        </View>

            </View>
        </View>
    );

};

const styles = StyleSheet.create({
    //This describes the individual items that will be listed.
    product: {
        borderRadius: 10,
        elevation: 5,
        shadowColor: 'black', //apple
        shadowOffset: { width: 0, height: 2 }, //apple
        shadowRadius: 8, //apple
        backgroundColor: 'white',
        height: 250,
        margin: 20,


    },
    touchame: {
        borderRadius: 10,
        overflow: 'hidden',
        width: '100%',
        height: '100%'
    },
    container: {
        width: '100%',
        height: '80%',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%'
    },
    title: {
        color: 'white',
        backgroundColor:'rgba(0,0,0,.25)',
        borderRadius: 5,
        fontSize: 18,
        marginVertical: 4,
        fontFamily: 'open-sans-bold'
    },
    price: {
        fontSize: 14,
        backgroundColor:'rgba(0,0,0,.25)',
        color: 'white',
        fontFamily: 'open-sans-bold'
    },
    action: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '10%',
        paddingHorizontal: 20,
        paddingTop: 20,

    },
    details: {
        alignItems: 'center',
        height: '5%',
        padding: 5,
    }
});

export default ProductItem;