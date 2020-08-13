import React from 'react';
import { View, Text, FlatList, Platform } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../../components/UI/HeaderButton';

const OrdersScreen = props => {
    const myOrders = useSelector(state => state.orders.orders); //values stored in redux  ie models/orders.js
    //console.log('testies')
    return (
    <View>
        <FlatList data={myOrders} keyExtractor={item => item.id} renderItem={itemData => <Text>{itemData.item.totalAmount}</Text>}/>

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
