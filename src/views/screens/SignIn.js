import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, View, Image, SafeAreaView, TextInput, Button } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import COLORS from '../../const/colors';
import { PrimaryButton } from '../components/Button';
import Home from './Home';
// redux
import { login } from '../../redux/logSlice';

const SignIn = ({ navigation }) => {
  const dispatch = useDispatch()

  const [username, setUsername] = useState('')
  const [password, setPasword] = useState('')
  const status = useSelector((state) => state.log.status)

  const loginHandler = () => {
    dispatch(login({ name: username, password: password }))
  }

  useEffect(() => {
    if (status === 'login') {
      navigation.navigate('Home')
    }
  }, [status])

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View
        style={{
          width: '100%',
          height: 250,
        }}>
        <Image
          style={{
            width: 200,
            height: 200,
            top: 40,
            left: 120,
          }}
          source={require('../../assets/categories/home.png')}
        />
      </View>
      <View style={style.textContainer}>
        <View>
          <View>
            <Text style={{ fontSize: 32, fontWeight: 'bold', textAlign: 'center' }}>
              Happy
            </Text>
            <Text style={{ fontSize: 32, fontWeight: 'bold', textAlign: 'center' }}>
              Pet Store
            </Text>
          </View>
          <View style={style.formLogin}>
            <View style={style.inputContainer}>
              <TextInput
                style={{ paddingLeft: 10, flex: 2, fontSize: 16, color: COLORS.grey }}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
              />
            </View>
            <View style={style.inputContainer}>
              <TextInput
                style={{ paddingLeft: 10, flex: 2, fontSize: 16 }}
                placeholder="Password"
                value={password}
                onChangeText={setPasword}
              />
            </View>
            <PrimaryButton
              onPress={loginHandler}
              title="Login"
            />
          </View>
        </View>
        <Text
          style={{
            marginTop: 20,
            fontSize: 16,
            textAlign: 'center',
            color: COLORS.grey,
          }}>
          Do you have an Account? <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate('SignUp')}><Text style={{ color: COLORS.primary, fontWeight: 'bold', fontSize: 18 }}>Sign Up</Text></TouchableOpacity>
        </Text>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
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
    width: 290,
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

export default SignIn;
