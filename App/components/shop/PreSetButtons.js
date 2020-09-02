import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';

const PreSetButton = props => {
    return (
        <TouchableOpacity  onPress={props.onPress}>
            <View style={styles.button}>
                <Text style={styles.text}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )

};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#BBB5AD',
        //paddingVertical: 1,
        borderRadius: 5,
        paddingHorizontal: 20,
        elevation: 2,
        color: 'green',
        marginHorizontal: 10,


    },
    text: {
        color: 'black',
        //fontFamily: 'open-sans',
        fontSize: 20,

    },
});

export default PreSetButton;