import React from 'react';
import { Text, View, Image, StyleSheet, Button, TouchableNativeFeedback, Platform, TouchableOpacity } from 'react-native'
import Colors from '../../constants/colors';
import { Ionicons } from '@expo/vector-icons'


const CartItem = props => {
    return (
        <View style={styles.cart}>
            <Text style={styles.itemData}>
                <Text style={styles.quantity}>QTY: {props.quantity}</Text><Text style={styles.title}>  {props.title}</Text>
            </Text>
            <View style={styles.itemData}>
                <Text style={styles.price}>${props.sum}</Text>
                {props.deletable && (// makes touchable a true false statement that is always true.  meaning you can hide the data if you dont want it visible.
                    <TouchableNativeFeedback onPress={props.onRemove} style={styles.deleteButton}>
                        <Ionicons name='md-trash'
                            size={23}
                            color='red'
                        />
                    </TouchableNativeFeedback>
                )}
            </View>

        </View>
    )
};

const styles = StyleSheet.create({
    cart: {
        width: '90%',
        padding: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
    },
    itemData: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    quantity: {
        fontFamily: 'open-sans',
        color: '#888',
        fontSize: 14,
    },
    title: {
        fontSize: 12,
        width: '50%',
        fontFamily: 'open-sans-bold',
    },

    deleteButton: {
        marginLeft: 20,

    },
    price: {
        justifyContent: 'flex-end',
        fontSize: 18,
        fontFamily: 'open-sans-bold',
    },
})



export default CartItem;