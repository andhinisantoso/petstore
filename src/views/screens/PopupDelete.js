import React from 'react';
import {StyleSheet, View, Text, SafeAreaView} from 'react-native';
import COLORS from '../../const/colors';
import { MaterialIcons } from '@expo/vector-icons';
import Home from './Home';
import { PrimaryButtonBoxSml, SecondaryButtonBoxSml } from '../components/Button';

const PopupDelete = () => {
    return (
        <SafeAreaView>
            <View style={style.header}>
            <View style={style.container}>
                <Text style={{color: 'black', fontWeight: 'bold', fontSize: 18, textAlign:'center', marginTop:26}}>Are you sure ?</Text>
               
            <View style={{alignItems:'center',flexDirection:'row', marginTop:8, marginLeft:20, marginRight:20 }}>
            <View style={{marginRight:7}}>
            <PrimaryButtonBoxSml
                
                title="No"
                />
            </View>
            <SecondaryButtonBoxSml
                
                title="Yes"
                />
            </View>
            </View>
            </View>
            
        </SafeAreaView>
    );
}

const style = StyleSheet.create ({
    header: {
        paddingVertical: 200,
        flexDirection: 'column',
        alignItems: 'center',
        
    },
    container: {
        height: 129,
        margin: 40,
        borderRadius: 30,
        elevation: 13,
        backgroundColor: COLORS.white,
        width: 324

    },
    icon: {
        paddingTop: 90,
        paddingLeft: 80
    }
});

export default PopupDelete;