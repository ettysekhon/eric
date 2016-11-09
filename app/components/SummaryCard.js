import React, {
  PropTypes,
} from 'react';

import {
  View
} from 'react-native';

import SummaryTables from './SummaryTables';
import SummaryDeltaTable from './SummaryDeltaTable';
import styles from './Styles/SummaryCardStyles';

const SummaryCard = ({ tables, delta, orientation }) => {
  return (
    <View style={styles.card}>
      <View style={styles.inner}>
        <SummaryTables
          orientation={orientation}
          tables={tables}
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
  tables: PropTypes.array
};

export default SummaryCard;
