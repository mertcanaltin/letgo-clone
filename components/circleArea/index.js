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
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={Style.circleArea}
      >
        <View style={Style.container}>
          <View style={[Style.square, Style.squareOne]}>
            <Text style={Style.squareText}>Araba</Text>
          </View>
          <View style={[Style.square, Style.squareTwo]}>
            <Text style={Style.squareText}>Elektronik</Text>
          </View>
          <View style={[Style.square, Style.squareTree]}>
            <Text style={Style.squareText}>Telefon</Text>
          </View>
          <View style={[Style.square, Style.squareFour]}>
            <Text style={Style.squareText}>Tablet</Text>
          </View>
          <View style={[Style.square, Style.squareFive]}>
            <Text style={Style.squareText}>M1</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
