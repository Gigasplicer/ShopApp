import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, ScrollView, Image, Alert, ImageBackground } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import Product from '../../models/products';
import Colors from '../../constants/colors';
import * as cartActions from '../../store/actions/cart';
import PreSetButtons from '../../components/shop/PreSetButtons'
import NumberSlider from '../../components/UI/NumberSlider';

const ProductDetailScreen = props => {
    console.log('test')
    const [toggle, setToggle] = useState(false);
    const [showDetails, setShowDetails] = useState(false);
    const productId = props.navigation.getParam('productId');  //props.navigation is accessable from any screen that is navigated to through the stack navigator.  This is an best way to pass data.
    const dispatch = useDispatch();
    //useSelector acts on a state.  useSelector(state => state.(named value set in rootreducer).(named value set in reducers folder))
    const selectedProduct = useSelector(state => state.products.availableProducts.find(prod => prod.id === productId))

    return (
        //wont be super long.. use scrollview
        <ScrollView>
            <View>
            <ImageBackground style={styles.image} source={{ uri: selectedProduct.imageUrl }}>
            <Text style={styles.description}>{selectedProduct.description}</Text>
            </ImageBackground>

            </View>
            <View style={styles.actionButtons}>

            </View>
            
            <View style={styles.slimButton}>
                <Button color={Colors.primary}
                    title={showDetails ? "Pre-set Configurations" : "Advanced Settings"}
                    onPress={() => {
                        setShowDetails(prevState => !prevState)
                    }} />
            </View>


            {productId === 'p1' && showDetails === false && (
                <View style={styles.preset}>

                    <PreSetButtons title='Doc Review' onPress={() => Alert.alert('Lights Updated for Documentation Review', '', [{ text: 'Thanks', style: 'cancel' }])} />
                    <PreSetButtons title='Theater Mode' onPress={() => {
                        Alert.alert('Lights Updated for Theater Mode', '', [{ text: 'Thanks', style: 'cancel' }])
                        console.log(productId)
                    }} />
                </View>

            )}

            {productId != 'p1' && showDetails === false && (
                <View style={styles.preset}>

                    {/* <PreSetButtons title='Mood Lighting' onPress={() => Alert.alert('Lights Updated for Documentation Review', '', [{ text: 'Thanks', style: 'cancel' }])} /> */}
                    <PreSetButtons title={toggle ? "Turn Lights On" : "Turn Lights Off"} onPress={() => {

                        {
                            toggle && Alert.alert('Turning Lights On', '', [{ text: 'Thanks', style: 'cancel' }])
                        }
                        {
                            toggle === false && Alert.alert('Turning Lights Off', '', [{ text: 'Thanks', style: 'cancel' }])
                        }
                        setToggle(prevState => !prevState)
                        console.log(productId)
                    }} />
                </View>

            )}


            {showDetails && productId != 'p1' && (
                <View style={styles.rows}>
                    <View style={styles.cols}>
                            <Text>1 </Text>
                            <NumberSlider
                                trap={productId}
                            >
                            </NumberSlider>
                        </View>
                        <View style={styles.cols}>
                            <Text>2 </Text>
                            <NumberSlider
                                trap={productId}
                            >
                            </NumberSlider>
                        </View>
                </View>
            )}


            {showDetails && productId === 'p1' && (
                <View >
                    <View style={styles.rows}>
                        <View style={styles.cols}>
                            <Text>1   </Text>
                            <NumberSlider
                                trap={productId}
                            >
                            </NumberSlider>
                        </View>

                        <View style={styles.cols}>
                            <Text>2   </Text>
                            <NumberSlider
                                trap={productId}
                            >
                            </NumberSlider>
                        </View>
                        <View style={styles.cols}>
                            <Text>3   </Text>
                            <NumberSlider
                                trap={productId}
                            >
                            </NumberSlider>
                        </View>
                        <View style={styles.cols}>
                            <Text>4   </Text>
                            <NumberSlider
                                trap={productId}
                            >
                            </NumberSlider>
                        </View>
                        <View style={styles.cols}>
                            <Text>5   </Text>
                            <NumberSlider
                                trap={productId}
                            >
                            </NumberSlider>
                        </View>
                    </View>

                    <View style={styles.rows}>
                    <View style={styles.cols}>
                            <Text>6   </Text>
                            <NumberSlider
                                trap={productId}
                            >
                            </NumberSlider>
                        </View>
                        <View style={styles.cols}>
                            <Text>7   </Text>
                            <NumberSlider
                                trap={productId}
                            >
                            </NumberSlider>
                        </View>
                        <View style={styles.cols}>
                            <Text>8   </Text>
                            <NumberSlider
                                trap={productId}
                            >
                            </NumberSlider>
                        </View>
                        <View style={styles.cols}>
                            <Text>9   </Text>
                            <NumberSlider
                                trap={productId}
                            >
                            </NumberSlider>
                        </View>
                        <View style={styles.cols}>
                            <Text>10 </Text>
                            <NumberSlider
                                trap={productId}
                            >
                            </NumberSlider>
                        </View>
                    </View>
                </View >
            )}

        </ScrollView >
    );
};

ProductDetailScreen.navigationOptions = navData => {
    return {
        headerTitle: navData.navigation.getParam('productTitle')
    };
};

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300,
    },
    price: {
        fontSize: 20,
        color: '#888',
        textAlign: 'center',
        marginVertical: 20,
    },
    description: {
        fontSize: 14,
        textAlign: 'center',
        marginHorizontal: 20,

    },
    actionButtons: {
        alignItems: 'center',
        marginVertical: 10,

    },
    preset: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        alignItems: 'center'
    },
    rows: {
        flexDirection: 'column',
    },
    cols: {
        flexDirection: 'row'
    },
    slimButton: {
        marginHorizontal: 100,
        borderRadius: 10,
    },



});

export default ProductDetailScreen;
