import React, {useState, useContext} from 'react';
import AppContext from '../components/AppContext/AppContext';
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  Switch,
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const LoginScreen = ({navigation}) => {
  const $ = useContext(AppContext);

  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const useFirebase = true;

  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(prev => !prev);

  const onButtonPress = () => {
    // на самом деле здесь я буду загружать данные примерно вот так, на данном этапе я захардкодил и указал входные данные asd asd
    // setIsLoggingIn(true);
    // if (useFirebase) {
    //   fetch('https://randomuser.me/api/')
    //     .then(response => response.json())
    //     .then(result => {
    //       let user = result.results[0];
    //       $.setUser(user);
    //       navigation.navigate('cabinet');
    //       setIsLoggingIn(false);
    //     });
    // } else
    {
      setTimeout(() => {
        if (userEmail == 'asd' && userPassword == 'asd') {
          setIsLoggedIn(true);
          navigation.navigate('content');
        }
        setIsLoggingIn(false);
      }, 1500);
    }
  };

  return (
    <View style={styles.app}>
      <ImageBackground
        style={[styles.main_background, {height: windowHeight / 1}]}
        source={{
          uri: 'https://img.freepik.com/free-vector/simple-blue-gradient-background-vector-business_53876-161578.jpg?size=626&ext=jpg&ga=GA1.1.1158149811.1669657176&semt=ais',
        }}>
        <Image
          style={styles.main_image}
          source={{
            uri: 'https://img.icons8.com/?size=512&id=108639&format=png',
          }}
        />
        <Text style={styles.main_text}>Video Project</Text>
        {isLoggedIn ? (
          <View>
            <Text>Hello user</Text>
          </View>
        ) : (
          <View style={{alignItems: 'center'}}>
            <View style={styles.inputs_wrap}>
              <TextInput
                style={styles.user_email}
                placeholder="Login"
                placeholderTextColor="#aaa"
                inputMode="email"
                value={userEmail}
                onChangeText={setUserEmail}
              />
              <TextInput
                style={styles.user_pasword}
                placeholder="Password"
                placeholderTextColor="#aaa"
                secureTextEntry={true}
                value={userPassword}
                onChangeText={setUserPassword}
              />
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Switch
                  trackColor={{false: '#767577', true: '#81b0ff'}}
                  thumbColor={isEnabled ? '#F29325' : '#f4f3f4'}
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />
                <Text style={{paddingLeft: 6, fontSize: 18}}>
                  Запомнить меня
                </Text>
              </View>
            </View>
            {isLoggingIn ? (
              <ActivityIndicator size="small" color="#F29325" />
            ) : (
              <TouchableOpacity onPress={onButtonPress}>
                <View
                  style={{
                    borderRadius: 6,
                    backgroundColor: '#F29325',
                    paddingVertical: 12,
                    paddingHorizontal: 18,
                  }}>
                  <Text>Log In</Text>
                </View>
              </TouchableOpacity>
            )}
          </View>
        )}
        <View style={{height: 160, width: '100%'}}></View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  main_background: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  main_image: {
    height: 248,
    width: 248,
  },
  main_text: {
    fontSize: 48,
    textAlign: 'center',
    color: '#474545',
  },
  inputs_wrap: {
    padding: 12,
    width: 450,
    alignItems: 'center',
  },
  user_email: {
    borderRadius: 6,
    paddingVertical: 12,
    paddingHorizontal: 18,
    backgroundColor: 'white',
    color: '#333',
    width: '75%',
    marginBottom: 12,
  },
  user_pasword: {
    borderRadius: 6,
    paddingVertical: 12,
    paddingHorizontal: 18,
    backgroundColor: 'white',
    color: '#333',
    width: '75%',
    marginBottom: 12,
  },
});

export default LoginScreen;
