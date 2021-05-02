import React from 'react';
import {StyleSheet, View, Text, SafeAreaView} from 'react-native';
import COLORS from '../../const/colors';
import { MaterialIcons } from '@expo/vector-icons';
import Home from './Home';

const AlertSuccess = () => {
    return (
        <SafeAreaView>
            <View style={style.header}>
                <MaterialIcons name="arrow-back-ios" size={28} onPress={Home} />
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>Success</Text>
            </View>
            <View style={style.container}>
                <View style={style.icon}>
                    <MaterialIcons name="shopping-bag" size={150} color={COLORS.secondary}/>
                </View>
                <Text style={{color: COLORS.white, fontWeight: 'bold', fontSize: 28, paddingLeft: 100}}>Success</Text>
            </View>
        </SafeAreaView>
    );
}

const style = StyleSheet.create ({
    header: {
        paddingVertical: 50,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
    },
    container: {
        height: 400,
        margin: 40,
        borderRadius: 30,
        elevation: 13,
        backgroundColor: COLORS.primary,
    },
    icon: {
        paddingTop: 90,
        paddingLeft: 80
    }
});

export default AlertSuccess;