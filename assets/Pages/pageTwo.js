import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import profile from "../04.png";
import ax2 from "../02.png";
import ax3 from "../03.png";

const axpet = [
  { key: 1, index: ax2 },
  { key: 2, index: ax3 },
  { key: 3, index: ax2 },
  { key: 4, index: ax3 },
  { key: 5, index: ax2 },
  { key: 6, index: ax3 },
];
export default function pageTwo(props) {
  const pressback = () => {
    props.navigation.navigate("pageOne");
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView style={{ flex: 1 }}>
        <View style={styles.containerTwo}>
          {/* -------------------------- */}
          <View style={styles.view1}>
            <Ionicons
              name="chevron-back"
              size={30}
              color="#313131"
              onPress={pressback}
            />
            <View style={{ flex: 1, marginLeft: 10 }}>
              <Text style={styles.text1}>Marvin Mckinney</Text>
              <Text style={styles.text2}>New York, NY</Text>
            </View>
            <Image style={{ marginRight: 15 }} source={profile} />
          </View>
          {/* -------------------------- */}
          <View style={styles.view2}>
            <TextInput
              placeholder="Search for pets"
              style={styles.textInput}
            ></TextInput>
            <Ionicons
              name="md-search"
              size={20}
              color="black"
              style={{ position: "absolute", marginLeft: 55 }}
            />
            <TouchableOpacity style={styles.touchOne}>
              <Ionicons
                name="filter"
                size={22}
                color="black"
                backgroundColor="#FFD01E"
                style={{ margin: 10 }}
              />
            </TouchableOpacity>
          </View>

          {/* -------------------------- */}
          <View style={styles.view3}>
            <Text style={{ fontSize: 20, fontWeight: "bold", marginLeft: 20 }}>
              Search by pet type
            </Text>
            <ScrollView horizontal>
              <TouchableOpacity style={styles.listStyle}>
                <Text style={styles.textListStyle}>All</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.listStyle}>
                <Text style={styles.textListStyle}>Dogs</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.listStyle}>
                <Text style={styles.textListStyle}>Cats</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.listStyle}>
                <Text style={styles.textListStyle}>Hamsters</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.listStyle}>
                <Text style={styles.textListStyle}>Rabbit</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
          {/* -------------------------- */}
          <View style={styles.view4}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                marginLeft: 20,
              }}
            >
              Ready to adopt
            </Text>
            <FlatList
              horizontal
              data={axpet}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.listStyleAx}>
                  <Image style={styles.axListStyle} source={item.index} />
                </TouchableOpacity>
              )}
            ></FlatList>
          </View>

          {/* -------------------------- */}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerTwo: {
    backgroundColor: "#fff",
    flex: 1,
  },
  view1: {
    marginTop: 30,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    marginLeft: 5,
  },
  text1: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#313131",
  },
  text2: {
    fontSize: 16,
    color: "#313131",
  },
  view2: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    flexDirection: "row",
  },
  textInput: {
    backgroundColor: "#EAECEF",
    height: 43,
    width: 280,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#cdcfd3",
    marginLeft: 45,
    paddingLeft: 35,
  },
  touchOne: {
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFD01E",
    width: 40,
    height: 40,
    borderRadius: 20,
    marginBottom: 3,
  },
  view3: {
    height: 90,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  listStyle: {
    backgroundColor: "#FFF687",
    margin: 8,
    borderRadius: 30,
    width: 95,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  textListStyle: {
    fontSize: 15,
    fontWeight: "bold",
    padding: 10,
  },
  view4: {
    flex: 3,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
  },
  listStyleAx: {
    padding: 10,
  },
  axListStyle: {
    borderRadius: 15,
    width: 150,
    height: 290,
  },
});

{
  /* <Ionicons name="md-search" size={20} color="black" /> */
  /* <Image
            source={{
              uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/input_username.png',
            }} */
}
