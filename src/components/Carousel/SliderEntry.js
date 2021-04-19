import React, { Component } from 'react';
import { View, Image, TouchableOpacity, Alert } from 'react-native';
import { Button, Text, TouchableRipple } from 'react-native-paper'
import PropTypes from 'prop-types';
import { ParallaxImage } from 'react-native-snap-carousel';
import styles from './styles';
import { globalStyles } from '../../constants/globalStyles';

const SliderEntry = ({ item }) => {
  return <View
    style={styles.slideInnerContainer}
  >
    <View style={styles.shadow} />
    <View style={{ backgroundColor: globalStyles.colors.background, overflow: 'hidden', borderRadius: 8, }}>
      <TouchableRipple onPress={() => { }}>
        <View style={{ height: 200 }}>
          <View
            style={
              styles.imageContainer
            }>
            <Image source={{ uri: item.imgUrl }} style={styles.image} />
            {/* <View
        style={styles.radiusMask}
      /> */}
          </View>
          <View
            style={styles.textContainer}>
            <Text
              style={styles.title}
              numberOfLines={2}>
              {item.title.toUpperCase()}
            </Text>
            <Text
              style={styles.subtitle}
              numberOfLines={2}>
              {item.description}
            </Text>
          </View>
        </View>
      </TouchableRipple>
    </View>



  </View>
}

export default SliderEntry
