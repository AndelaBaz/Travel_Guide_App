import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from "react-native";


const PrikazDestinacija = (props) => {
    return (
        <View style={stil.okvir}>
            <TouchableOpacity onPress={props.odabir}>
                <View>
                <ImageBackground source={ {uri: props.slika}} style={stil.pozadina}>
                    <Text style={stil.ime}>{props.naziv} ( {props.cijena} kn )</Text>
                </ImageBackground>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const stil = StyleSheet.create({
    okvir: {
        height: 250,
        width: '100%',
        backgroundColor: 'pink',
        borderColor:'#ffcccc',
        borderWidth: 5,
        marginVertical: 5
    },
    redak: {
        flexDirection: 'row'
    },
    ime: {
        fontWeight:'bold',
        fontSize: 20
    },
    pozadina: {
        width: "100%",
        height:"100%"
    }
});

export default PrikazDestinacija;
