import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, Platform } from 'react-native';
import { useSelector } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../../components/UI/HeaderButton';
import Colors from '../../constants/colors'


const EditProductScreen = props => {

    const ProductId = props.navigation.getParam('productId');
    const editedProduct = useSelector(state =>
        state.products.userProducts.find(prod => prod.id === ProductId)
    )

    const [title, setTitle] = useState(editedProduct ? editedProduct.title : '');
    const [imageUrl, setImageUrl] = useState(editedProduct ? editedProduct.imageUrl : '');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState(editedProduct ? editedProduct.description : '');





    return (
        <ScrollView>
            <View style={styles.form}>
                <View style={styles.formControl}>
                    <Text style={styles.label}> Title </Text>
                    <TextInput style={styles.input} value={title}
                        onChangeText={text => setTitle(text)} />
                </View>
                <View style={styles.formControl}>
                    <Text style={styles.label}> ImageUrl </Text>
                    <TextInput style={styles.input} value={imageUrl}
                        onChangeText={text => setImageUrl(text)} />
                </View>

                {editedProduct ? null : (
                    <View style={styles.formControl}>
                    <Text style={styles.label}> Price </Text>
                    <TextInput style={styles.input} value={price}
                        onChangeText={text => setPrice(text)} />
                </View>
                )}
                <View style={styles.formControl}>
                    <Text style={styles.label}> Description </Text>
                    <TextInput style={styles.input} value={description}
                        onChangeText={text => setDescription(text)} />
                </View>
            </View>


        </ScrollView>

    )

};

EditProductScreen.navigationOptions = navData =>{
    return{
        headerTitle: navData.navigation.getParam('productId' ? 'Edit Product' : 'Add Product'),
        headerRight: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title='Save' iconName={Platform.OS === 'android' ? 'md-checkmark' : 'ios-checkmark'}
            onPress={() => {}}
        />
    </HeaderButtons>,

    }
}
const styles = StyleSheet.create({
    form: {
        width: '100%',
    },
    label: {
        fontFamily: 'open-sans-bold',
        marginVertical: 8
    },
    input: {
        paddingHorizontal: 2,
        
    },
    formControl: {
        margin: 20, 
        paddingVertical: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    },
});

export default EditProductScreen;
