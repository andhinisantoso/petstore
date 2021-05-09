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
import { MaterialIcons } from '@expo/vector-icons';
import COLORS from '../../const/colors';
import BottomNavigator from '../navigation/BottomNavigation';
import { useFocusEffect } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
const { width } = Dimensions.get('screen');
const cardWidth = width / 2 - 20;
import HOST from '../../const/host';
import { addToCart } from '../../redux/cartSlice'
import { set } from '../../redux/navigationSlice'

const Home = ({ navigation }) => {
  const dispatch = useDispatch()
  const status = useSelector((state) => state.log.status)
  const role = useSelector((state) => state.log.role)
  const userId = useSelector((state) => state.log.userId)
  const username = useSelector((state) => state.log.username)
  const userImage = useSelector((state) => state.log.image)
  const [listCategory, setListCategory] = useState([])
  const [listItem, setListItem] = useState([])
  const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);
  const listCart = useSelector((state) => state.cart.listItem)
  useEffect(() => {

    async function fetchData() {
      const responseCategories = await fetch(`${HOST}/api/categories`)
      const resultCategories = await responseCategories.json()
      const responseItems = await fetch(`${HOST}/api/items`)
      const resultItems = await responseItems.json()
      setListCategory(resultCategories)
      setListItem(resultItems)
    }

    try {
      fetchData()
    } catch (error) {

    }
  }, [])

  useFocusEffect(() => {
    if (role == 'admin') {
      navigation.replace('AdminHome')
    } else if (status != 'login') {
      navigation.replace('OnBoard')
    }

    dispatch(set({ value: 'Home' }))
  })

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
      <TouchableHighlight
        underlayColor={COLORS.white}
        activeOpacity={0.9}
        onPress={() => navigation.navigate('DetailProduct', {
          id: props.id,
          price: props.price,
          name: props.name,
          detail: props.detail,
          description: props.description,
          image: props.image,
          category_id: props.category_id
        })}
      >
        <View style={style.card}>
          <View style={{ alignItems: 'center' }}>
            <Image source={{ uri: props.image }} style={{ height: 120, width: 120 }} />
          </View>

          <View style={{ marginHorizontal: 10, marginTop: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{props.name}</Text>
            <Text style={{ fontSize: 14, color: COLORS.grey, marginTop: 2 }}>{props.detail}</Text>
          </View>
          <View
            style={{
              marginTop: 10,
              marginHorizontal: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
              Rp {props.price}
            </Text>
            <TouchableOpacity onPress={() => dispatch(addToCart({ userId: userId, categoryId: selectedCategoryIndex, itemId: props.id, price: props.price, name: props.name, detail: props.detail, image: props.image, total: 1 }))} >
              <View style={style.addToCartBtn}>
                <MaterialIcons name="add" size={20} color={COLORS.white} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableHighlight>
    );
  };

  return (
    <SafeAreaView style={style.container}>
      <View style={style.header}>
        <View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 28 }}>Hello,</Text>
            <Text style={{ fontSize: 28, fontWeight: 'bold', marginLeft: 10 }}>
              {username}
            </Text>
          </View>
          <Text style={{ marginTop: 5, fontSize: 22, color: COLORS.grey }}>
            What do you need today
          </Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')} >
          <Image
            source={{ uri: userImage }}
            style={{ height: 50, width: 50, borderRadius: 25 }}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          marginTop: 20,
          flexDirection: 'row',
          paddingHorizontal: 20,
        }}>
        <View style={style.inputContainer}>
          <MaterialIcons name="search" size={28} color={COLORS.p} />
          <TextInput
            style={{ paddingLeft: 5, flex: 2, fontSize: 18 }}
            placeholder="Search"
          />
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <ListCategories />
      </View>
      <View style={{ flex: 6, flexDirection: 'column', marginLeft: 10 }}>
        <ScrollView horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={style.categoriesListContainer}
        >
          {listItem.map((item) => {
            if (item.category_id == selectedCategoryIndex && item.stok > 0) {

              return <Card image={item.image} name={item.name} price={item.price} detail={item.detail} description={item.description} key={item.id} id={item.id} category_id={selectedCategoryIndex} />
            }
          })}
        </ScrollView>
      </View >
      <View style={{ flex: 1, }}>
        <BottomNavigator />
      </View>

    </SafeAreaView >
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
    marginTop: 60,
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
    backgroundColor: COLORS.white,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    height: 220,
    width: cardWidth - 10,
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop: 10,
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
