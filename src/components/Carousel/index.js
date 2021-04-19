import React, { useRef } from 'react';
import styles, { sliderWidth, itemWidth } from './styles';
import SliderEntry from './SliderEntry';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import {
  View,
  Dimensions
} from 'react-native';
import { globalStyles } from '../../constants/globalStyles';

const MyCarousel = ({ data }) => {
  const [index, setIndex] = React.useState(0)
  return (
    <View style={styles.carouselStyle}>
      <Carousel
        layoutCardOffset={0}
        data={data}
        renderItem={renderCarouselItem}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
        onSnapToItem={(index) => setIndex(index)}
      />
      <Pagination
        dotsLength={data.length}
        activeDotIndex={index}
        containerStyle={{ paddingVertical: 8 }}
        inactiveDotStyle={{
          width: 8,
          height: 8,
          borderRadius: 5,
          backgroundColor: globalStyles.colors.accent
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </View>
  );
};

const renderCarouselItem = ({ item }) => {
  return <SliderEntry item={item} />;
};


export default MyCarousel;