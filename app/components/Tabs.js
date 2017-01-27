import React, {
  PropTypes
} from 'react';

import {
  TouchableOpacity,
  View
} from 'react-native';

import {
  Heading3
} from './Text';

import styles from './Styles/TabStyles';
import applyLetterSpacing from '../utils/letterSpacing';

const getTabStyle = (isActive, isSummary) => {
  const ret = {};
  if (!isActive) {
    if (isSummary) {
      ret.borderRightWidth = 1;
    } else {
      ret.borderLeftWidth = 1;
    }
    ret.borderColor = 'white';
  }
  return ret;
};

const Tabs = ({ activeTab, tabs, onPress }) => {
  console.log('active tabs component', activeTab);
  const tabComponents = tabs.map((tab, index) => {
    const activeTabTextStyle = tab === activeTab ? {
      color: 'black'
    } : {
      color: 'gray'
    };
    const activeTabStyle = getTabStyle(tab === activeTab, tab === 'SUMMARY');
    return (
      <TouchableOpacity
        key={index}
        onPress={() => {
          onPress(tab);
        }}
        style={[styles.tab, activeTabStyle]}
      >
        <Heading3
          style={[styles.text, activeTabTextStyle]}
        >{ applyLetterSpacing(tab, 0.5) }</Heading3>
      </TouchableOpacity>
    );
  });
  return (
    <View
      style={styles.tabs}
    >
      { tabComponents }
    </View>
  );
};

Tabs.propTypes = {
  activeTab: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  /* eslint-disable react/forbid-prop-types */
  tabs: PropTypes.array
  /* eslint-enable react/forbid-prop-types */
};

export default Tabs;
