import React, { useContext } from "react";
import { View, Image, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import MenuButton from "../../components/MenuButton/MenuButton";
import { AuthContext } from "../../context/authContext";

export default function DrawerContainer(props) {
  const { navigation } = props;
  const { logout } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../../../assets/logo.png")}
          style={styles.logo}
        />
      </View>

      <View style={styles.menuContainer}>
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

      <View style={styles.logoutContainer}>
        <MenuButton
          title="LOGOUT"
          source={require("../../../assets/icons/logout.png")}
          onPress={() => {
            logout();
            navigation.closeDrawer();
            navigation.navigate("Login");
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 30,
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 50,
  },
  logo: {
    width: 120,
    height: 120,
    marginTop: 40,
  },
  menuContainer: {
    flex: 1,
    justifyContent: "center",
    paddingBottom: 50,
    marginBottom: 0,
    marginTop: 60,
    marginLeft: 20,
    width: "100%",
  },
  logoutContainer: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 20,
    marginLeft: 20,
  },
});
