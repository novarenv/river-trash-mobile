import 'react-native-gesture-handler';
import React from 'react';
import { View, TouchableWithoutFeedback, Alert } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { StyleSheet } from 'react-native';

import { globalStyles } from '../../constants/globalStyles';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Strings } from '../../lib/localization';

import HomeScreen from '../../screens/Home';

const Tab = createMaterialBottomTabNavigator();

export const MainNavigator = () => {
  return (
    <View style={{flex: 1}}>
      <Tab.Navigator
        shifting={false}
        barStyle={{
          backgroundColor: 'white',
          elevation: 12,
          borderTopWidth: 1,
          borderColor: globalStyles.colors.background,
        }}>
        <Tab.Screen
          name={Strings.home}
          component={HomeScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <MaterialIcons
                name={focused ? 'home' : 'home-outline'}
                size={24}
                color={focused ? globalStyles.colors.primary : '#aaa'}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
};


const styles = StyleSheet.create({
  tabButtonPlaceholder: { justifyContent: 'flex-end', alignItems: 'center', flex: 1 },
  switchButtonContainer: { justifyContent: 'center', alignItems: 'center', position: 'absolute', bottom: 40, right: 0, left: 0, zIndex: 100 },
  switchButton: { backgroundColor: globalStyles.colors.primary, width: 40, height: 40, borderRadius: 100, justifyContent: 'center', alignItems: 'center' },
  switchButtonBackground: { backgroundColor: 'white', padding: 4, borderRadius: 100, justifyContent: 'center', alignItems: 'center', position: 'absolute' }
});
