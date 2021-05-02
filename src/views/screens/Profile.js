import React from 'react';
import {Text, StyleSheet, View, Image, SafeAreaView, TextInput} from 'react-native';
import COLORS from '../../const/colors';
import {PrimaryButton, SecondaryButton} from '../components/Button';
import Home from './Home';
import { MaterialIcons } from '@expo/vector-icons';

const Profile = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <View style={style.header}>
        <MaterialIcons name="arrow-back-ios" size={28} onPress={Home} />
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Profile</Text>
      </View>
      <View 
        style={{
            paddingHorizontal: 130,
            justifyContent: 'space-between',
            marginBottom: 10,
            marginTop: 10
        }}
      >
        <Image source={require('../../assets/categories/home.png')} style={{
            width: 150,
            height: 150,}}/>
      </View>
      <View style={style.textContainer}>
        <View>
            <Text style={{marginTop: 15, fontSize: 18, color: COLORS.grey}}>
                Full Name
            </Text>
            <Text style={style.textInput}>
                Dadu
            </Text>
        </View>
        <View>
            <Text style={{marginTop: 15, fontSize: 18, color: COLORS.grey}}>
                Email
            </Text>
            <Text style={style.textInput}>
                dadu08@gmail.com
            </Text>
        </View>
        <View>
            <Text style={{marginTop: 15, fontSize: 18, color: COLORS.grey}}>
                Telephone
            </Text>
            <Text style={style.textInput}>
                0808080808
            </Text>
        </View>
        <View>
            <Text style={{marginTop: 15, fontSize: 18, color: COLORS.grey}}>
                Password
            </Text>
            <Text style={style.textInput}>
                ********
            </Text>
        </View>
        <View style={{paddingTop: 30}}>
          <View style={{marginBottom: 20}}>
            <PrimaryButton
                onPress={() => navigation.navigate('Home')}
                title="Edit"
            />
          </View>
          <View>
            <SecondaryButton
              onPress={() => navigation.navigate('Home')}
              title="Log Out"
            />
          </View>
        </View>
    </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    paddingTop: 50,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  textContainer: {
    paddingHorizontal: 40,
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  textInput: {
    height: 40,
    borderColor: COLORS.dark,
    borderBottomWidth: 4,
    marginTop: 10,
    fontSize: 24,
    fontWeight: 'bold'
    },
});

export default Profile;
