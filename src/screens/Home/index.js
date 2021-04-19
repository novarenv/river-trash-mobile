import { useFocusEffect } from '@react-navigation/native';
import React from 'react';
import {
  Alert,
  BackHandler,
  FlatList,
  Image,
  RefreshControl,
  ScrollView,
  StatusBar,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import {
  Appbar,
  Text,
  TouchableRipple
} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';
import { Fade, Placeholder, PlaceholderLine } from 'rn-placeholder';
import { font, globalStyles, otherColor } from '../../constants/globalStyles';
import { formatCurrency, formatName } from '../../lib/formatter';
import { Strings } from '../../lib/localization';
import { styles } from './styles';

const Home = () => {
  return (
    <View style={{ flex: 1 }}>
      
      <Appbar.Header
        dark={true}
        style={[
          { backgroundColor: globalStyles.colors.primary },
        ]}>
        <View>
          <View>
            <TouchableWithoutFeedback
              style={{ flex: 1 }}
              onPress={() => props.navigation.navigate('Home')}>
              <View>
                <Text
                  style={{ marginLeft: 8 }}>
                  Home
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </Appbar.Header>
    </View>
  );
}

const mapStateToProps = state => ({
  user: state.persist.auth.user,
});

const mapDispatchToProps = {

};

export default connect(
  mapStateToProps,
)(Home);
