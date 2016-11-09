import React, {
  PropTypes,
} from 'react';

import {
  View
} from 'react-native';

import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';

import {
  Heading4,
  TextMedium,
} from './Text';

import CardContent from './CardContent';

import styles from './Styles/SummaryDeltaTableStyles';

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
  );
};

const Cell = ({ cell, isHeader, up, style }) => {
  const cellContent = isHeader
    ? (
      <HeaderCell
        cell={cell}
        up={up}
      />)
    : (
      <Heading4
        style={{
          letterSpacing: 1.125
        }}
      >
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
  );
};

const SummaryDeltaTable = ({ data }) => {
  const header = data.map((cell, index) => {
    return (
      <Cell
        cell={cell.title}
        isHeader
        key={index}
        up={cell.up}
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
    <CardContent>
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
    </CardContent>
  );
};

SummaryDeltaTable.displayName = 'SummaryDeltaTable';

SummaryDeltaTable.propTypes = {
  data: PropTypes.array
};

export default SummaryDeltaTable;
