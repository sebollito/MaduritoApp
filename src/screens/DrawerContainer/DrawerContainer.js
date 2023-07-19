import React from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";
import MenuButton from "../../components/MenuButton/MenuButton";

export default function DrawerContainer(props) {
  const { navigation } = props;
  return (
    <View style={styles.content}>
      <View style={styles.container}>
      <MenuButton
          title="LOGIN"
          source={require("../../../assets/icons/home.png")}
          onPress={() => {
            navigation.navigate("Login");
            navigation.closeDrawer();
          }}
        />
        <MenuButton
          title="PROFILE"
          source={require("../../../assets/icons/home.png")}
          onPress={() => {
            navigation.navigate("Profile");
            navigation.closeDrawer();
          }}
        />
        <MenuButton
          title="SCANNER"
          source={require("../../../assets/icons/home.png")}
          onPress={() => {
            navigation.navigate("Scanner");
            navigation.closeDrawer();
          }}
        />
        <MenuButton
          title="SCAN HISTORY"
          source={require("../../../assets/icons/home.png")}
          onPress={() => {
            navigation.navigate("ScanHistory");
            navigation.closeDrawer();
          }}
        />
        <MenuButton
          title="EXPOCAMERA"
          source={require("../../../assets/icons/home.png")}
          onPress={() => {
            navigation.navigate("ExpoCamera");
            navigation.closeDrawer();
          }}
        />
        <MenuButton
          title="CAMERA"
          source={require("../../../assets/icons/home.png")}
          onPress={() => {
            navigation.navigate("Camera");
            navigation.closeDrawer();
          }}
        />
        <MenuButton
          title="HOME"
          source={require("../../../assets/icons/home.png")}
          onPress={() => {
            navigation.navigate("Home");
            navigation.closeDrawer();
          }}
        />
        <MenuButton
          title="CATEGORIES"
          source={require("../../../assets/icons/category.png")}
          onPress={() => {
            navigation.navigate("Categories");
            navigation.closeDrawer();
          }}
        />
        <MenuButton
          title="SEARCH"
          source={require("../../../assets/icons/search.png")}
          onPress={() => {
            navigation.navigate("Search");
            navigation.closeDrawer();
          }}
        />
      </View>
    </View>
  );
}

DrawerContainer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }),
};
