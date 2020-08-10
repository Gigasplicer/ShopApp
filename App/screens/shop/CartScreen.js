import React from 'react';
import { View, Text, StyleSheet, FlatList, Button, ColorPropType } from 'react-native';
import { useSelector } from 'react-redux'
import cart from '../../store/reducers/cart';
import Colors from '../../constants/colors';
import CartItem from '../../components/shop/CartItem'


const CartScreen = props => {
    const cartTotalAmount = useSelector(state => state.cart.totalAmount);
    const cartItems = useSelector(state => {
        const transformedCartItems = [];
        for (const key in state.cart.items) {
            transformedCartItems.push({
                productId: key,
                productTitle: state.cart.items[key].productTitle,
                productPrice: state.cart.items[key].productPrice,
                quantity: state.cart.items[key].quantity,
                sum: state.cart.items[key].sum,
            })
        }
        return transformedCartItems
    })

    return (
        <View style={styles.cartStyles}>
            <View style={styles.summary}>
                <Text style={styles.summaryText}>Total: <Text style={styles.amount}>${cartTotalAmount.toFixed(2)}</Text></Text>
                <Button color={Colors.primary} title="order Now" disabled={cartItems.length === 0} />
            </View>

            <View>
                <FlatList data={cartItems}
                    keyExtractor={item => item.productId}
                    renderItem={itemData =>
                        <CartItem
                            title={itemData.item.productTitle}
                            price={itemData.item.productPrice}
                            quantity={itemData.item.quantity}
                            onRemove={() => { }}
                        />
                    }
                />
            </View>

        </View>
    )
};
const styles = StyleSheet.create({
    cartStyles: {
        margin: 20,

    },
    summary: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        elevation: 5,
        margin: 20,
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
    },
    summaryText: {
        fontFamily: 'open-sans-bold',
        fontSize: 18,
    },
    amount: {

    },
});

export default CartScreen;
