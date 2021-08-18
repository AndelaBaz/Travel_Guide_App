import React from "react";
import PrikazDestinacija from "./PrikazDestinacija";
import { StyleSheet, Text, View, FlatList } from "react-native";

const ListaDestinacije = (props) => {
  const prikaziDestinaciju = (destinacija) => {
    return (
        <PrikazDestinacija 
        naziv={destinacija.item.naziv}
        cijena={destinacija.item.cijena}
        slika={destinacija.item.urlSlike}
        odabir={() => {
            props.navigation.navigate({
                routeName: 'Detalji',
                params: {
                    destinacijaId: destinacija.item.id
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
