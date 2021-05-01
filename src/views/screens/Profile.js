import React from 'react';
import {StyleSheet, View, Text, SafeAreaView, Image} from 'react-native';
import COLORS from '../../const/colors';
import { PrimaryButton } from '../components/Button';
import { MaterialIcons } from '@expo/vector-icons';
import Home from './Home';

const Profile = () => {
    return (
        <SafeAreaView>
            <View style={style.header}>
                <MaterialIcons name="arrow-back-ios" size={28} onPress={Home} />
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>Profile</Text>
            </View>
            <View>
                <Image
                    source={require('../../assets/categories/home.png')}
                    style={{height: 120, width: 120, borderRadius: 25, marginLeft: 150}}
                />
            </View>
            <View style={style.container}>
                <View>
                    <Text style={style.form}>
                        Full Name
                    </Text>
                    <Text style={style.textData}>
                        Dadu
                    </Text>
                </View>
                <View>
                    <Text style={style.form}>
                        Email
                    </Text>
                    <Text style={style.textData}>
                        Dadu@gmail.com
                    </Text>
                </View>
                <View>
                    <Text style={style.form}>
                        Telephone
                    </Text>
                    <Text style={style.textData}>
                        082222222
                    </Text>
                </View>
                <View>
                    <Text style={style.form}>
                        Password
                    </Text>
                    <Text style={style.textData}>
                        ********
                    </Text>
                </View>
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
        paddingVertical: 20,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
    },
    container: {
        flex: 1,
        margin: 40,
    },
    form: {
        marginTop: 5, 
        fontSize: 18, 
        color: COLORS.grey
    },
    textData: {
        fontSize: 24, 
        color: COLORS.dark,
        fontWeight: 'bold',
        height: 40,
        borderColor: COLORS.dark,
        borderBottomWidth: 2,
        marginBottom: 36,
        marginTop: 10,
    }
});

export default Profile;