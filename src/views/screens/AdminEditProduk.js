import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, View, Image, SafeAreaView, TextInput, } from 'react-native';
import { TouchableOpacity, TouchableHighlight } from 'react-native';
import COLORS from '../../const/colors';
import { PrimaryButton } from '../components/Button';
import Home from './Home';
import { Feather, MaterialIcons, AntDesign } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { Picker } from '@react-native-picker/picker';
import { ScrollView } from 'react-native-gesture-handler';
import * as ImagePicker from 'expo-image-picker';

const AdminEditProduk = ({navigation}) => {
    const [image, setImage] = useState(null);
    const [selectedValue, setSelectedValue] = useState("");
    const [name, setName] = useState('')

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
        <View style={style.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={{flexDirection:'row'}}>
            <MaterialIcons name="arrow-back-ios" size={28} />
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Edit Product</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{flex:8,}}>
          <ScrollView vertical>
            <View style={{alignItems:'center'}}>
              <View style={style.cartCard}>
                    <View style={{
                      height: 160,
                      flex: 1,
                      flexDirection:'column'
                    }}>
                        <View style={{flex:1}}>
                        <Text style={{ textAlignVertical:'top', paddingTop: 10, paddingLeft: 10, flex: 2, fontSize: 16, color: '#8C8C8C' }}>Photo</Text>
                        </View>
                        <View style={{flex:1, marginBottom:80, marginHorizontal:50}}>
                        <Image source={require('../../assets/rc-persian.png')} style={{height: 100, width: 100}} />
                        </View>
                    </View>
                    <View>
                      <View style={{  flex:1, alignItems: 'center' }}>
                        <View style={style.actionBtn}>
                          <TouchableOpacity activeOpacity={0.8} onPress={() => pickImage()} style={style.icon}>
                              <View style={{marginVertical:50}}>
                              <Feather name="upload" color={COLORS.primary} size={28} />
                              </View>
                            
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={style.inputContainer}>
                    <TextInput
                      style={{ paddingLeft: 10, flex: 2, fontSize: 16, color: COLORS.grey }}
                      value={name}
                      onChangeText={setName}
                      placeholder="Product Name"
                    />  
                  </View>
                  <View style={style.cartCardStock}>
                <View style={{
                  height: 60,
                  flex: 1,
                  marginTop: 30,
                }}>
                  <Text style={{ paddingLeft: 10, flex: 2, fontSize: 16, color: '#8C8C8C' }}>Stock</Text>
                </View>
                <View>
                  <View style={{ alignItems: 'center' }}>
                    <View style={{flexDirection:'column'}}>
                      <TouchableOpacity activeOpacity={0.2}  style={{marginRight: 10,marginLeft: 7}}>
                        <Feather name="chevron-up" color={COLORS.primary} size={28} />
                      </TouchableOpacity>
                      <TouchableOpacity activeOpacity={0.2} style={{marginRight: 10,marginLeft: 7}}>
                        <Feather name="chevron-down" color={COLORS.primary} size={28} />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
                  <View style={style.inputContainer}>
                    <TextInput
                      style={{ paddingLeft: 10, flex: 2, fontSize: 16, color: COLORS.grey }}
                      value={name}
                      onChangeText={setName}
                      placeholder="Varian"
                    />
                  </View>
                  <View style={style.inputContainer}>
                      <Picker
                    selectedValue={selectedValue}
                    style={{ height: 50, width: 150 }}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    style={{ paddingLeft: 10, flex: 2, fontSize: 16, color: COLORS.grey }}
                  >
                    <Picker.Item label="Category" value="" />
                    <Picker.Item label="Food" value="Food" />
                    <Picker.Item label="Medicine" value="Medicine" />
                    <Picker.Item label="Accessories" value="Accessories" />
                    <Picker.Item label="Equipment" value="Equipment" />
    
                    
                    
                  </Picker>
                  </View>
                  <View style={style.inputContainer}>
                    <TextInput
                      style={{ paddingLeft: 10, flex: 2, fontSize: 16, color: COLORS.grey }}
                      value={name}
                      onChangeText={setName}
                      placeholder="Price"
                    />
                  </View>
                  <View style={style.inputContainerDescription}>
                    <TextInput
                      style={{ paddingLeft: 10, flex: 2, fontSize: 16, color: COLORS.grey }}
                      editable
                      multiline
                      value={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}
                      onChangeText={setName}
                      placeholder="Description"
                    />
                  </View>
                  </View>
              </ScrollView>
        </View>
        
        <View style={{ flex:1, padding:20 }}>
                <PrimaryButton
                  onPress={() => _add()}
                  title="Save"
                />
        </View>
      </SafeAreaView>
      );
    };
    
    const style = StyleSheet.create({
      header: {
        flex:1,
        paddingVertical: 40,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
      },
      textContainer: {
        flex: 1,
        paddingHorizontal: 50,
        justifyContent: 'space-between',
        paddingBottom: 40,
        paddingTop: 30,
    
      },
      formLogin: {
        marginTop: 40,
      },
      inputContainer: {
        height: 60,
        width: 290,
        marginBottom: 30,
        borderRadius: 15,
        backgroundColor: COLORS.white,
        shadowRadius: 5,
        shadowColor: COLORS.grey,
        elevation: 13,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      inputContainerDescription: {
        height: 290,
        width: 290,
        marginBottom: 30,
        borderRadius: 15,
        backgroundColor: COLORS.white,
        shadowRadius: 5,
        shadowColor: COLORS.grey,
        elevation: 13,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      cartCard: {
        height: 160,
        width: 290,
        marginBottom: 30,
        borderRadius: 15,
        elevation: 13,
        backgroundColor: COLORS.white,
        shadowRadius: 5,
        shadowColor: COLORS.grey,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flex:1
      },
      actionBtn: {
        width: 100,
        height: 160,
        backgroundColor: COLORS.secondary,
        borderRadius: 15,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
      },
      icon: {
        marginRight: 10,
        marginTop: 10,
        marginLeft: 7
      },
      cartCardStock: {
        height: 60,
        width: 290,
        marginBottom: 30,
        borderRadius: 15,
        elevation: 13,
        backgroundColor: COLORS.white,
        shadowRadius: 5,
        shadowColor: COLORS.grey,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
    });

export default AdminEditProduk;