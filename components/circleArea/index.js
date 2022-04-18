import React from "react";
import Style from "./index.scss";
import Svg, { Path } from "react-native-svg";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  SafeAreaView,
  Button,
  Image,
  Pressable,
} from "react-native";
export default function circleArea() {

  return (
    <SafeAreaView>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}  style={Style.circleArea}>
        <View style={Style.container}>
          <View style={[Style.square,Style.squareOne]} />
          <View style={[Style.square,Style.squareTwo]} />
          <View style={[Style.square,Style.squareTree]} />
          <View style={[Style.square,Style.squareFour]} />
          <View style={[Style.square,Style.squareFive]} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
