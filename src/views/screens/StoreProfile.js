import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, View, Image, ScrollView } from 'react-native';
import COLORS from '../../const/colors';
import BottomNavigator from '../navigation/BottomNavigation';
import HOST from '../../const/host';
import { set } from '../../redux/navigationSlice'
import { useDispatch } from 'react-redux';

const InfoPetStore = ({ navigation }) => {
  const [nameStore, setNameStore] = useState('')
  const [emailStore, setEmailStore] = useState('')
  const [phoneStore, setPhoneStore] = useState('')
  const [addressStore, setAddressStore] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(set({ value: 'Store' }))

    async function fetchData() {
      const response = await fetch(`${HOST}/api/users/1`)
      const result = await response.json()
      setNameStore(result.name)
      setEmailStore(result.email)
      setPhoneStore(result.phone)
      setAddressStore(result.address)
    }

    fetchData()
  }, [])

  return (
    <ScrollView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View
        style={{
          paddingHorizontal: 130,
          justifyContent: 'space-between',
          marginBottom: 10,
          marginTop: 80
        }}
      >
        <Image source={require('../../assets/categories/home.png')} style={{
          width: 150,
          height: 150,
        }} />
      </View>
      <View style={style.textContainer}>
        <View>
          <Text style={{ marginTop: 15, fontSize: 18, color: COLORS.grey }}>
            Full Name
            </Text>
          <Text style={style.textInput}>
            {nameStore}
          </Text>
        </View>
        <View>
          <Text style={{ marginTop: 15, fontSize: 18, color: COLORS.grey }}>
            Email
            </Text>
          <Text style={style.textInput}>
            {emailStore}
          </Text>
        </View>
        <View>
          <Text style={{ marginTop: 15, fontSize: 18, color: COLORS.grey }}>
            Telephone
            </Text>
          <Text style={style.textInput}>
            {phoneStore}
          </Text>
        </View>
        <View>
          <Text style={{ marginTop: 15, fontSize: 18, color: COLORS.grey }}>
            Address
            </Text>
          <Text style={style.textInput}>
            {addressStore}
          </Text>
        </View>
      </View>
      <BottomNavigator />
    </ScrollView>
  );
};

const style = StyleSheet.create({
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
  card: {
    height: 220,
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop: 10,
    borderRadius: 15,
    elevation: 13,
    backgroundColor: COLORS.white,
    shadowRadius: 5,
    shadowColor: COLORS.grey
  },
});

export default InfoPetStore;
