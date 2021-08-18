import React from "react";
import { StyleSheet, Text, View, Button, ScrollView, ImageBackground, Image } from "react-native";
import NavButton from "../components/NavButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { DESTINACIJE } from "../data/test-podaci";


const ElementListe = (props) => {
  return (
    <View style={stil.element}>
      <Text style={stil.tekst}>{props.children}</Text> 
    </View>
  )
}


const DestinacijeDetalji = (props) => {
    const idDestinacije = props.navigation.getParam('destinacijaId')
    const odabrani = DESTINACIJE.find(d => d.id === idDestinacije)
    return (
      <ScrollView style={{backgroundColor: 'white', flex: 1}}>
        <ImageBackground style={{width:'100%', height:370}}
                source={{uri:odabrani.urlSlike}} 
                style={stil.image}
                imageStyle={{borderBottomRightRadius: 30}}>
        </ImageBackground>
        <Text style={stil.Tagline}>Otkrijte {odabrani.naziv} </Text>
        <Text style={stil.naslov}>O mjestu</Text>
        <Text style={stil.tekst}>{odabrani.opis}</Text>
        <Text style={stil.naslov}>Zanimljivosti</Text>
      {odabrani.zanimljivosti.map((z) => (
        <ElementListe  key={z}>{z}</ElementListe>
      ))}
      <Text style={stil.naslov}>Povijest</Text>
      <Text style={stil.tekst}>{odabrani.povijest}</Text>
      <Text style={stil.naslov}>Cijena</Text>
      <Text style={stil.tekst}>Cijena avionske karte je : {odabrani.cijena} kn</Text>
        
    </ScrollView>
    );
}


DestinacijeDetalji.navigationOptions = (navigationData) => {
    const idDestinacije = navigationData.navigation.getParam('destinacijaId')
    const odabrani = DESTINACIJE.find(d => d.id === idDestinacije)
    return {
      headerTitle: odabrani.naziv,
      headerRight: () => {
          return (
            <HeaderButtons HeaderButtonComponent={NavButton}>
            <Item
              title="Favorit"
              iconName="heart"
              onPress={() => {
                console.log("Recept označen kao favorit");
              }}
            />
          </HeaderButtons>
          )
      }
    }
  }

const stil = StyleSheet.create({
    ekran: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
      height: 300,
      width: '100%',
      justifyContent: 'flex-end'
    },
    Tagline: {
      color: 'black',
      fontSize: 16,
      fontWeight: 'bold',
      paddingHorizontal: 14,
      marginVertical: 6
    },
    naslov: {
      padding:14, 
      fontSize: 20, 
      fontWeight: 'bold'
    },
    tekst : {
      paddingHorizontal:14, 
      fontSize:14, 
      fontWeight:'normal',
      opacity:0.3,
      justifyContent:'flex-start', 
      textAlign:'justify', 
      lineHeight:26
    }
});

export default DestinacijeDetalji;