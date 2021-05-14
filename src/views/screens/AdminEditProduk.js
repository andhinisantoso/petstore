import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, View, Image, SafeAreaView, TextInput, ToastAndroid } from 'react-native';
import { TouchableOpacity, TouchableHighlight } from 'react-native';
import COLORS from '../../const/colors';
import { PrimaryButton } from '../components/Button';
import Home from './Home';
import { Feather, MaterialIcons, AntDesign } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { Picker } from '@react-native-picker/picker';
import { ScrollView } from 'react-native-gesture-handler';
import * as ImagePicker from 'expo-image-picker';
import HOST from '../../const/host';
import { update, updateWithPhoto, resetMessage } from '../../redux/itemSlice';

const AdminEditProduk = ({ route, navigation }) => {
  const { id } = route.params
  const [item, setItem] = useState(null)
  const [image, setImage] = useState('https://via.placeholder.com/150')
  const [imageName, setImageName] = useState(null)
  const [name, setName] = useState('')
  const [stok, setStok] = useState(null)
  const [detail, setDetail] = useState(null)
  const [listCategory, setListCategory] = useState([])
  const [category, setCategory] = useState(0);
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const message = useSelector((state) => state.item.message)
  const dispatch = useDispatch()

  useEffect(() => {

    async function fetchData() {
      const responseCategories = await fetch(`${HOST}/api/categories`)
      const resultCategories = await responseCategories.json()
      setListCategory(resultCategories)
      const response = await fetch(`${HOST}/api/items/${id}`)
      const data = await response.json()
      setItem(data)
      setImage(data.image)
      setName(data.name)
      setStok(data.stok)
      setDetail(data.detail)
      setCategory(data.category_id)
      setPrice(data.price.toString())
      setDescription(data.description)
    }

    try {
      fetchData()
    } catch (error) {

    }
  }, [])

  useEffect(() => {
    if (message != '') {
      ToastAndroid.show(message, ToastAndroid.SHORT)
      dispatch(resetMessage())
    }
  }, [message])

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

  const _update = () => {
    if (imageName) {
      dispatch(updateWithPhoto({
        id: id,
        imageUri: image,
        imageName: imageName[0],
        name: name,
        stok: stok,
        detail: detail,
        category_id: category,
        price: parseInt(price),
        description: description
      }))
    } else {
      dispatch(update({
        id: id,
        name: name,
        stok: stok,
        detail: detail,
        category_id: category,
        price: parseInt(price),
        description: description
      }))
    }
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={style.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={{ flexDirection: 'row' }}>
            <MaterialIcons name="arrow-back-ios" size={28} />
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Edit Product</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 8, }}>
        <ScrollView vertical>
          <View style={{ alignItems: 'center' }}>
            <View style={style.cartCard}>
              <View style={{
                height: 160,
                flex: 1,
                flexDirection: 'column'
              }}>
                <View style={{ flex: 1 }}>
                  <Text style={{ textAlignVertical: 'top', paddingTop: 10, paddingLeft: 10, flex: 2, fontSize: 16, color: '#8C8C8C' }}>Photo</Text>
                </View>
                <View style={{ flex: 1, marginBottom: 80, marginHorizontal: 50 }}>
                  <Image source={{ uri: image }} style={{ height: 100, width: 100 }} />
                </View>
              </View>
              <View>
                <View style={{ flex: 1, alignItems: 'center' }}>
                  <View style={style.actionBtn}>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => pickImage()} style={style.icon}>
                      <View style={{ marginVertical: 50 }}>
                        <Feather name="upload" color={COLORS.primary} size={28} />
                      </View>

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
            <View style={style.cartCardStock}>
              <View style={{
                height: 60,
                flex: 1,
                marginTop: 30,
              }}>
                <Text style={{ paddingLeft: 10, flex: 2, fontSize: 16, color: '#8C8C8C' }}>{stok}</Text>
              </View>
              <View>
                <View style={{ alignItems: 'center' }}>
                  <View style={{ flexDirection: 'column' }}>
                    <TouchableOpacity onPress={() => setStok(stok + 1)} activeOpacity={0.2} style={{ marginRight: 10, marginLeft: 7 }}>
                      <Feather name="chevron-up" color={COLORS.primary} size={28} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setStok(stok - 1)} activeOpacity={0.2} style={{ marginRight: 10, marginLeft: 7 }}>
                      <Feather name="chevron-down" color={COLORS.primary} size={28} />
                    </TouchableOpacity>
                  </View>
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
                selectedValue={category}
                style={{ height: 50, width: 150 }}
                onValueChange={(itemValue, itemIndex) => setCategory(itemValue)}
                style={{ paddingLeft: 10, flex: 2, fontSize: 16, color: COLORS.grey }}
              >
                <Picker.Item label="Category" value={0} />
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
                keyboardType="numeric"
                placeholder="Price"
              />
            </View>
            <View style={style.inputContainerDescription}>
              <TextInput
                style={{ paddingLeft: 10, flex: 2, fontSize: 16, color: COLORS.grey }}
                editable
                multiline
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
          onPress={() => _update()}
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
  inputContainerDescription: {
    height: 290,
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
    height: 160,
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
    flex: 1
  },
  actionBtn: {
    width: 100,
    height: 160,
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
  cartCardStock: {
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
});

export default AdminEditProduk;