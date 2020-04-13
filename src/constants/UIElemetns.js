import {Dimensions, StyleSheet, Platform, PixelRatio} from 'react-native';

const { width, height } = Dimensions.get('window'); // TODO: should prob ditch that for good

export const Constants = {
  width,
  height,
  OS: Platform.OS,

  borderMargin: 20,
  activeOpacity: 0.6,
};

export const Color = {
  blue: 'rgba(0, 49, 136, 1)',
  white: 'white',
  black: 'black',
};


const scale = width / 320; // based on iphone 5s's scale
export const normalize = (size) => {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
  }
};

export const TextStyles = StyleSheet.create({
  title: {
    color: Color.white,
    fontSize: normalize(20),
    fontWeight: 'bold'
  },
  subTitle:{
    color: Color.white,
    fontSize: normalize(18),
    fontWeight: 'bold'
  },
  body: {
    color: Color.white,
    fontSize: normalize(16),
  },
});

export const GlobalStyles = StyleSheet.create({
  globalContainerStyle: {
    flex: 1,
    backgroundColor: Color.blue,
  },
  globalSafeAreaViewStyle: {
    flex: 1,
  },
  globalContentContainerStyle: {
    flex: 1,
    backgroundColor: Color.white,
    overflow: 'hidden',
  },
});

export const Icons = {
  //linkArrow: require('../images/icons/link_arrow.png'),
};

