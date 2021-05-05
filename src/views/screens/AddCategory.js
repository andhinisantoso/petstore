import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, View, Image, SafeAreaView, TextInput } from 'react-native';
import { TouchableOpacity, TouchableHighlight } from 'react-native';
import COLORS from '../../const/colors';
import { PrimaryButton } from '../components/Button';
import Home from './Home';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { useDispatch } from 'react-redux';
// redux
import { add } from '../../redux/categorySlice';

const AddCategory = ({ navigation }) => {
  const [name, setName] = useState('')
  const [image, setImage] = useState(null)
  const [imageName, setImageName] = useState('')
  const dispatch = useDispatch()

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

  const _add = () => {
    if (image) {
      dispatch(add({
        imageUri: image,
        imageName: imageName[0],
        name: name
      }))
    }
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={style.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back-ios" size={28} />
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Add category</Text>
        </TouchableOpacity>
      </View>
      <View style={style.textContainer}>
        <View>
          <View style={style.formLogin}>
            <View style={style.inputContainer}>
              <View style={{ flexDirection: 'row' }}>
                <TextInput
                  style={{ paddingLeft: 10, flex: 2, fontSize: 16, color: COLORS.grey }}
                  value={imageName[0]}
                  placeholder="Upload Icon"
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
                placeholder="Category Name"
              />
            </View>
            <View style={{ marginTop: 300, marginBottom: 87 }}>
              <PrimaryButton
                onPress={() => _add()}
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


export default AddCategory;