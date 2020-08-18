import React, { useState, useEffect, useCallback, useReducer } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, Platform, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../../components/UI/HeaderButton';
import Colors from '../../constants/colors'
import * as productsActions from '../../store/actions/products'

const REDUCER_UPDATE = 'UPDATE';

const formReducer = (state, action) =>{
if(action.type === REDUCER_UPDATE) {

}

};
//outside of main function does not rebuild.  Only runs once, and doesn't have access to props.. but inside has access tho outside.
const EditProductScreen = props => {

    const ProdId = props.navigation.getParam('productId');
    const editedProduct = useSelector(state =>
        state.products.userProducts.find(prod => prod.id === ProdId)
    )
    const dispatch = useDispatch();

        useReducer(formReducer, {inputValues:{}, inputValidities: {}, formIsValid: false })

    const [title, setTitle] = useState(editedProduct ? editedProduct.title : '');
    const [imageUrl, setImageUrl] = useState(editedProduct ? editedProduct.imageUrl : '');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState(editedProduct ? editedProduct.description : '');
    const [titleIsValid, setTitleIsValid] = useState(title.length);


    const submitHandler = useCallback(() => {//ensures that the function isnt recreated every time the component rerenders... that would cause an infinite loop.
        if (!titleIsValid){
            Alert.alert('wrong Input', 'try again', [{text: 'Okay'}]);
            return;
        }
        if (editedProduct) {
            dispatch(productsActions.updateProduct(ProdId, title, description, imageUrl));
        } else {
            dispatch(productsActions.createProduct(title, description, imageUrl, +price))
        }
        props.navigation.goBack();
    }, [dispatch, ProdId, title, description, price, imageUrl, titleIsValid]);//this has no dependancies, so it will never rerun/infinite loop

    useEffect(() => {
        props.navigation.setParams({ submit: submitHandler })  //'submit' is now a parameter that we can retrieve in our navigation options
    }, [submitHandler])

    const titleChangeHandler = text => {
        if (text.trim().length > 0) {
            setTitleIsValid(true)
        } else {
            setTitleIsValid(false);
        }
        setTitle(text)
    };

    return (
        <ScrollView>
            <View style={styles.form}>

                <View style={styles.formControl}>
                    <Text style={styles.label}> Title </Text>
                    <TextInput style={styles.input} value={title}
                        onChangeText={titleChangeHandler}
                        keyboardType='default'
                        returnKeyType='next'
                    />
                    {!titleIsValid && <Text>Please Set Valid Title</Text>}
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
                            onChangeText={text => setPrice(text)}
                            keyboardType='number-pad'
                        />

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

EditProductScreen.navigationOptions = navData => {
    const submitFn = navData.navigation.getParam('submit');
    return {
        headerTitle: navData.navigation.getParam('productId' ? 'Edit Product' : 'Add Product'),
        headerRight: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='Save' iconName={Platform.OS === 'android' ? 'md-checkmark' : 'ios-checkmark'}
                onPress={submitFn}
            />
        </HeaderButtons>,

    }
}
const styles = StyleSheet.create({
    form: {
        width: '100%',
    },
    valid: {
        margin: 20,

    },
    label: {
        fontFamily: 'open-sans-bold',
        marginVertical: 8,

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
