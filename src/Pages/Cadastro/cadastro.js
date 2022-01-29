import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput,
  TouchableWithoutFeedback,
  Image
} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/AntDesign';

function cadastro({navigation}) {

    async function validacao(){
        if (senhaA == senhaB){
        alert("Cadastro realizado com sucesso")
        navigation.navigate("login");
        } else 
        alert("Insira senhas iguais!")
    };

    const [hidePass, setHidePass] = useState(true);
    const [hidePassB, setHidePassB] = useState(true);

    const [email, setEmail] = useState("")
    const [senhaA, setSenhaA] = useState("")
    const [senhaB, setSenhaB] = useState("")

  return (
    <KeyboardAvoidingView style={styles.container}>
      <TouchableWithoutFeedback>
          <View>
          <Image
            style={styles.neki}
            source={require('../../../assets/images/logo-branco.png')}
          />

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
              onChangeText={setSenhaA}
              type="senha"
              name="senha"
              id="senha"
              secureTextEntry={hidePass}
              placeholder="   Digite sua senha"
              placeholderTextColor="#ffffff"
              value={senhaA}
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


            <View>
        <TextInput
              style={styles.login}
              onChangeText={setSenhaB}
              type="senha"
              name="senha"
              id="senha"
              secureTextEntry={hidePassB}
              placeholder="   Confirme sua senha"
              placeholderTextColor="#ffffff"
              value={senhaB}
              autoCorrect={false}
            />
            <Icon style={styles.user} name="reload1" size={25} color="#ffffff" />
            <TouchableOpacity onPress={() => setHidePassB(!hidePassB)}>
              {hidePassB ? (
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

            <TouchableOpacity onPress={validacao}>
            <Text style={styles.botao}>Salvar</Text>
          </TouchableOpacity>

        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

export default cadastro;
