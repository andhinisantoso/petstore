import React from 'react';
import {Text, StyleSheet, View, Image, SafeAreaView, TextInput} from 'react-native';
import { TouchableOpacity,TouchableHighlight } from 'react-native';
import COLORS from '../../const/colors';
import {PrimaryButton} from '../components/Button';
import Home from './Home';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';

const AddCategory = ({navigation}) => {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
        <View style={style.header}>
          <MaterialIcons name="arrow-back-ios" size={28} onPress={Home} />
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Add category</Text>
        </View>
        <View style={style.textContainer}>
          <View>
            <View style={style.formLogin}>
              <View style={style.inputContainer}>
                <View style={{flexDirection:'row'}}>
                <TextInput
                  style={{paddingLeft: 10, flex: 2, fontSize: 16, color: COLORS.grey}}
                  placeholder="Upload Icon"
                />
             <View style={{backgroundColor:COLORS.secondary, width:73, height:50, justifyContent:'center', alignItems:'center', borderRadius:15}}>
             <TouchableHighlight
            underlayColor={COLORS.white}
             activeOpacity={0.9}
             onPress={() => navigation.navigate('DetailsScreen')}
            >
            <AntDesign name="upload" size={26} color="black" />
            </TouchableHighlight>
             </View>
                </View>
              </View>
              <View style={style.inputContainer}>
                <TextInput
                  style={{paddingLeft: 10, flex: 2, fontSize: 16, color: COLORS.grey}}
                  placeholder="Category Name"
                />
              </View>
              <View style={{marginTop:300, marginBottom:87}}>
              <PrimaryButton
                onPress={() => navigation.navigate('Home')}
                title="Save"
              />
              </View>
              
            </View>
          </View>
        </View>
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
    textContainer: {
      flex: 1,
      paddingHorizontal: 50,
      justifyContent: 'space-between',
      paddingBottom: 40,
      paddingTop: 10,
      
    },
    formLogin: {
      marginTop: 30,
    },
    inputContainer: {
      height: 50,
      width: 324,
      marginBottom: 20,
      borderRadius: 15,
      backgroundColor: COLORS.white,
      shadowRadius: 5,
      shadowColor: COLORS.grey,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  });


export default AddCategory;