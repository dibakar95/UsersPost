import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import UserView from './src/screens/UserView';
import PostView from './src/screens/PostView';
import store from './src/store';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={'Home'}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="UserView" component={UserView} />
          <Stack.Screen name="PostView" component={PostView} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
