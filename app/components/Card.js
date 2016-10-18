import React, {
  PropTypes,
} from 'react';

import {
  View
} from 'react-native';

import {
  Text,
  Heading3
} from './Text';

import Table from './Table';
import SummaryTable from './SummaryTable';
import styles from './Styles/CardStyles';

const CardContent = ({ children }) => {
  return (
    <View style={styles.content}>{children}</View>
  );
};

const Card = ({ title, summaryData, tableData }) => {
  return (
    <View style={styles.card}>
      <View style={styles.inner}>
        <CardContent>
          <Heading3>{title}</Heading3>
        </CardContent>
        <Table data={tableData} />
        <CardContent>
          <SummaryTable data={summaryData} />
        </CardContent>
      </View>
    </View>
  );
};

Card.displayName = 'Card';

Card.propTypes = {
  title: PropTypes.string,
  tableData: PropTypes.array,
  summaryData: PropTypes.array
};

export default Card;
