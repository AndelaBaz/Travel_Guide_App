import React, { useState } from "react";
import { useSelector } from "react-redux";
import { StyleSheet, Text, View, Button} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import ListaDestinacije from "../components/ListaDestinacije";
import PrikazDestinacija from "../components/PrikazDestinacija";

import { KONTINENTI } from "../data/test-podaci";


const DestinacijeKontineti = (props) => {
    const kontID = props.navigation.getParam('idKontinent');
    const odabraniKont = KONTINENTI.find( kont => kont.id === kontID);

    const dostupniGradovi = useSelector ( state => state.gradovi.filterGradovi)
    const destinacijePrikaz = dostupniGradovi.filter(
        (destinacija) => destinacija.idKontinenti.indexOf(kontID) >= 0
      );
      if (destinacijePrikaz.lenght === 0 || !destinacijePrikaz){
          return <View style={stil.ekran}>
              <Text>Nema gradova za prikaz, provjerite aktivne filtere!</Text>
          </View>
      }

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