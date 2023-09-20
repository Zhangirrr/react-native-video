import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AppContext from './components/AppContext/AppContext';

import LoginScreen from './screens/Login';
import ContentScreen from './screens/Home';
import VideoScreen from './screens/VideoFile';

const Stack = createNativeStackNavigator();

function App() {
  const [user, setUser] = useState('');

  const userSettings = {
    user,
    setUser,
  };

  return (
    <AppContext.Provider value={userSettings}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="login"
            component={LoginScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="content"
            component={ContentScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="video"
            component={VideoScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
}

export default App;