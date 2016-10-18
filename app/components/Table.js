import React, {
  PropTypes,
} from 'react';

import {
  StyleSheet,
  View
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import {
  Heading1,
  Text,
  TextMedium,
} from './Text';

import { Colors } from '../theme/';

import styles from './Styles/TableStyles';

const Cell = ({ cell, style }) => {
  return (
    <View style={[styles.cell, style]}>
      <TextMedium style={{
        color: 'white'
      }}>
        {
          cell
        }
      </TextMedium>
    </View>
  )
};

const Row = ({ row, style }) => {
  const cells = row.map((cell, index) => {
    const style = row.length === index + 1
      ? {
        borderRightWidth: 0
      }
      : {};
    return (
      <Cell
        cell={cell}
        key={index}
        style={style}
      />
    );
  });
  return (
    <View style={[styles.row, style]}>
      {
        cells
      }
    </View>
  )
};

const Table = ({ data }) => {
  const rows = data.map((row, index) => {
    const style = data.length === index + 1
      ? {
        borderBottomWidth: 0
      }
      : {};
    return (
      <Row
        key={index}
        style={style}
        row={row}
      />);
  });
  return (
    <LinearGradient
      start={[0.0, 0.0]} end={[1.0, 0.0]}
      colors={[
        Colors.secondaryGradientStart,
        Colors.secondaryGradientEnd
      ]}
      style={styles.gradient}
    >
      {
        rows
      }
    </LinearGradient>
  );
};

Table.displayName = 'Table';

Table.propTypes = {
  data: PropTypes.array
};

export default Table;
