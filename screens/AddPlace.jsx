import { StyleSheet, Text, View } from "react-native";
import React from "react";
import PlaceForm from "../components/Places/PlaceForm";
import { insertPlace } from "../util/database";

const AddPlace = ({ navigation }) => {
  const createPlaceHandler = async (place) => {
    console.log("============ This is what I am sending into the database ============");
    console.log(place);
    await insertPlace(place);
    navigation.navigate("AllPlaces"/* , {
      place: place,
    } */);
  };
  return <PlaceForm onCreatePlace={createPlaceHandler} />;
};

export default AddPlace;

const styles = StyleSheet.create({});
