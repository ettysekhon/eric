import React, {
  PropTypes,
} from 'react';

import {
  StyleSheet,
  View
} from 'react-native';

import {
  Heading1,
  Heading4,
  Text,
  TextMedium,
} from './Text';

import styles from './Styles/SummaryDeltaTableStyles';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';

import {
  normalize
} from '../utils/size';

const HeaderCell = ({ cell, up }) => {
  const direction = up ? 'long-arrow-up' : 'long-arrow-down';
  const arrowColor = up ? 'green' : 'red';
  return (
    <View style={[styles.headerCell]}>
      <FontAwesomeIcons
        color={arrowColor}
        name={direction}
        size={normalize(8)}
      />
      <TextMedium style={styles.headerText}>
        {
          cell
        }
      </TextMedium>
    </View>
  )
}

const Cell = ({ cell, isHeader, up, style }) => {
  const cellContent = isHeader ? (
    <HeaderCell
      up={up}
      cell={cell}
    />) : (
      <Heading4>
        {
          cell
        }
      </Heading4>
    );
  return (
    <View style={[styles.cell, style]}>
      {
        cellContent
      }
    </View>
  )
};

const SummaryDeltaTable = ({ data }) => {
  const header = data.map((cell, index) => {
    return (
      <Cell
        cell={cell.title}
        up={cell.up}
        isHeader={true}
        key={index}
      />
    );
  });
  const values = data.map((cell, index) => {
    return (
      <Cell
        cell={cell.value}
        isHeader={false}
        key={index}
      />
    );
  });
  return (
    <View>
      <View style={[styles.row]}>
      {
        header
      }
      </View>
      <View style={[styles.row]}>
      {
        values
      }
      </View>
    </View>
  );
};

SummaryDeltaTable.displayName = 'SummaryDeltaTable';

SummaryDeltaTable.propTypes = {
  data: PropTypes.array
};

export default SummaryDeltaTable;
