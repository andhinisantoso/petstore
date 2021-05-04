import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, View, Image, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import COLORS from '../../const/colors';
import { PrimaryButton, SecondaryButton } from '../components/Button';
import Home from './Home';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
// redux
import { edit } from '../../redux/logSlice';

const EditProfile = ({ navigation }) => {
  const userData = useSelector((state) => state.log)
  const dispatch = useDispatch()

  const [name, setName] = useState(userData.username)
  const [email, setEmail] = useState(userData.email)
  const [phone, setPhone] = useState(userData.phone)
  const [password, setPassword] = useState(userData.password)

  const _edit = () => {
    dispatch(edit({
      id: userData.userId,
      name: name,
      email: email,
      phone: phone,
      password: password
    }))
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={style.header}>
        <MaterialIcons name="arrow-back-ios" size={28} onPress={() => navigation.goBack()} />
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Edit Profile</Text>
      </View>
      <View style={style.textContainer}>
        <View>
          <View style={style.formLogin}>

            <View style={style.cartCard}>
              <View style={{
                height: 60,
                flex: 1,
                marginTop: 30,
              }}>
                <Text style={{ paddingLeft: 10, flex: 2, fontSize: 16, color: '#8C8C8C' }}>Upload Photo</Text>
              </View>
              <View>
                <View style={{ alignItems: 'center' }}>
                  <View style={style.actionBtn}>
                    <TouchableOpacity activeOpacity={0.8} onPress={Home} style={style.icon}>
                      <Feather name="upload" color={COLORS.primary} size={28} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>

            <View style={style.inputContainer}>
              <TextInput
                style={{ paddingLeft: 10, flex: 2, fontSize: 16, color: COLORS.grey }}
                value={name}
                onChangeText={setName}
                placeholder="Full Name"
              />
            </View>
            <View style={style.inputContainer}>
              <TextInput
                style={{ paddingLeft: 10, flex: 2, fontSize: 16 }}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
              />
            </View>
            <View style={style.inputContainer}>
              <TextInput
                style={{ paddingLeft: 10, flex: 2, fontSize: 16 }}
                placeholder="Telephone"
                value={phone}
                onChangeText={setPhone}
              />
            </View>
            <View style={style.inputContainer}>
              <TextInput
                style={{ paddingLeft: 10, flex: 2, fontSize: 16 }}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
              />
            </View>
            <PrimaryButton
              onPress={() => _edit()}
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
    paddingTop: 50,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  textContainer: {
    flex: 1,
    paddingHorizontal: 50,
    justifyContent: 'space-between',
    paddingBottom: 40,
    paddingTop: 30,
  },
  formLogin: {
    marginTop: 40,
  },
  inputContainer: {
    height: 60,
    width: 290,
    marginBottom: 30,
    borderRadius: 15,
    backgroundColor: COLORS.white,
    shadowRadius: 5,
    shadowColor: COLORS.grey,
    elevation: 13,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cartCard: {
    height: 60,
    width: 290,
    marginHorizontal: 10,
    marginBottom: 30,
    marginLeft: -1,
    borderRadius: 15,
    elevation: 13,
    backgroundColor: COLORS.white,
    shadowRadius: 5,
    shadowColor: COLORS.grey,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  actionBtn: {
    width: 100,
    height: 60,
    backgroundColor: COLORS.secondary,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
  icon: {
    marginRight: 10,
    marginTop: 10,
    marginLeft: 7
  },
});

export default EditProfile;
