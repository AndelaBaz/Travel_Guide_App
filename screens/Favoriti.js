import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { DESTINACIJE } from "../data/test-podaci";
import ListaDestinacije from "../components/ListaDestinacije";


const Favoriti = (props) => {
    const favDestinacije = DESTINACIJE.filter((d) => d.id === "d1" || d.id === "d6");
    return (
        <ListaDestinacije listaPodaci={favDestinacije} navigation={props.navigation} />
    );
}

Favoriti.navigationOptions = {
    headerTitle: 'Omiljene destinacije'
}

const stil = StyleSheet.create({
    ekran: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default Favoriti;