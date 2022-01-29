import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput,
  TouchableWithoutFeedback

} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import styles from "./styles"

function home() {
  

return(
  <KeyboardAvoidingView style={styles.container}>
  <TouchableWithoutFeedback>
    
    <Text> oi </Text>


  </TouchableWithoutFeedback>
  </KeyboardAvoidingView>
)
};

export default home;