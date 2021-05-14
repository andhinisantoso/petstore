import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import COLORS from '../../const/colors';
import { GreyButton, PrimaryButton } from '../components/Button';
import Home from '../screens/Home';

const DetailsScreen = ({ route, navigation }) => {
  const { id, name, image, detail, price, description } = route.params

  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white }}>
      <View style={style.header}>
        <MaterialIcons name="arrow-back-ios" size={28} onPress={() => navigation.goBack()} />
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Details Product</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: 280,
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
            <TouchableOpacity activeOpacity={0.8} onPress={() => { }} style={style.iconContainer}>
              <MaterialIcons name="favorite-border" color={COLORS.primary} size={25} />
            </TouchableOpacity>
          </View>
          <Text style={{ fontSize: 14, fontWeight: 'bold', color: COLORS.dark, marginTop: 2 }}>{detail}</Text>
          <Text style={style.detailsText}>
            {description}
          </Text>
          <View style={{ marginTop: 40, marginBottom: 7 }}>
            <PrimaryButton onPress={() => navigation.navigate('AdminEditProduk', { id: id })} title="Edit" />
          </View>
          <View style={{ marginTop: 7, marginBottom: 40 }}>
            <GreyButton title="Decline" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
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
