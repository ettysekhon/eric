import React, {
  PropTypes,
} from 'react';

import {
  View
} from 'react-native';

import SummaryTables from './SummaryTables';
import SummaryDeltaTable from './SummaryDeltaTable';
import styles from './Styles/SummaryCardStyles';

const SummaryCard = ({ type, tables, delta, orientation }) => {
  return (
    <View style={styles.card}>
      <View style={styles.inner}>
        <SummaryTables
          orientation={orientation}
          tables={tables}
          type={type}
        />
        <SummaryDeltaTable data={delta} />
      </View>
    </View>
  );
};

SummaryCard.displayName = 'SummaryCard';

SummaryCard.propTypes = {
  orientation: PropTypes.string,
  delta: PropTypes.array,
  tables: PropTypes.array,
  type: PropTypes.string
};

export default SummaryCard;
