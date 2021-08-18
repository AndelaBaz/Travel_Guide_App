import React from "react";
import { StyleSheet, Text, View, FlatList, Image, ImageBackground, TouchableOpacity } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import NavButton from "../components/NavButton"

import { KONTINENTI } from "../data/test-podaci";
import GridKartica from "../components/GridKartica";

const Kontinenti = (props) => {
    const renderGrid = (podaci) => {
      return (
        <GridKartica
          naziv={podaci.item.naziv}
          slika={podaci.item.urlslike}
          odabir={() => {
            props.navigation.navigate("SveDestinacije", {
              idKontinent: podaci.item.id,
            });
          }}
        />
      );
    };
  

    return (
        <View style={{backgroundColor: 'white'}}>
            <View>
            <ImageBackground style={{width:'100%', height:370}}
                source={{
                uri: "https://i.pinimg.com/564x/1b/37/a1/1b37a158fcdd57f7e2e67b850eaa8ced.jpg",
                }}>
            
            <Text style={stil.userGreet}>Pozdrav!</Text>
            <Text style={stil.userText}>Odaberite kontinent na koji želite putovati!</Text>
            </ImageBackground>
            </View>
            <FlatList horizontal={true}  data={KONTINENTI} renderItem={renderGrid} />
        </View>
    );
};

Kontinenti.navigationOptions = (navData) => {
  return {
    headerTitle: "Svi kontinenti",
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
    gridElement: {
        flex: 1,
        marginTop: 40,
        marginLeft: 15 ,
        height: 300,
        width: 200,
        borderColor:'black',
        borderWidth: 1
    },
    userGreet: {
        fontSize: 38,
        fontWeight: 'bold',
        color: 'black',
        textAlign: "left",
        paddingTop:280
      },
      userText : {
        fontSize: 16,
        fontWeight: 'normal',
        color: 'black',
        textAlign: "left"
      }
});

export default Kontinenti;