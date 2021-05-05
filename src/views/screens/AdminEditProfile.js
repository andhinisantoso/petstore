import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, View, Image, SafeAreaView, TextInput } from 'react-native';
import { TouchableOpacity, TouchableHighlight } from 'react-native';
import COLORS from '../../const/colors';
import { PrimaryButton } from '../components/Button';
import Home from './Home';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import * as ImagePicker from 'expo-image-picker';
import { edit, editWithPhoto } from '../../redux/logSlice';

const AdminEditProfile = ({ navigation }) => {
  const adminData = useSelector((state) => state.log)
  const dispatch = useDispatch()
  const [name, setName] = useState(adminData.username)
  const [email, setEmail] = useState(adminData.email)
  const [phone, setPhone] = useState(adminData.phone)
  const [address, setAddress] = useState(adminData.address)
  const [image, setImage] = useState(null)
  const [imageName, setImageName] = useState('')

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
      setImageName(result.uri.match(/[\w-]*.jpg/))
    }
  };

  const _edit = () => {
    if (image) {
      dispatch(editWithPhoto({
        imageUri: image,
        imageName: imageName[0],
        id: adminData.userId,
        name: name,
        email: email,
        phone: phone,
        address: address
      }))
    } else {
      dispatch(edit({
        id: adminData.userId,
        name: name,
        email: email,
        phone: phone,
        address: address
      }))
    }
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
            <View style={style.inputContainer}>
              <View style={{ flexDirection: 'row' }}>
                <TextInput
                  style={{ paddingLeft: 10, flex: 2, fontSize: 16, color: COLORS.grey }}
                  placeholder="Upload Photo"
                />
                <View style={{ backgroundColor: COLORS.secondary, width: 73, height: 50, justifyContent: 'center', alignItems: 'center', borderRadius: 15 }}>
                  <TouchableHighlight
                    underlayColor={COLORS.white}
                    activeOpacity={0.9}
                    onPress={() => pickImage()}
                  >
                    <AntDesign name="upload" size={26} color="black" />
                  </TouchableHighlight>
                </View>
              </View>
            </View>
            <View style={style.inputContainer}>
              <TextInput
                style={{ paddingLeft: 10, flex: 2, fontSize: 16, color: COLORS.grey }}
                value={name}
                onChangeText={setName}
                placeholder="Pet Store Name"
              />
            </View>
            <View style={style.inputContainer}>
              <TextInput
                style={{ paddingLeft: 10, flex: 2, fontSize: 16, color: COLORS.grey }}
                value={email}
                onChangeText={setEmail}
                placeholder="Email"
              />
            </View>
            <View style={style.inputContainer}>
              <TextInput
                style={{ paddingLeft: 10, flex: 2, fontSize: 16, color: COLORS.grey }}
                value={phone}
                onChangeText={setPhone}
                placeholder="Telephone"
              />
            </View>
            <View style={style.inputContainer}>
              <TextInput
                style={{ paddingLeft: 10, flex: 2, fontSize: 16, color: COLORS.grey }}
                value={address}
                onChangeText={setAddress}
                placeholder="Address"
              />

            </View>

            <View style={{ marginVertical: 60 }}>
              <PrimaryButton
                onPress={() => _edit()}
                title="Save"
              />
            </View>

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
    width: 324,
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


export default AdminEditProfile;