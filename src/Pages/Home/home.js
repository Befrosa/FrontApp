import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput,
  TouchableWithoutFeedback,
  Image,
  Modal,
  TextInputComponent,
  StatusBar,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../../Header/header';
import {Picker} from '@react-native-picker/picker';
import styles from './styles';
// import skillService from '../../Service/skillService';
// import userService from '../../Service/userService';

function home() {
  const [visivel, setVisivel] = useState(false);
  const [skill, setSkill] = useState([
    'Selecione sua skill',
    'Pontuabilidade',
    'Resultados',
    'Sociavel',
  ]);
  const [skillSelecionada, setSkillSelecionada] = useState([]);

  // const [lista, setLista] = useState([]);
  // const [skills, setSkills] = useState({
  //   name: '',
  //   version: '',
  //   description: '',
  //   image_url: '',
  // });

  // useEffect(()=> {
  //   ListarSkills();
  // },[])

  // const ListarSkills = async () => {
  //   getSkill()
  //     .then((res) => {setLista(res), console.log(res)})
  //     .catch((error) => console.log(error));
  // };

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#253b4c"
        translucent={false}
        networkActivityIndicatorVisible={true}
      />
      <Header />
      <KeyboardAvoidingView style={styles.container}>
        <TouchableOpacity onPress={() => setVisivel(true)}>
          <Icon
            style={styles.new}
            name="plus-square"
            size={35}
            color="#ffffff"
          />
        </TouchableOpacity>

        

         <View style={styles.box}>
          <Image
            source={require('../../../assets/images/relogio.jpeg')}
            style={styles.imageSkill}
          />
          <Text style={styles.text}>Pontualidade</Text>
          <Text style={styles.textL}>9</Text>
          <TouchableOpacity>
            <Icon
              style={styles.delete}
              name="trash"
              size={25}
              color="#ffffff"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.box}>
          <Image
            source={require('../../../assets/images/resultados.jpg')}
            style={styles.imageSkill}
          />
          <Text style={styles.text}>  Resultados</Text>
          <Text style={styles.textL}> 8</Text>
          
          <TouchableOpacity>
            <Icon
              style={styles.delete}
              name="trash"
              size={25}
              color="#ffffff"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.box}>
          <Image
            source={require('../../../assets/images/Sociavel.png')}
            style={styles.imageSkill}
          />
          <Text style={styles.text}> Sociavel</Text>
          <Text style={styles.textL}>10</Text>
          <TouchableOpacity>
            <Icon
              style={styles.delete}
              name="trash"
              size={25}
              color="#ffffff"
            />
          </TouchableOpacity>
        </View> 

        <Modal animationType="fade" transparent={true} visible={visivel}>
          <View style={styles.modal}>
            <Picker
              style={styles.picker}
              selectedValue={skillSelecionada}
              onValueChange={itemValue => setSkillSelecionada(itemValue)}>
              {skill.map((sk, index) => {
                return <Picker.Item label={sk} value={sk} key={index} />;
              })}
            </Picker>

            <TextInput
              style={styles.login}
              type="numeric"
              name="numeric"
              keyboardType="numeric"
              id="numeric"
              placeholder="Inseira seu Level"
              placeholderTextColor="#ffffff"
              autoCorrect={false}
              required="required"
            />
            <TouchableOpacity onPress={() => setVisivel(false)}>
              <Text style={styles.salvar}> Salvar </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setVisivel(false)}>
              <Text style={styles.fechar}> Fechar </Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </KeyboardAvoidingView>
    </>
  );
}

export default home;
