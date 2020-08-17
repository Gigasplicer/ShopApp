import React, { useState } from 'react';
import CartItem from './CartItem';
import { Text, View, Image, StyleSheet, Button, TouchableNativeFeedback, Platform, TouchableOpacity } from 'react-native'
import Colors from '../../constants/colors';
import { Ionicons } from '@expo/vector-icons';


const OrderItem = props => {

    const [showDetails, setShowDetails] = useState(false);

    return (
        <View style={styles.orderItem}>
            <View style={styles.summary}>
                <Text style={styles.totalAmount}>${props.amount.toFixed(2)}</Text>
                <Text style={styles.date}>{props.date}</Text>
            </View>
            <Button
                color={Colors.primary}
                title={showDetails ? "Hide Details" : "Show Details"}
                onPress={() => {
                    setShowDetails(prevState => !prevState)
                }} />
            {showDetails && (
                <View style={styles.details}>
                    {props.items.map(cartItem => ( //cartItem needs to match
                        <CartItem
                            key={cartItem.productId}
                            quantity={cartItem.quantity}
                            title={cartItem.productTitle}
                            sum={cartItem.sum}
                        />
                    ))}
                </View>
            )}
        </View>
    )
};

const styles = StyleSheet.create({
    orderItem: {
        borderRadius: 10,
        elevation: 5,
        shadowColor: 'black', //apple
        shadowOffset: { width: 0, height: 2 }, //apple
        shadowRadius: 8, //apple
        backgroundColor: 'white',
        margin: 20,
        padding: 10,
        alignItems: 'center'
    },
    summary: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginBottom: 15,
    },
    totalAmount: {
        fontFamily: 'open-sans-bold',
        fontSize: 14,
    },
    date: {
        fontFamily: 'open-sans-bold',
        fontSize: 10,
        color: '#888',
    },
    details:{
        width: '100%',
        justifyContent: 'space-between'
    },
});

export default OrderItem;