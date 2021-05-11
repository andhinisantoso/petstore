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
import { SecondaryButton } from '../components/Button';
const { width } = Dimensions.get('screen');
const cardWidth = width / 2 - 20;
import HOST from '../../const/host';

const AdminSummary = ({ navigation }) => {

  const [oneMonth, setOneMonth] = useState([])
  const [oneYear, setOneYear] = useState([])
  const [all, setAll] = useState([])
  const [selectedType, setSelectedType] = useState('')

  useEffect(() => {
    async function fetchData() {
      const responseOneMonth = await fetch(`${HOST}/api/currentMonth`)
      const resultOneMonth = await responseOneMonth.json()
      const responseOneYear = await fetch(`${HOST}/api/currentYear`)
      const resultOneYear = await responseOneYear.json()
      const responseAll = await fetch(`${HOST}/api/summary`)
      const resultAll = await responseAll.json()
      setOneMonth(resultOneMonth)
      setOneYear(resultOneYear)
      setAll(resultAll)
    }

    try {
      fetchData()
    } catch (error) {

    }
  }, [])

  const Card = (props) => {
    return (
      <View style={style.card}>
        <View style={{ marginLeft: 13, marginTop: 10 }}>
          <Text style={{ color: COLORS.primary, fontSize: 14, fontWeight: 'bold' }}>Name           : {props.name}</Text>
          <Text style={{ color: COLORS.primary, fontSize: 14, fontWeight: 'bold' }}>Telephone  : {props.phone}</Text>
          <Text style={{ color: COLORS.primary, fontSize: 14, fontWeight: 'bold' }}>Date              : {props.time}</Text>
          <Text style={{ color: COLORS.primary, fontSize: 14, fontWeight: 'bold' }}>Total             : Rp {props.total}</Text>
        </View>
        <View style={{ marginLeft: 100, marginTop: 68 }}>
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
      <View style={{ flex: 1, flexDirection: 'row', padding: 10 }}>
        <View style={{ flex: 1, paddingHorizontal: 10 }}><SecondaryButton onPress={() => setSelectedType('month')} title="1 Month" ></SecondaryButton></View>
        <View style={{ flex: 1, paddingHorizontal: 10 }}><SecondaryButton onPress={() => setSelectedType('year')} title="1 Year" ></SecondaryButton></View>
        <View style={{ flex: 1, paddingHorizontal: 10 }}><SecondaryButton onPress={() => setSelectedType('all')} title="All" ></SecondaryButton></View>
      </View>
      <View style={{ flex: 8 }}>
        <ScrollView >
          <View style={{ flexDirection: 'column', alignItems: 'center', paddingTop: 14 }}>
            {
              selectedType == 'month' ? oneMonth.map((data) => (
                <Card key={data.order_key} name={data.name} phone={data.phone} time={data.created_at} total={data.sum_income} />
              )) : false
            }
            {
              selectedType == 'year' ? oneYear.map((data) => (
                <Card key={data.order_key} name={data.name} phone={data.phone} time={data.created_at} total={data.sum_income} />
              )) : false
            }
            {
              selectedType == 'all' ? all.map((data) => (
                <Card key={data.order_key} name={data.name} phone={data.phone} time={data.created_at} total={data.sum_income} />
              )) : false
            }
          </View>
        </ScrollView>
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

export default AdminSummary;
