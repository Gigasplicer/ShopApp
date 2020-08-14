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
                <Text style={styles.title}>${props.sum}</Text>
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
        padding: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
    },
    itemData: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    quantity: {
        fontFamily: 'open-sans',
        color: '#888',
        fontSize: 16,
    },
    title: {
        fontSize: 16,
        fontFamily: 'open-sans-bold',
    },

    deleteButton: {
        marginLeft: 20,

    },
})



export default CartItem;