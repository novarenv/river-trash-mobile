import {DefaultTheme, configureFonts, Theme} from 'react-native-paper';

//BASE COLORS
// #0075A5
// #009DAD
// #00C29C
// #8BE280
// #F9F871
export const otherColor = {
  blue: '#0075A5',
  opoIki: '#009DAD',
  green: '#00C29C',
  yellow: '#8BE280',
  lightYellow: '#F9F871',
};

export const font = {
  bold: 'Cabin-Bold',
};

export const fontConfig = {
  default: {
    regular: {
      fontFamily: 'Cabin-Regular',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'Cabin-Bold',
      fontWeight: 'normal',
    },
  },
  ios: {
    regular: {
      fontFamily: 'Cabin-Regular',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'Cabin-Bold',
      fontWeight: 'normal',
    },
  },
};

export const globalStyles = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#0F4C82',
    accent: '#009DAD',
    background: '#f8f8f8',
  },
  roundness: 8,
  fonts: configureFonts(fontConfig),
};
