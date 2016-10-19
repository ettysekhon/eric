import React, {
  PropTypes,
} from 'react';

import {
  View
} from 'react-native';

import {
  Text,
  Heading4
} from './Text';

import SummaryTable from './SummaryTable';
import SummaryDeltaTable from './SummaryDeltaTable';
import styles from './Styles/SummaryCardStyles';

const CardContent = ({ children }) => {
  return (
    <View style={styles.content}>{children}</View>
  );
};

const SummaryCard = ({ tables, delta }) => {
  const tbls = tables.map((table, index) => {
    return (
      <View key={index}>
        <CardContent>
          <Heading4
            style={styles.heading}
            >{table.title}
          </Heading4>
        </CardContent>
        <SummaryTable data={table.data} />
      </View>
    )
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
  title: PropTypes.string,
  tables: PropTypes.array,
  delta: PropTypes.array
};

export default SummaryCard;
