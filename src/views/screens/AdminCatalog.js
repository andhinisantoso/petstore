import React, { useEffect, useState } from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  Dimensions,
  ScrollView,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import COLORS from '../../const/colors';
import categories from '../../const/categories';
import BottomNavigator from '../navigation/AdminButtomNavigation';
import { useFocusEffect } from '@react-navigation/native';
import { PrimaryButtonBox, SecondaryButtonBox } from '../components/Button';
const { width } = Dimensions.get('screen');
const cardWidth = width / 2 - 20;
// redux
import { set } from '../../redux/navigationSlice'
import { useDispatch, useSelector } from 'react-redux';
import HOST from '../../const/host';

const Home = ({ navigation }) => {
  const dispatch = useDispatch()
  const [listCategory, setListCategory] = useState([])
  const [listItem, setListItem] = useState([])
  const [listSoldOut, setListSoldOut] = useState([])
  const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);
  const [availableSelected, setAvailableSelected] = useState(true)
  const [selectedButton, setSelectedButton] = useState('available')

  useFocusEffect(() => {
    dispatch(set({ value: 'AdminCatalog' }))
  });

  useEffect(() => {

    async function fetchData() {
      const responseCategories = await fetch(`${HOST}/api/categories`)
      const resultCategories = await responseCategories.json()
      const responseItems = await fetch(`${HOST}/api/items`)
      const resultItems = await responseItems.json()
      const responseSoldOut = await fetch(`${HOST}/api/soldout`)
      const resultSoldOut = await responseSoldOut.json()
      setListCategory(resultCategories)
      setListItem(resultItems)
      setListSoldOut(resultSoldOut)
    }

    try {
      fetchData()
    } catch (error) {

    }
  }, [])

  const available = () => {
    setSelectedButton('available')
  }

  const sold_out = () => {
    setSelectedButton('sold')
  }

  const ListCategories = () => {
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={style.categoriesListContainer}>
        {listCategory.map((category) => (
          <TouchableOpacity
            key={category.id}
            activeOpacity={0.8}
            onPress={() => setSelectedCategoryIndex(category.id)}>
            <View
              style={{
                width: 150, marginRight: 10, borderRadius: 30, flexDirection: 'row', height: 50,
                backgroundColor:
                  selectedCategoryIndex == category.id
                    ? COLORS.primary
                    : COLORS.secondary,
                ...style.categoryBtn,
              }}>
              <View style={style.categoryBtnImgCon}>
                <Image
                  source={{ uri: category.image }}
                  style={{ height: 30, width: 30, resizeMode: 'cover' }}
                />
              </View>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  marginLeft: 10,
                  color:
                    selectedCategoryIndex == category.id
                      ? COLORS.white
                      : COLORS.primary,
                }}>
                {category.name}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  };

  const Card = (props) => {
    return (

      <View style={style.card}>
        <View style={{ alignItems: 'baseline' }}>
          <Image source={{ uri: props.image }} style={{ height: 154, width: 123 }} />
        </View>
        <View style={{ marginLeft: 13, marginTop: 10 }}>
          <Text style={{ fontSize: 14, fontWeight: 'bold' }}>{props.name}</Text>
          <Text style={{ fontSize: 12, fontWeight: '500' }}>
            Rp {props.price}
          </Text>
          <Text style={{ fontSize: 12, fontWeight: '500', marginTop: 2 }}>{props.detail}</Text>
          <View style={{ flexDirection: 'row', marginTop: 10 }}>
            <Image source={require('../../assets/Stock.png')} style={{ height: 16, width: 16, marginRight: 6 }} />
            <Text style={{ fontSize: 12, color: COLORS.grey, marginRight: 38 }}>Stock</Text>
            <Text style={{ fontSize: 12, color: COLORS.grey }}>: {props.stok}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={style.container}>
      <View
        style={{
          flex: 1,
          marginTop: 20,
          flexDirection: 'row',
          padding: 20,
        }}>
        <View style={style.inputContainer}>
          <MaterialIcons name="search" size={28} color={COLORS.p} />
          <TextInput
            style={{ paddingLeft: 5, flex: 2, fontSize: 18 }}
            placeholder="Search"
          />
        </View>
      </View>
      {
        selectedButton == 'available' ?
          <View style={{ flex: 1, alignContent: 'stretch', flexDirection: 'row', paddingTop: 10, }}>
            <PrimaryButtonBox
              onPress={() => available()}
              title="Available"
            />
            <SecondaryButtonBox
              onPress={() => sold_out()}
              title="Sold Out"
            />
          </View>
          :
          <View style={{ flex: 1, alignContent: 'stretch', flexDirection: 'row', paddingTop: 10, }}>
            <SecondaryButtonBox
              onPress={() => available()}
              title="Available"
            />
            <PrimaryButtonBox
              onPress={() => sold_out()}
              title="Sold Out"
            />
          </View>
      }
      <View style={{ flex: 1 }}>
        <ListCategories />
      </View>
      <View style={{ flex: 6 }}>
        {
          selectedButton == 'available' ?
            <ScrollView style={{ flex: 1, paddingTop: 14 }}>
              <View style={{ flexDirection: 'column', alignItems: 'center', paddingTop: 14 }}>
                {listItem.map((item) => {
                  if (item.category_id == selectedCategoryIndex) {
                    return <Card key={item.id} image={item.image} name={item.name} detail={item.detail} price={item.price} stok={item.stok} />
                  }
                })}
              </View>
            </ScrollView>
            :
            <ScrollView style={{ flex: 1, paddingTop: 14 }}>
              <View style={{ flexDirection: 'column', alignItems: 'center', paddingTop: 14 }}>
                {listSoldOut.map((item) => {
                  if (item.category_id == selectedCategoryIndex) {
                    return <Card key={item.id} image={item.image} name={item.name} detail={item.detail} price={item.price} stok={item.stok} />
                  }
                })}
              </View>
            </ScrollView>
        }
      </View>
      <View>
        <BottomNavigator />
      </View>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    minHeight: 600,
    height: '100%',
  },
  header: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: -10,
  },
  inputContainer: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: COLORS.secondary,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  categoriesListContainer: {
    paddingVertical: 10,
    alignItems: 'center',
    paddingHorizontal: 20,
    marginRight: 20,
  },
  categoryBtn: {
    height: 45,
    width: 150,
    marginRight: 7,
    borderRadius: 30,
    alignItems: 'center',
    paddingHorizontal: 5,
    flexDirection: 'row',
  },
  categoryBtnImgCon: {
    height: 40,
    width: 40,
    marginLeft: 5,
    marginTop: 5,
    backgroundColor: COLORS.white,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    flexDirection: 'row',
    height: 154,
    width: 324,
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop: 20,
    borderRadius: 15,
    elevation: 13,
    backgroundColor: COLORS.white,
    shadowRadius: 5,
    shadowColor: COLORS.grey
  },
  addToCartBtn: {
    height: 30,
    width: 30,
    borderRadius: 20,
    marginTop: -5,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
