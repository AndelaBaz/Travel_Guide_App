import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
 
import Kontinenti from "../screens/Kontinenti";
import DestinacijeKontineti from "../screens/DestinacijeKontinenti";
import DestinacijeDetalji from "../screens/DestinacijeDetalji";
import Favoriti from "../screens/Favoriti";
import FilteriEkran from "../screens/FilteriEkran";


const stackOpcije = {
    headerStyle: {
      backgroundColor: "#ffcccc"
    },
    headerTintColor: "white",
  };


const Navigacija = createStackNavigator ({
    SviKontinenti : {
        screen: Kontinenti,
        navigationOptions : {
            headerTitle: "Putovanja na 7 kontinenata",
        }
    },
    SveDestinacije : {
        screen : DestinacijeKontineti,
    },
    Detalji : DestinacijeDetalji
},
{
    defaultNavigationOptions : {
        headerStyle : {
            backgroundColor: '#ffcccc'
        },
        headerTintColor: 'white'
    }
});

const FavoritiNavigacija = createStackNavigator(
    {
      Favoriti: Favoriti,
      Detalji: DestinacijeDetalji,
    },
    {
      defaultNavigationOptions: stackOpcije,
    }
  );

const tabEkrani = {
    Početna : {
        screen: Navigacija,
        navigationOptions : {
            tabBarIcon: (tabInfo) => {
                return ( <Ionicons name='home-outline' size={24} color={tabInfo.tintColor} />)
            }
        }
    },
    Favoriti : {
        screen: FavoritiNavigacija,
        navigationOptions : {
            tabBarIcon: (tabInfo) => {
                return ( <Ionicons name='heart-outline' size={24} color={tabInfo.tintColor} />)
            }
        }
    },
}



const TabNavigacija = Platform.OS === 'android'
? createMaterialBottomTabNavigator(tabEkrani, {
        shifting: true,
        activeColor: '#ffcccc', 
        barStyle : { backgroundColor: 'white' } 
})
: createBottomTabNavigator(tabEkrani, {
    
    tabBarOptions: {
        activeBackgroundColor: '#ffcccc',
        inactiveBackgroundColor: 'white',
        activeTintColor: 'white',
        inactiveTintColor: 'grey'
    }

});

	
const FilteriStack = createStackNavigator({
    Filteri: FilteriEkran,
  },
  {
    defaultNavigationOptions: stackOpcije,
  });

const AppNavigacija = createDrawerNavigator(
    {
        TabFavoriti: {
            screen: TabNavigacija,
            navigationOptions : {
                drawerLabel: "Destinacije"
            }
        },
        Filteri: {
            screen: FilteriStack,
            navigationOptions:{
                drawerLabel:"Filteri destinacija"
            }
        },
    },
    {
        contentOptions: {
            activeTintColor: "#ffcccc",
            labelStyle: {
              fontWeight : 'normal',
              fontSize: 25 
            }
          }
    }
  );

	
export default createAppContainer(AppNavigacija);