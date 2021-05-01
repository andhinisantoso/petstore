import React from 'react';
import {Text, StyleSheet, View, Image, SafeAreaView, TextInput} from 'react-native';
import { TouchableOpacity } from 'react-native';
import COLORS from '../../const/colors';
import {PrimaryButton} from '../components/Button';
import Home from './Home';
import { MaterialIcons } from '@expo/vector-icons';

const EditProfile = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <View style={style.header}>
        <MaterialIcons name="arrow-back-ios" size={28} onPress={Home} />
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Verification</Text>
      </View>
      <View style={style.textContainer}>
        <View>
          <View style={style.formLogin}>
            <View style={style.inputContainer}>
              <TextInput
                style={{paddingLeft: 10, flex: 2, fontSize: 16, color: COLORS.grey}}
                placeholder="Upload Photo"
              />
            </View>
            <View style={style.inputContainer}>
              <TextInput
                style={{paddingLeft: 10, flex: 2, fontSize: 16, color: COLORS.grey}}
                placeholder="Full Name"
              />
            </View>
            <View style={style.inputContainer}>
              <TextInput
                style={{paddingLeft: 10, flex: 2, fontSize: 16}}
                placeholder="Email"
              />
            </View>
            <View style={style.inputContainer}>
              <TextInput
                style={{paddingLeft: 10, flex: 2, fontSize: 16}}
                placeholder="Telephone"
              />
            </View>
            <View style={style.inputContainer}>
              <TextInput
                style={{paddingLeft: 10, flex: 2, fontSize: 16}}
                placeholder="Password"
              />
            </View>
            <PrimaryButton
              onPress={() => navigation.navigate('Home')}
              title="Save"
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  textContainer: {
    flex: 1,
    paddingHorizontal: 50,
    justifyContent: 'space-between',
    paddingBottom: 40,
    paddingTop: 10,
  },
  formLogin: {
    marginTop: 30,
  },
  inputContainer: {
    height: 50,
    width: 290,
    marginBottom: 20,
    borderRadius: 15,
    backgroundColor: COLORS.white,
    shadowRadius: 5,
    shadowColor: COLORS.grey,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default EditProfile;
