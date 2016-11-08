import React, {
  PropTypes,
} from 'react';

import {
  View
} from 'react-native';

import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';

/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import LinearGradient from 'react-native-linear-gradient';
/* eslint-enable import/extensions */
/* eslint-enable import/no-unresolved */
import {
  TextMedium,
} from './Text';

import {
  normalize
} from '../utils/size';

import { Colors } from '../theme/';
import styles from './Styles/SummaryTableStyles';

const Arrow = ({ up }) => {
  const direction = up ? 'long-arrow-up' : 'long-arrow-down';
  const arrowColor = up ? 'green' : 'red';
  return (
    <FontAwesomeIcons
      color={arrowColor}
      name={direction}
      size={normalize(8)}
      style={{
        marginLeft: 5,
        marginRight: 5
      }}
    />
  );
};

const Cell = ({ cell, style }) => {
  const arrow = cell.isHeader && cell.showDirection
    ? (<Arrow up={cell.up} />)
    : null;
  return (
    <View style={[styles.cell, style]}>
      { arrow }
      <TextMedium
        style={{
          color: 'white'
        }}
      >
        {
          cell.value
        }
      </TextMedium>
    </View>
  );
};

const Row = ({ row, style }) => {
  const cells = row.map((cell, index) => {
    const styl = row.length === index + 1
      ? {
        borderRightWidth: 0
      }
      : {};
    return (
      <Cell
        cell={cell}
        key={index}
        style={styl}
      />
    );
  });
  return (
    <View style={[styles.row, style]}>
      {
        cells
      }
    </View>
  );
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
        row={row}
        style={style}
      />);
  });
  return (
    <LinearGradient
      colors={[
        Colors.secondaryGradientStart,
        Colors.secondaryGradientEnd
      ]}
      end={[1.0, 0.0]}
      start={[0.0, 0.0]}
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
  /* eslint-disable react/forbid-prop-types */
  data: PropTypes.array
  /* eslint-enable react/forbid-prop-types */
};

export default Table;
