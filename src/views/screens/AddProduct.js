import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, View, Image, SafeAreaView, TextInput } from 'react-native';
import { TouchableOpacity, TouchableHighlight } from 'react-native';
import COLORS from '../../const/colors';
import { PrimaryButton } from '../components/Button';
import Home from './Home';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { Picker } from '@react-native-picker/picker';
import { ScrollView } from 'react-native-gesture-handler';
import * as ImagePicker from 'expo-image-picker';
// redux
import { add } from '../../redux/itemSlice';

const AddProduct = ({ navigation }) => {
  const [image, setImage] = useState(null)
  const [imageName, setImageName] = useState('')
  const [name, setName] = useState('')
  const [stock, setStock] = useState('0')
  const [detail, setDetail] = useState('')
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [price, setPrice] = useState('0')
  const [description, setDescription] = useState('')
  const dispatch = useDispatch()
  const listCategory = useSelector((state) => state.category.listCategory)

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
        name: name,
        stok: parseInt(stock),
        detail: detail,
        category_id: selectedCategory,
        price: parseInt(price),
        description: description
      }))
    }
  }

  return (
    <ScrollView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={style.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} >
          <MaterialIcons name="arrow-back-ios" size={28} />
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Add Product</Text>
        </TouchableOpacity>
      </View>
      <View style={style.textContainer}>
        <View>
          <View style={style.formLogin}>
            <View style={style.inputContainer}>
              <View style={{ flexDirection: 'row' }}>
                <TextInput
                  editable={false}
                  style={{ paddingLeft: 10, flex: 2, fontSize: 16, color: COLORS.grey }}
                  placeholder="Upload Icon"
                  value={imageName[0]}
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
              <View style={{ flexDirection: 'row' }}>
                <TextInput
                  style={{ paddingLeft: 10, flex: 2, fontSize: 16, color: COLORS.grey }}
                  value={name}
                  onChangeText={setName}
                  placeholder="Name product"
                />
                <View style={{ backgroundColor: COLORS.white, width: 73, height: 50, justifyContent: 'center', alignItems: 'center', borderRadius: 15 }}>
                  <TouchableHighlight
                    underlayColor={COLORS.white}
                    activeOpacity={0.9}
                    onPress={() => { }}
                  >
                    <AntDesign name="caretup" size={15} color="black" />
                  </TouchableHighlight>
                  <TouchableHighlight
                    underlayColor={COLORS.white}
                    activeOpacity={0.9}
                    onPress={() => { }}
                  >
                    <AntDesign name="caretdown" size={15} color="black" />
                  </TouchableHighlight>
                </View>
              </View>
            </View>
            <View style={style.inputContainer}>
              <View style={{ flexDirection: 'row' }}>
                <TextInput
                  style={{ paddingLeft: 10, flex: 2, fontSize: 16, color: COLORS.grey }}
                  keyboardType={'numeric'}
                  value={stock}
                  onChangeText={setStock}
                  placeholder="Stock"
                />
                <View style={{ backgroundColor: COLORS.white, width: 73, height: 50, justifyContent: 'center', alignItems: 'center', borderRadius: 15 }}>
                  <TouchableHighlight
                    underlayColor={COLORS.white}
                    activeOpacity={0.9}
                    onPress={() => { }}
                  >
                    <AntDesign name="caretdown" size={15} color="black" />
                  </TouchableHighlight>
                </View>
              </View>
            </View>
            <View style={style.inputContainer}>
              <TextInput
                style={{ paddingLeft: 10, flex: 2, fontSize: 16, color: COLORS.grey }}
                value={detail}
                onChangeText={setDetail}
                placeholder="Varian"
              />
            </View>
            <View style={style.inputContainer}>
              <Picker
                selectedValue={selectedCategory}
                mode={'dropdown'}
                style={{ height: 50, width: 150 }}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedCategory(itemValue)
                }>
                {listCategory.map((category) => (
                  <Picker.Item key={category.id} label={category.name} value={category.id} />
                ))}
              </Picker>
            </View>
            <View style={style.inputContainer}>
              <TextInput
                style={{ paddingLeft: 10, flex: 2, fontSize: 16, color: COLORS.grey }}
                value={price}
                keyboardType={'numeric'}
                onChangeText={setPrice}
                placeholder="Price"
              />
            </View>
            <View style={style.inputContainer}>
              <TextInput
                style={{ paddingLeft: 10, flex: 2, fontSize: 16, color: COLORS.grey }}
                value={description}
                onChangeText={setDescription}
                placeholder="Description"
              />
            </View>
            <View style={{ marginVertical: 10 }}>
              <PrimaryButton
                onPress={() => _add()}
                title="Save"
              />
            </View>

          </View>
        </View>
      </View>
    </ScrollView>
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


export default AddProduct;