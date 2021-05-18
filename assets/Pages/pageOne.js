import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  SafeAreaView,
  TouchableHighlight,
} from "react-native";
import axAsli from "../01.png";

export default function pageOne(props) {
  const presshand = () => {
    props.navigation.navigate("pageTwo");
  };
  return (
    <View style={styles.container}>
      <View style={styles.viewOne}>
        <Image source={axAsli} style={styles.axAsli} style={styles.imageOne} />
      </View>
      <View style={styles.viewTwo}>
        <Text style={styles.textOne}>Find your new</Text>
        <Text style={styles.textTwo}>best freind</Text>
        <Text style={styles.textThree}>Loving animals ready for adoption</Text>
        <TouchableOpacity style={styles.touchB} onPress={presshand}>
          <Text style={styles.textTouch}>Adopt a pet</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  axAsli: {
    width: 300,
    height: 300,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    backgroundColor: "#593FA2",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  viewOne: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  viewTwo: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  imageOne: {
    marginTop: 100,
  },
  textOne: {
    marginTop: 75,
    color: "#fff",
    fontSize: 38,
    fontWeight: "bold",
  },
  textTwo: {
    color: "#FACF1B",
    fontSize: 38,
    fontWeight: "bold",
  },
  textThree: {
    marginTop: 18,
    color: "#fff",
    fontSize: 15,
  },
  touchB: {
    marginTop: 30,
    backgroundColor: "#FACF1B",
    width: 150,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    borderWidth: 3,
    borderColor: "#FACF1B",
  },
  textTouch: {
    color: "#313131",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
