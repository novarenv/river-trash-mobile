import React from 'react';
import { connect } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { MainNavigator } from '../navigators/MainNavigator';
import HomeScreen from '../../screens/Home';

const Stack = createStackNavigator();

const AppStack = props => (
  <NavigationContainer>
    {console.log(props.user)}
    <Stack.Navigator
      initialRouteName={'MainNavigator'}>
      <Stack.Screen
        name="MainNavigator"
        component={MainNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

const mapStateToProps = state => ({
  showIntro: state.persist.app.showIntro,
  user: state.persist.auth.user,
});

const mapDispatchToProps = {};

export const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppStack);
