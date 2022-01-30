import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TextInput,
  Image,
  StatusBar
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/AntDesign';
import CheckBox from '@react-native-community/checkbox';
import styles from './styles';

function login() {
  const navigation = useNavigation();
  
  const singIn = () => {
    if( email == "Bernardo@neki.com" && senha == "neki"){
      navigation.navigate('home');
    } else {
      alert("Usuario ou senha incorretos")
    }

    };
  const cadastro = () => {
    navigation.navigate('cadastro');
  };

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");


  const [hidePass, setHidePass] = useState(true);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <>
    <StatusBar
            barStyle="dark-content"
            hidden={false}
            backgroundColor="#253b4c"
            translucent={false}
            networkActivityIndicatorVisible={true}
          />
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <TouchableWithoutFeedback>
        <View>
          <Image
            style={styles.neki}
            source={require('../../../assets/images/logo-branco.png')}/>
          <View>
            <TextInput
              style={styles.login}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              name="email"
              id="email"
              placeholder="   Digite seu e-mail"
              placeholderTextColor="#ffffff"
              autoCorrect={false}
              value={email}
            />
            <Icon style={styles.user} name="user" size={25} color="#ffffff" />
          </View>
          <View>
            <TextInput
              style={styles.login}
              onChangeText={setSenha}
              type="senha"
              name="senha"
              id="senha"
              secureTextEntry={hidePass}
              placeholder="   Digite sua senha"
              placeholderTextColor="#ffffff"
              value={senha}
              autoCorrect={false}
            />
            <Icon style={styles.user} name="lock" size={25} color="#ffffff" />

            <TouchableOpacity onPress={() => setHidePass(!hidePass)}>
              {hidePass ? (
                <Icon style={styles.eye} name="eye" size={25} color="#ffffff" />
              ) : (
                <Icon
                  style={styles.eye}
                  name="eyeo"
                  size={25}
                  color="#ffffff"
                />
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.checkbox}>
            <CheckBox
              style={styles.box}
              disabled={false}
              value={toggleCheckBox}
              onValueChange={newValue => setToggleCheckBox(newValue)}
            />
            <Text style={styles.checkT}>Gravar Senha</Text>
          </View>

          <TouchableOpacity onPress={singIn}>
            <Text style={styles.botao}>Entrar</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={cadastro}>
            <Text style={styles.cadastro}> Cadastre-se </Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    </>
  );
}

export default login;
