import React, { useState } from "react";
import { useSelector } from "react-redux";
import { StyleSheet, Text, View } from "react-native";
import ListaDestinacije from "../components/ListaDestinacije";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import NavButton from "../components/NavButton";


const Favoriti = (props) => {
    //const favDestinacije = DESTINACIJE.filter((d) => d.id === "d1" || d.id === "d6");
    const favDestinacije = useSelector (store => store.gradovi.favoritGradovi);
    if (favDestinacije.length === 0 || !favDestinacije)  {
      return (
        <View style={stil.ekran}>
          <Text>Nemate omiljenih destinacija!</Text>
          <Text>Istražite popis gradova i dodajte svoje favorite.</Text>
        </View>
      )
    }
    return (
        <ListaDestinacije listaPodaci={favDestinacije} navigation={props.navigation} />
    );
}

Favoriti.navigationOptions =  (navData) => {
    return {
      headerTitle: "Omiljena jela",
      headerLeft: () => {
        return (
          <HeaderButtons HeaderButtonComponent={NavButton}>
            <Item
              title="Izbornik"
              iconName="menu"
              onPress={() => {
                navData.navigation.toggleDrawer();
              }}
            />
          </HeaderButtons>
        );
      },
    };
  };

const stil = StyleSheet.create({
    ekran: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default Favoriti;