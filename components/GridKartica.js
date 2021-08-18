import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Image } from "react-native";


const GridKartica = (props) => {
  return (
    <TouchableOpacity
      style={stil.gridElement}
      onPress={props.odabir}
    >
      <View style={stil.okvir}>
      <ImageBackground source={{ uri: props.slika }} style={stil.pozSlika}>
        <Text numberOfLines={2} style={stil.naslov}>{props.naziv}</Text>
    </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

const stil = StyleSheet.create({
  gridElement: {
    flex: 1,
        marginTop: 40,
        marginLeft: 15 ,
        height: 300,
        width: 200,
        borderColor:'#ffcccc',
        borderWidth: 5
  },
  okvir:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  naslov:{
    fontFamily: 'quando',
    fontSize: 22,
     textAlign: 'right'
  },
  pozSlika: {
    width: "100%",
    height: "100%"
  },
});

export default GridKartica;
