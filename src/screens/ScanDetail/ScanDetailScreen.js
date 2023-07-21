import React, { useEffect, useState, useContext, useCallback } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { AuthContext } from "../../context/authContext";

const ScanDetailScreen = ({ route }) => {
  const { scanData } = route.params;
  const { fecha, id, id_fruta, id_usuario, imagen } = scanData;
  const { getToken } = useContext(AuthContext);

  const [fruitsData, setFruitsData] = useState([]);
  const [descripcionFruta, setDescripcionFruta] = useState("");
  const [datosNutricionales, setDatosNutricionales] = useState("");
  const [fruitNombre, setFruitNombre] = useState("");
  const [imageUrl, setImageUrl] = useState(null);

  const getAllFruits = useCallback(async () => {
    try {
      const token = await getToken();
      const response = await fetch(
        "http://cjoga.dyndns-server.com:5000/frutas",
        {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setFruitsData((currentData) => [...currentData, ...data]);
    } catch (error) {
      console.error("Error:", error.message);
    }
  }, [getToken]);

  useEffect(() => {
    getAllFruits();
  }, [getAllFruits]);

  useEffect(() => {
    const matchedFruit = fruitsData.find((fruit) => fruit.id === id_fruta);
    if (matchedFruit) {
      setDescripcionFruta(matchedFruit.descripcion);
      setDatosNutricionales(matchedFruit.datos_nutricionales);
      setFruitNombre(matchedFruit.nombre);
    }
  }, [fruitsData, id_fruta]);

  const getFruitImage = useCallback(async () => {
    try {
      const token = await getToken();
      const response = await fetch(
        `http://cjoga.dyndns-server.com:5000/escaneos/get_image/${id}`,
        {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const blob = await response.blob();
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result);
      };
      reader.readAsDataURL(blob);
    } catch (error) {
      console.error("Error:", error.message);
    }
  }, [id, getToken]);

  useEffect(() => {
    getFruitImage();
  }, [getFruitImage]);

  const parts = scanData.fecha.split("T");
  const datePart = parts[0];

  return (
    <View style={styles.container}>
      <Image
        className="img-fluid"
        source={{ uri: imageUrl }}
        style={styles.image}
      />
      <Text style={styles.label}>Nombre Fruta:</Text>
      <Text style={styles.value}>{fruitNombre}</Text>
      <Text style={styles.label}>Fecha Escaneo:</Text>
      <Text style={styles.value}>{datePart}</Text>
      <Text style={styles.label}>Ripeness Estimation:</Text>
      <Text style={styles.value}>TBD</Text>
      <Text style={styles.label}>Days to Consume Estimation:</Text>
      <Text style={styles.value}>TBD</Text>
      <Text style={styles.label}>Datos Nutricionales:</Text>
      <Text style={styles.value}>{datosNutricionales}</Text>
      <Text style={styles.label}>Descripción Fruta:</Text>
      <Text style={styles.value}>{descripcionFruta}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#ffffff",
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  value: {
    fontSize: 16,
  },
});

export default ScanDetailScreen;
