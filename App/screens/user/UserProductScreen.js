import React from 'react';
import { View, Text, StyleSheet, FlatList, Platform, Button, Alert } from 'react-native';

import ProductItem from '../../components/shop/ProductItem';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../../components/UI/HeaderButton';
import Colors from '../../constants/colors'
import * as productActions from '../../store/actions/products'

const UserProductScreen = props => {
    const userProducts = useSelector(state => state.products.userProducts)
    const dispatch = useDispatch();

    const editProductHandler = (id) => {
        props.navigation.navigate('EditProducts', { productId: id })

    }

    const deleteHandler = (id) => {
        Alert.alert('Are you sure?', 'Do you really want to delete this', [
            { text: 'No', style: 'default' },
            {
                text: 'Yes', style: 'destructive', onPress: () => {
                    dispatch(productActions.deleteProduct(id))
                }
            }
        ])
    }
    return (
        <FlatList
            data={userProducts}
            keyExtractor={item => item.id}
            renderItem={itemData => <ProductItem
                image={itemData.item.imageUrl}
                title={itemData.item.title}
                price={itemData.item.price}
                onSelect={() => { editProductHandler(itemData.item.id) }}
            //onViewDetail={() => { }}
            //onAddToCart={() => { }}

            >
                <Button color={Colors.primary} title="Edit" onPress={() => {
                    editProductHandler(itemData.item.id)
                }} />
                <Button color={Colors.primary}
                    title="Delete"
                    onPress={() => {
                        deleteHandler(itemData.item.id)
                    }} />

            </ProductItem>} />
    )

};

UserProductScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Your Products',
        headerLeft: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='Cart' iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
                onPress={() => {
                    navData.navigation.toggleDrawer();
                }}
            />
        </HeaderButtons>,
        headerRight: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='Add' iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
                onPress={() => {
                    navData.navigation.navigate('EditProducts')// don't pass anything.  no id, so a new item will be set
                }}
            />
        </HeaderButtons>,
    }
}

export default UserProductScreen;
