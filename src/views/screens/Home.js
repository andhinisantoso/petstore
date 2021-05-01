import React from 'react';
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
import categories from '../../const/categories';
import BottomNavigator from '../navigation/BottomNavigation';
const {width} = Dimensions.get('screen');
const cardWidth = width / 2 - 20;

const Home = ({navigation}) => {

  const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);

  const ListCategories = () => {
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={style.categoriesListContainer}>
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setSelectedCategoryIndex(index)}>
            <View
              style={{width: 150, marginRight: 10, borderRadius: 30, flexDirection: 'row', height: 50,
                backgroundColor:
                  selectedCategoryIndex == index
                    ? COLORS.primary
                    : COLORS.secondary,
                ...style.categoryBtn,
              }}>
              <View style={style.categoryBtnImgCon}>
                <Image
                  source={category.image}
                  style={{height: 30, width: 30, resizeMode: 'cover'}}
                />
              </View>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  marginLeft: 10,
                  color:
                    selectedCategoryIndex == index
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

  const Card = ({}) => {
    return (
      <TouchableHighlight
        underlayColor={COLORS.white}
        activeOpacity={0.9}
        onPress={() => navigation.navigate('DetailsScreen')}
      >
        <View style={style.card}>
          <View style={{alignItems: 'center'}}>
            <Image source={require('../../assets/rc-persian.png')} style={{height: 120, width: 120}} />
          </View>
          <View style={{marginHorizontal: 10, marginTop: 10}}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Royal Canin</Text>
            <Text style={{fontSize: 14, color: COLORS.grey, marginTop: 2}}>Persian 1 kg </Text>
          </View>
          <View
            style={{
              marginTop: 10,
              marginHorizontal: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>
              Rp 200.000
            </Text>
            <View style={style.addToCartBtn}>
              <MaterialIcons name="add" size={20} color={COLORS.white} />
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  };

  return (
    <SafeAreaView style={style.container}>
      <View style={style.header}>
        <View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 28}}>Hello,</Text>
            <Text style={{fontSize: 28, fontWeight: 'bold', marginLeft: 10}}>
              Dadu
            </Text>
          </View>
          <Text style={{marginTop: 5, fontSize: 22, color: COLORS.grey}}>
            What do you need today
          </Text>
        </View>
        <Image
          source={require('../../assets/categories/home.png')}
          style={{height: 50, width: 50, borderRadius: 25}}
        />
      </View>
      <View
        style={{
          marginTop: 20,
          flexDirection: 'row',
          paddingHorizontal: 20,
        }}>
        <View style={style.inputContainer}>
          <MaterialIcons name="search" size={28} color={COLORS.p}/>
          <TextInput
            style={{paddingLeft: 5, flex: 2, fontSize: 18}}
            placeholder="Search"
          />
        </View>
      </View>
      <View>
        <ListCategories/>
      </View>
      <View style={{flex: 1, flexDirection: 'row', marginLeft: 10, }}>
        <Card/>
        <Card/>
      </View>
      <BottomNavigator/>
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
    width: cardWidth-10,
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
