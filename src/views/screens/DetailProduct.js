import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import COLORS from '../../const/colors';
import { GreyButton } from '../components/Button';
import Home from '../screens/Home';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../../redux/favouriteSlice';

const DetailsScreen = ({ route, navigation }) => {
  const { id, price, name, detail, description, image } = route.params
  const dispatch = useDispatch()
  const listFavourite = useSelector((state) => state.favourite.listFavourite)

  useEffect(() => {
    console.log(listFavourite)
  }, [listFavourite])

  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white }}>
      <View style={style.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back-ios" size={28} />
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Details Product</Text>
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: 220,
            marginBottom: 20,
          }}>
          <Image source={{ uri: image }} style={{ height: 220, width: 220 }} />
        </View>
        <View style={style.details}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: COLORS.dark, marginBottom: -10 }}>Rp {price}</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{ fontSize: 25, fontWeight: 'bold', color: COLORS.dark, marginBottom: -10 }}>
              {name}
            </Text>
            <TouchableOpacity activeOpacity={0.8} onPress={() => dispatch(add({ id: id, name: name, detail: detail, price: price }))} style={style.iconContainer}>
              <MaterialIcons name="favorite-border" color={COLORS.primary} size={25} />
            </TouchableOpacity>
          </View>
          <Text style={{ fontSize: 14, fontWeight: 'bold', color: COLORS.dark, marginTop: 2 }}>{detail}</Text>
          <Text style={style.detailsText}>
            {description}
          </Text>
          <View style={{ marginTop: 40, marginBottom: 40 }}>
            <GreyButton title="Add To Cart" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    paddingTop: 50,
    paddingBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  details: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 60,
    backgroundColor: COLORS.secondary,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  iconContainer: {
    backgroundColor: COLORS.white,
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  detailsText: {
    marginTop: 10,
    lineHeight: 22,
    fontSize: 16,
    color: COLORS.dark,
  },
});

export default DetailsScreen;
