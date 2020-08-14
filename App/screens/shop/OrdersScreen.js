import React from 'react';
import { View, Text, FlatList, Platform } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../../components/UI/HeaderButton';
import OrderItem from '../../components/shop/OrderItem'
const OrdersScreen = props => {
    const myOrders = useSelector(state => state.orders.orders); //values stored in redux  ie models/orders.js
    //console.log('testies')
    return (
    <View>
        <FlatList 
        data={myOrders} 
        keyExtractor={item => item.id} 
        renderItem={itemData => 
        <OrderItem 
        amount={itemData.item.totalAmount} 
        date={itemData.item.readableDate}
        items={itemData.item.items}/>}/>

        </View>
    );
};

OrdersScreen.navigationOptions = navData => {
    return {
        headerTitle: 'All Products',
        headerLeft: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='Menu' iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
                onPress={() => {
                    navData.navigation.toggleDrawer();
                }}
            />
        </HeaderButtons>,
    };
};

export default OrdersScreen;
