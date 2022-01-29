import React, {useState} from "react";
import { View, SafeAreaView, Image, Animated } from "react-native";
import styles from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

 function Header() {

  const navigation = useNavigation();
  
  const singIn = () => {
    navigation.navigate("login");
  };

  
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => singIn()}>
        <Image
          source={require("../../assets/images/neki-logo-oficial-branco.png")}
          style={styles.logo}
        />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => singIn()}>
        <Icon style={styles.Icon} name="sign-out" size={30} color="#fff" />
        </TouchableOpacity>
         
      </View>
    </SafeAreaView>
  );
}
export default Header;