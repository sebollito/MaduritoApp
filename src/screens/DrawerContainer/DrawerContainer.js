import React from "react";
import { View, Image } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";
// import { StyleSheet } from 'react-native';
import MenuButton from "../../components/MenuButton/MenuButton";

export default function DrawerContainer(props) {
  const { navigation } = props;
  return (
    <View style={styles.content}>
      <View style={styles.container}>
        <MenuButton
          title="SCANNER"
          source={require("../../../assets/icons/search.png")}
          onPress={() => {
            navigation.navigate("Scanner");
            navigation.closeDrawer();
          }}
        />
        <MenuButton
          title="SCAN HISTORY"
          source={require("../../../assets/icons/history.png")}
          onPress={() => {
            navigation.navigate("ScanHistory");
            navigation.closeDrawer();
          }}
        />
        <MenuButton
          title="PROFILE"
          source={require("../../../assets/icons/profile.png")}
          onPress={() => {
            navigation.navigate("Profile");
            navigation.closeDrawer();
          }}
        />
        
      </View>

      <View style={styles.logoContainer}>
        <Image source={require("../../../assets/logo.png")} style={styles.logo} />
      </View>
    </View>
  );
}

DrawerContainer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }),
};