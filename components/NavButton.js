import React from "react";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";
import MaterialIcons  from 'react-native-vector-icons/MaterialIcons'

const NavButton = (props) => {
    return (
        <HeaderButton {...props} IconComponent={Ionicons} iconSize={25} color={"white"} />
    )

}

export default NavButton; 