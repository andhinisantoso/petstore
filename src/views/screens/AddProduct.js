import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, View, Image, SafeAreaView, TextInput } from 'react-native';
import { TouchableOpacity, TouchableHighlight, ToastAndroid } from 'react-native';
import COLORS from '../../const/colors';
import { PrimaryButton } from '../components/Button';
import Home from './Home';
import { Feather, MaterialIcons, AntDesign } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { Picker } from '@react-native-picker/picker';
import { ScrollView } from 'react-native-gesture-handler';
import * as ImagePicker from 'expo-image-picker';
// redux
import { add, resetMessage } from '../../redux/itemSlice';
import HOST from '../../const/host';

const AddProduct = ({ navigation }) => {
  const [image, setImage] = useState(null)
  const [imageName, setImageName] = useState('')
  const [name, setName] = useState('')
  const [stock, setStock] = useState('')
  const [detail, setDetail] = useState('')
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const dispatch = useDispatch()
  const message = useSelector((state) => state.item.message)
  const [listCategory, setListCategory] = useState([])

  useEffect(() => {

    async function fetchData() {
      const responseCategories = await fetch(`${HOST}/api/categories`)
      const resultCategories = await responseCategories.json()
      setListCategory(resultCategories)
    }

    try {
      fetchData()
    } catch (error) {

    }
  }, [])

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

  useEffect(() => {
    if (message != '') {
      ToastAndroid.show(message, ToastAndroid.SHORT)
      dispatch(resetMessage())
    }
  }, [message])

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
    } else {
      ToastAndroid.show('Maaf gambarnya belum ada', ToastAndroid.SHORT)
    }
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={style.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={{ flexDirection: 'row' }}>
            <MaterialIcons name="arrow-back-ios" size={28} />
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Add Product</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 8, }}>
        <ScrollView vertical>
          <View style={{ alignItems: 'center' }}>
            <View style={style.cartCard}>
              <View style={{
                height: 60,
                flex: 1,
                marginTop: 30,
              }}>
                <Text style={{ paddingLeft: 10, flex: 2, fontSize: 16, color: '#8C8C8C' }}>{image ? imageName[0] : 'Upload Photo'}</Text>
              </View>
              <View>
                <View style={{ alignItems: 'center' }}>
                  <View style={style.actionBtn}>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => pickImage()} style={style.icon}>
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
                placeholder="Product Name"
              />
            </View>
            <View style={style.inputContainer}>
              <TextInput
                style={{ paddingLeft: 10, flex: 2, fontSize: 16, color: COLORS.grey }}
                value={stock}
                onChangeText={setStock}
                keyboardType={'numeric'}
                placeholder="Stock"
              />
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
                style={{ height: 50, width: 150 }}
                onValueChange={(itemValue, itemIndex) => setSelectedCategory(itemValue)}
                style={{ paddingLeft: 10, flex: 2, fontSize: 16, color: COLORS.grey }}
              >
                <Picker.Item label="Category" value="" />
                {listCategory.map((category) => (
                  <Picker.Item key={category.id} label={category.name} value={category.id} />
                ))}
              </Picker>
            </View>
            <View style={style.inputContainer}>
              <TextInput
                style={{ paddingLeft: 10, flex: 2, fontSize: 16, color: COLORS.grey }}
                value={price}
                onChangeText={setPrice}
                keyboardType={'numeric'}
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
          </View>
        </ScrollView>
      </View>

      <View style={{ flex: 1, padding: 20 }}>
        <PrimaryButton
          onPress={() => _add()}
          title="Save"
        />
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    flex: 1,
    paddingVertical: 40,
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
    marginBottom: 30,
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


export default AddProduct;