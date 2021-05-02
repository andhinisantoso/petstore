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
  TouchableHighlight,
} from 'react-native';
import { AntDesign, MaterialIcons, MaterialCommunityIcons, Octicons } from '@expo/vector-icons';
import COLORS from '../../const/colors';
import BottomNavigator from '../navigation/AdminButtomNavigation';
const {width} = Dimensions.get('screen');
const cardWidth = width / 2 - 20;

const AdminHome = ({navigation}) => {

  const CardAddProduct = ({}) => {
    return (
      <TouchableHighlight
        underlayColor={COLORS.white}
        activeOpacity={0.9}
        onPress={() => navigation.navigate('DetailsScreen')}
      >
        <View style={style.card}>
          <View  style={{marginBottom:15.06, marginLeft:40, marginTop:45, height: 50.94}}>
            <AntDesign name="tag" size={70} color={COLORS.primary}/>
          </View>
          <View style={{marginHorizontal: 10, marginTop: 10}}>
            <Text style={{lineHeight:28, fontFamily:'Roboto', textAlign:'center', fontSize: 24, fontWeight: 'bold', color:COLORS.primary}}>Add{"\n"}Product</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  };
  const CardOrderCheck = ({}) => {
    return (
      <TouchableHighlight
        underlayColor={COLORS.white}
        activeOpacity={0.9}
        onPress={() => navigation.navigate('DetailsScreen')}
      >
        <View style={style.card}>
          <View  style={{marginBottom:15.06, marginLeft:50, marginTop:45, height: 50.94}}>
            <MaterialCommunityIcons name="briefcase-check" size={70} color={COLORS.primary}/>
          </View>
          <View style={{marginHorizontal: 10, marginTop: 10}}>
            <Text style={{lineHeight:28, fontFamily:'Roboto', textAlign:'center', fontSize: 24, fontWeight: 'bold', color:COLORS.primary}}>Order{"\n"}Check</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  };
  const CardAddCategory = ({}) => {
    return (
      <TouchableHighlight
        underlayColor={COLORS.white}
        activeOpacity={0.9}
        onPress={() => navigation.navigate('DetailsScreen')}
      >
        <View style={style.card}>
          <View  style={{marginBottom:15.06, marginLeft:50, marginTop:40, height: 50.94}}>
            <MaterialIcons name="category" size={70} color={COLORS.primary}/>
          </View>
          <View style={{marginHorizontal: 10, marginTop: 10}}>
            <Text style={{lineHeight:28, fontFamily:'Roboto', textAlign:'center', fontSize: 24, fontWeight: 'bold', color:COLORS.primary}}>Add{"\n"}Category</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  };
  const CardSummary = ({}) => {
    return (
      <TouchableHighlight
        underlayColor={COLORS.white}
        activeOpacity={0.9}
        onPress={() => navigation.navigate('DetailsScreen')}
      >
        <View style={style.card}>
          <View  style={{marginBottom:15.06, marginLeft:50, marginTop:45, height: 50.94}}>
            <Octicons name="graph" size={70} color={COLORS.primary}/>
          </View>
          <View style={{marginHorizontal: 10, marginTop: 10}}>
            <Text style={{lineHeight:28, fontFamily:'Roboto', textAlign:'center', fontSize: 24, fontWeight: 'bold', color:COLORS.primary}}>Summary</Text>
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
            <Text style={{fontSize: 28, fontWeight: 'bold'}}>Welcome ,</Text>
            <Text style={{fontSize: 28, fontWeight: 'bold', marginLeft: 10}}>
              Admin
            </Text>
          </View>
          <Text style={{marginTop: 5, fontSize: 22, color: COLORS.grey}}>
            Manage your store
          </Text>
        </View>
        <Image
          source={require('../../assets/categories/home.png')}
          style={{height: 50, width: 50, borderRadius: 25}}
        />
      </View>
      <View
        style={{
          marginTop: 51,
          flexDirection: 'row',
          paddingHorizontal: 20,
          borderBottomColor: 'black',
          borderBottomWidth: 2,
          marginLeft: 13,
          marginRight: 13,
          marginBottom: 10,
        }}>
      </View>

      <View style={{flex: 1, flexDirection: 'row', marginLeft: 10, }}>
        <CardAddProduct/>
        <CardOrderCheck/> 
      </View>
      <View style={{flex: 1, flexDirection: 'row', marginLeft: 10, }}>  
        <CardAddCategory/>
        <CardSummary/>
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
    marginTop: 70,
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
    height: 212,
    width: 161,
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop: 15,
    marginLeft:13,
    marginRight:15,
    borderRadius: 10,
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
});

export default AdminHome;
