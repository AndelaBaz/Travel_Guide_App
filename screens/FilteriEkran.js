import React, { useState, useCallback, useEffect } from "react";
import { StyleSheet, Text, View, Switch, Platform } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import NavButton from "../components/NavButton"

const FilterSwitch = (props) => {
  return (
    <View style={stil.filterOkvir}>
      <Text>{props.naslov}</Text>
      <Switch
        trackColor={{ true: "#ffcccc", false: "white" }}
        thumbColor="#ffcccc"
        value={props.stanje}
        onValueChange={props.promjena}
      />
    </View>
  );
};

const Filteri = (props) => {

  const {navigation} = props; 

  const [sluzbeniJezik, postaviJezik] = useState(false)
  const [wifi, postaviWifi] = useState(false)
  const [sigurnost, postaviSigurnost] = useState(false)
  const [nightlife, postaviNightlife] = useState(false)

  const spremiFiltere = useCallback(() => {
    const odabraniFilteri = {
      sluzbeniJezik,
      wifi,
      sigurnost,
      nightlife,
    };
    console.log(odabraniFilteri);
  }, [sluzbeniJezik, wifi, sigurnost, nightlife ]);
  
  useEffect(() => {
    navigation.setParams({ spremi: spremiFiltere });
  }, [spremiFiltere]);
    return (
        <View style={stil.ekran}>
            <Text style={stil.naslov}>Dostpuni filteri</Text>
      <FilterSwitch
        naslov="Engleski jezik službeni"
        stanje={sluzbeniJezik}
        promjena={(nova) => postaviJezik(nova)}
      />
      <FilterSwitch
        naslov="Besplatan Wifi"
        stanje={wifi}
        promjena={(nova) => postaviWifi(nova)}
      />
      <FilterSwitch
        naslov="Siguran grad"
        stanje={sigurnost}
        promjena={(nova) => postaviSigurnost(nova)}
      />
      <FilterSwitch
        naslov="Bogat noćni život"
        stanje={nightlife}
        promjena={(nova) => postaviNightlife(nova)}
      />
        </View>
    );
}


Filteri.navigationOptions = (navData) => {
    return {
      headerTitle: "Filteri",
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
      headerRight: () => {
        return (
          <HeaderButtons HeaderButtonComponent={NavButton}>
            <Item
              title="Spremi"
              iconName="save"
              onPress={navData.navigation.getParam("spremi")}
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
    },
    naslov: {
      fontSize: 22,
      margin: 20,
      textAlign: "center",
      fontWeight:'bold'
    },
    filterOkvir: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: "80%",
      marginBottom: 20
    }
});

export default Filteri;