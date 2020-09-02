import React from 'react';
import { View, Text, Button, Alert, StyleSheet, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../constants/colors'

const NumberSlider = props => {

    return (
        <View style={styles.visual}>
            <Text style={styles.font}>Off                                                                                                                    On</Text>
            <View style={styles.bgslider}>
                <TouchableOpacity onPress={() => { console.log(props.trap) }}>
                    <Text style={styles.border}>  0  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {console.log('2') }}>
                    <Text style={styles.border}>  2  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {console.log('4') }}>
                    <Text style={styles.border}>  4  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { console.log('6') }}>
                    <Text style={styles.border}>  6  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {console.log('8') }}>
                    <Text style={styles.border}>  8  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {console.log('10') }}>
                    <Text style={styles.border}> 10 </Text>
                </TouchableOpacity>
            </View>

            
        </View>
    )
}
const styles = StyleSheet.create({
    slid: {
        width: 150,
    },
    font: {
        fontSize: 6,
    },
    button: {
        borderRadius: 50,
    },
    border:{
        borderRadius: 1,
        borderWidth: 1,
        backgroundColor: '#F0EAE2'

    },
    bgslider: {
        borderRadius: 10,
        width: 200,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(0,0,0,.1)',
        paddingVertical: 5,
        paddingHorizontal: 5,
        
    },
    visual:{
        paddingVertical: 2,
    },

})
export default NumberSlider