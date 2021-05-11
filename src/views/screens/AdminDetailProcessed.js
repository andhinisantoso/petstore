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
import { SecondaryButton, PrimaryButton } from '../components/Button';
import { color } from 'react-native-reanimated';
const {width} = Dimensions.get('screen');
const cardWidth = width / 2 - 20;

const AdminDetailProcessed = ({navigation}) => {

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
  
    const CardInvoice = ({}) => {
      return (
  
          <View style={style.card}>
            <View style={{ marginLeft: 13, marginTop: 10}}>
              <Text style={{color:COLORS.primary, fontSize: 14, fontWeight: 'bold'}}>Name           : Dadu</Text>
              <Text style={{color:COLORS.primary, fontSize: 14, fontWeight: 'bold'}}>Telephone  : 08000000</Text>
              <Text style={{color:COLORS.primary, fontSize: 14, fontWeight: 'bold'}}>Date              : 12 April 2021</Text>
              <Text style={{color:COLORS.primary, fontSize: 14, fontWeight: 'bold'}}>Time              : 15:0</Text>
              <Text style={{color:COLORS.primary, fontSize: 14, fontWeight: 'bold'}}>Total             : Rp 480000</Text>
              <Text style={{color:COLORS.primary, fontSize: 14, fontWeight: 'bold'}}>List               : </Text>
            </View>
          </View>
      );
    };
    const CardProduk = ({}) => {
        return (
    
            <View style={style.cardProduk}>
              <View style={{ flex:1, padding:5 }}>
                <Image source={require('../../assets/rc-persian.png')} style={{ height: 80, width: 80}} />
              </View>
              <View style={{ flex:1, marginLeft: 0, marginTop: 10}}>
                <Text style={{fontSize: 12, fontWeight: 'bold'}}>Royal Canin 1kg</Text>
                <Text style={{ fontSize: 10, fontWeight: '500' }}>
                  Persian
                </Text>
                <Text style={{fontSize: 12, fontWeight: 'bold', marginTop:10}}>Rp 250.000</Text>
              </View>
              <View style={{ flex:1, marginLeft: 50, marginTop: 30}}>
                <Text style={{textAlignVertical:'auto', fontSize: 14, fontWeight: 'bold'}}>1</Text>
              </View>
            </View>
        );
      };
  
    return (
      <SafeAreaView style={style.container}>
        <View style={style.header}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <View style={{flexDirection:'row'}}>
        <MaterialIcons name="arrow-back-ios" size={28} />
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Detail Order</Text>
        </View>
      </TouchableOpacity>
    </View>
        <View style={{flex:7}}>
        <ScrollView >
        <View style={{ flexDirection: 'column', alignItems:'center', paddingTop:14 }}>
          <CardInvoice/>
          <CardProduk/>
          <CardProduk/>
          <CardProduk/>
          <CardProduk/>
          <CardProduk/>
        </View>
        </ScrollView>
        </View>
        <View style={{flex:1, padding:20}}>
        <PrimaryButton
                  onPress={() => _add()}
                  title="Finished"
                />
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
      flex:1,
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
      backgroundColor: COLORS.secondary,
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
    cardProduk: {
        flexDirection:'row',
        height: 90,
        width: 324,
        marginHorizontal: 10,
        marginBottom: 20,
        marginTop: 20,
        borderRadius: 15,
        elevation: 13,
        backgroundColor: COLORS.white,
        shadowRadius: 5,
        shadowColor: COLORS.grey,
        flex:1
      },
  });
  

  
export default AdminDetailProcessed;
