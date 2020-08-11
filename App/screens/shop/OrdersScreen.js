import React from 'react';
import { Text, FlatList, Platform} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../../components/UI/HeaderButton';

const OrdersScreen = props => {
    const orders = useSelecctor(state => state.orders.orders) //values stored in redux  ie models/orders.js

    return <FlatList data={orders} keyExtractor={item => item.id} renderItem={itemData => <Text>{itemData.item.totalAmount}</Text>} />
};

OrdersScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Poopy',
        headerLeft: ( <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='Cart' iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
                onPress={() => {
                    navData.navigation.toggleDrawer();
                }}
            />
        </HeaderButtons>
        )}
        
}

export default OrdersScreen;
