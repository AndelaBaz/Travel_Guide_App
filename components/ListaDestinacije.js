import React from "react";
import { useSelector } from "react-redux";
import PrikazDestinacija from "./PrikazDestinacija";
import { StyleSheet, Text, View, FlatList } from "react-native";
import gradoviReducer from "../store/reducers/gradovi";

const ListaDestinacije = (props) => {
  const fav = useSelector(state => state.gradovi.favoritGradovi)
  const prikaziDestinaciju = (destinacija) => {
    const favStatus = fav.some(g => g.id === destinacija.item.id)
    return (
        <PrikazDestinacija 
        naziv={destinacija.item.naziv}
        cijena={destinacija.item.cijena}
        slika={destinacija.item.urlSlike}
        odabir={() => {
            props.navigation.navigate({
                routeName: 'Detalji',
                params: {
                    destinacijaId: destinacija.item.id,
                    naziv: destinacija.item.naziv,
                    favStatus: favStatus
                }
            })
        }}/>
    );
  };
  return (
    <View style={stil.ekran}>
      <FlatList
        data={props.listaPodaci}
        renderItem={prikaziDestinaciju}
        style={{ width: "90%" }}
      />
    </View>
  );
};

const stil = StyleSheet.create({
  ekran: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ListaDestinacije;
