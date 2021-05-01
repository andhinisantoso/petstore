import React from 'react';
import {StyleSheet, View, Text, SafeAreaView} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import COLORS from '../../const/colors';
import { PrimaryButton } from '../components/Button';
import { MaterialIcons } from '@expo/vector-icons';
import Home from './Home';

const Verification = () => {
    return (
        <SafeAreaView>
            <View style={style.header}>
                <MaterialIcons name="arrow-back-ios" size={28} onPress={Home} />
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>Verification</Text>
            </View>
            <View style={style.container}>
                <Text style={{marginTop: 5, fontSize: 18, color: COLORS.grey}}>
                    Code Verification
                </Text>
                <TextInput placeholder="Input Code" style={style.textInput}/>
                <PrimaryButton
                onPress={() => navigation.navigate('Home')}
                title="Verification"
                />
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
        flex: 1,
        margin: 40,
        paddingTop: 100
    },
    textInput: {
        height: 40,
        borderColor: COLORS.dark,
        borderBottomWidth: 4,
        marginBottom: 36,
        marginTop: 10,
    },
});

export default Verification;