import React, {
  PropTypes,
} from 'react';

import {
  ScrollView,
  View
} from 'react-native';

import styles from './Styles/ContentStyles';

const Content = (props) => {
  return (
    <ScrollView>
      <View style={styles.content}>
        {
          props.children
        }
      </View>
    </ScrollView>
  );
};

Content.displayName = 'Content';

Content.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Content;
