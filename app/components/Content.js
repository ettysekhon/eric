import React, {
  PropTypes,
} from 'react';

import {
  RefreshControl,
  ScrollView,
  View
} from 'react-native';

import { Colors } from '../theme/';
import styles from './Styles/ContentStyles';

const Content = ({ children, isRefreshing, onRefresh }) => {
  const refreshControl = (
    <RefreshControl
      colors={[
        Colors.primaryGradientStart,
        Colors.primaryGradientMiddle,
        Colors.primaryGradientEnd]}
      onRefresh={onRefresh}
      progressBackgroundColor={Colors.grayLight}
      refreshing={isRefreshing}
      tintColor={Colors.primaryGradientStart}
    />
  );
  return (
    <ScrollView
      refreshControl={refreshControl}
    >
      <View style={styles.content}>
        {
          children
        }
      </View>
    </ScrollView>
  );
};

Content.displayName = 'Content';

Content.propTypes = {
  children: PropTypes.node.isRequired,
  isRefreshing: PropTypes.bool,
  onRefresh: PropTypes.func
};

export default Content;
