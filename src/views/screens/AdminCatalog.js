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
import { MaterialIcons, AntDesign  } from '@expo/vector-icons';
import COLORS from '../../const/colors';
import categories from '../../const/categories';
import BottomNavigator from '../navigation/AdminButtomNavigation';
import { PrimaryButtonBox, SecondaryButtonBox } from '../components/Button';
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
                  marginTop: 15,
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

        <View style={style.card}>
          <View style={{ alignItems: 'baseline'}}>
            <Image source={require('../../assets/rc-persian.png')} style={{height: 154, width: 123}} />
          </View>
          <View style={{ marginLeft: 13, marginTop: 10}}>
            <Text style={{fontSize: 14, fontWeight: 'bold'}}>Royal Canin 1kg</Text>
            <Text style={{ fontSize: 12, fontWeight: '500'}}>
              Rp 200.000
            </Text>
            <Text style={{fontSize: 12, fontWeight: '500', marginTop: 2}}>Persian</Text>
            <View style={{flexDirection:'row', marginTop:10}}>
                <Image source={require('../../assets/Stock.png')} style={{height: 16, width: 16, marginRight:6}} />
                <Text style={{fontSize: 12, color: COLORS.grey, marginRight:38}}>Stock</Text>
                <Text style={{fontSize: 12, color: COLORS.grey}}>: 4</Text>
            </View>
            <View style={{flexDirection:'row', marginTop:4}}>
                <Image source={require('../../assets/Favorite.png')} style={{height: 16, width: 16, marginRight:6}} />
                <Text style={{fontSize: 12, color: COLORS.grey, marginRight:25}}>Favorite</Text>
                <Text style={{fontSize: 12, color: COLORS.grey}}>: 5</Text>
            </View>
            <View style={{flexDirection:'row', marginTop:4}}>
                <Image source={require('../../assets/Sold.png')} style={{height: 16, width: 16, marginRight:6}} />
                <Text style={{fontSize: 12, color: COLORS.grey, marginRight:44}}>Sold</Text>
                <Text style={{fontSize: 12, color: COLORS.grey}}>: 10</Text>
            </View>
          </View>
          <View style={{marginLeft:50, marginTop:68}}>
          <TouchableHighlight
            underlayColor={COLORS.white}
             activeOpacity={0.9}
             onPress={() => navigation.navigate('DetailsScreen')}
            >
            <AntDesign name="right" size={20} color="black" />
            </TouchableHighlight>
          </View>
        </View>
    );
  };

  return (
    <SafeAreaView style={style.container}>
      <View style={style.header}>
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
      <View style={{ alignContent:'stretch', flexDirection:'row', paddingTop:26, paddingBottom:12,}}>
          <PrimaryButtonBox
                
                title="Available"
                />
             <SecondaryButtonBox
                
                title="Sold Out"
                />    
          </View>
      <View>
        <ListCategories/>
      </View>
      <View style={{flex: 1, flexDirection: 'column', alignItems:'center', paddingTop:14 }}>
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
    flexDirection:'row',
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
