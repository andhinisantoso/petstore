import React from 'react';
import { Text, StyleSheet, View, Image, SafeAreaView, TextInput } from 'react-native';
import COLORS from '../../const/colors';
import { PrimaryButton, SecondaryButton } from '../components/Button';
import Home from './Home';
import { MaterialIcons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
// reducer
import { logout } from '../../redux/logSlice';

const Profile = ({ navigation }) => {

  const dispatch = useDispatch()
  const userData = useSelector((state) => state.log)

  const _logout = () => {
    dispatch(logout())
    navigation.replace('SignIn')
  }

  const toEditScreen = () => {
    if (userData.userId == 1) {
      navigation.navigate('AdminEditProfile')
    } else {
      navigation.replace('EditProfile')
    }
  }

  return (
    <ScrollView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={style.header}>
        <MaterialIcons name="arrow-back-ios" size={28} onPress={() => navigation.goBack()} />
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Profile</Text>
      </View>
      <View
        style={{
          paddingHorizontal: 130,
          justifyContent: 'space-between',
          marginBottom: 10,
          marginTop: 10
        }}
      >
        <Image source={{ uri: userData.image }} style={{
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
            {userData.username}
          </Text>
        </View>
        <View>
          <Text style={{ marginTop: 15, fontSize: 18, color: COLORS.grey }}>
            Email
            </Text>
          <Text style={style.textInput}>
            {userData.email}
          </Text>
        </View>
        <View>
          <Text style={{ marginTop: 15, fontSize: 18, color: COLORS.grey }}>
            Telephone
            </Text>
          <Text style={style.textInput}>
            {userData.phone}
          </Text>
        </View>
        <View>
          <Text style={{ marginTop: 15, fontSize: 18, color: COLORS.grey }}>
            Password
            </Text>
          <Text style={style.textInput}>
            ********
            </Text>
        </View>
        <View style={{ paddingTop: 30 }}>
          <View style={{ marginBottom: 20 }}>
            <PrimaryButton
              onPress={toEditScreen}
              title="Edit"
            />
          </View>
          <View>
            <SecondaryButton
              onPress={_logout}
              title="Log Out"
            />
          </View>
        </View>
      </View>
    </ScrollView>
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
