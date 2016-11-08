import React, {
  PropTypes,
} from 'react';

import {
  View
} from 'react-native';

import { connect } from 'react-redux';

import {
  Heading4
} from './Text';

import SummaryTable from './SummaryTable';
import SummaryDeltaTable from './SummaryDeltaTable';
import styles from './Styles/SummaryCardStyles';
import applyLetterSpacing from '../utils/letterSpacing';

const CardContent = ({ children }) => {
  return (
    <View style={styles.content}>{children}</View>
  );
};

CardContent.displayName = 'CardContent';

CardContent.propTypes = {
  children: PropTypes.node
};

const SummaryCard = ({ tables, delta, orientation }) => {
  const getPortraitData = (data) => {
    const ret = data.map((row) => {
      return row.filter((cell, i) => {
        return i === 0 || i === 1 || i === 3 || i === 5;
      });
    });
    return ret;
  };
  const tbls = tables.map((table, index) => {
    const data = orientation === 'PORTRAIT'
      ? getPortraitData(table.data)
      : table.data;
    return (
      <View key={index}>
        <CardContent>
          <Heading4
            style={styles.heading}
          >{table.title}
          </Heading4>
        </CardContent>
        <SummaryTable data={data} />
      </View>
    );
  });
  return (
    <View style={styles.card}>
      <View style={styles.inner}>
        {
          tbls
        }
        <CardContent>
          <SummaryDeltaTable data={delta} />
        </CardContent>
      </View>
    </View>
  );
};

SummaryCard.displayName = 'SummaryCard';

SummaryCard.propTypes = {
  delta: PropTypes.array,
  orientation: PropTypes.string,
  tables: PropTypes.array
};

const select = (state, ownProps) => {
  return {
    delta: ownProps.delta,
    orientation: state.orientation.orientation,
    tables: ownProps.tables
  };
};

export default connect(select)(SummaryCard);
