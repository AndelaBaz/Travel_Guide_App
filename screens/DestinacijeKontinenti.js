import React, { useState } from "react";
import { StyleSheet, Text, View, Button} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import ListaDestinacije from "../components/ListaDestinacije";
import PrikazDestinacija from "../components/PrikazDestinacija";

import { KONTINENTI, DESTINACIJE } from "../data/test-podaci";


const DestinacijeKontineti = (props) => {
    const kontID = props.navigation.getParam('idKontinent');
    const odabraniKont = KONTINENTI.find( kont => kont.id === kontID);

    const destinacijePrikaz = DESTINACIJE.filter(
        (destinacija) => destinacija.idKontinenti.indexOf(kontID) >= 0
      );

      return (
        <ListaDestinacije listaPodaci={destinacijePrikaz} navigation={props.navigation} />
      );

}

DestinacijeKontineti.navigationOptions = (navigationData) => {
    const kontID = navigationData.navigation.getParam('idKontinent')
    const odabraniKont = KONTINENTI.find( kont => kont.id === kontID)
    return {
        headerTitle: odabraniKont.naziv
    }
}

const stil = StyleSheet.create({
    ekran: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default DestinacijeKontineti;