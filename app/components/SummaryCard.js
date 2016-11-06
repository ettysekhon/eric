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

// import React, {
//   PropTypes,
// } from 'react';
//
// import {
//   View
// } from 'react-native';
//
// import { connect } from 'react-redux';
//
// import {
//   Heading4
// } from './Text';
//
// import SummaryTable from './SummaryTable';
// import SummaryDeltaTable from './SummaryDeltaTable';
// import styles from './Styles/SummaryCardStyles';
//
// const CardContent = ({ children }) => {
//   return (
//     <View style={styles.content}>{children}</View>
//   );
// };
//
// CardContent.displayName = 'CardContent';
//
// CardContent.propTypes = {
//   children: PropTypes.node
// };
//
// const SummaryCard = ({ tables, headers, delta, deltaHeaders, orientation }) => {
//   const deltaData = delta.map((d, index) => {
//     return {
//       title: deltaHeaders[index],
//       value: `${d}%`,
//       up: d > 0
//     };
//   });
//   const tbls = tables.map((table, index) => {
//     let values = table.data;
//     let headerValues = headers;
//     const formatNumber = (x) => {
//       const parts = x.toString().split('.');
//       parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
//       return parts.join('.');
//     };
//     values = values.map((v, i) => {
//       const formattedNumber = formatNumber(v);
//       if (headerValues[i] === 'WoW' || headerValues[i] === 'YoY' || headerValues[i] === 'YoY(Adjusted)') {
//         return `${formattedNumber}%`;
//       }
//       return formattedNumber;
//     });
//     if (orientation === 'PORTRAIT') {
//       values = values.filter((d, i) => {
//         return i === 0 || i === 1 || i === 3 || i === 5;
//       });
//       headerValues = headers.filter((d, i) => {
//         return i === 0 || i === 1 || i === 3 || i === 5;
//       });
//     }
//     const data = [headerValues, values];
//     return (
//       <View key={index}>
//         <CardContent>
//           <Heading4
//             style={styles.heading}
//           >{table.title}
//           </Heading4>
//         </CardContent>
//         <SummaryTable data={data} />
//       </View>
//     );
//   });
//   return (
//     <View style={styles.card}>
//       <View style={styles.inner}>
//         {
//           tbls
//         }
//         <CardContent>
//           <SummaryDeltaTable data={deltaData} />
//         </CardContent>
//       </View>
//     </View>
//   );
// };
//
// SummaryCard.displayName = 'SummaryCard';
//
// SummaryCard.propTypes = {
//   delta: PropTypes.array,
//   deltaHeaders: PropTypes.array,
//   headers: PropTypes.array,
//   orientation: PropTypes.string,
//   tables: PropTypes.array
// };
//
// const select = (state, ownProps) => {
//   return {
//     delta: ownProps.delta,
//     deltaHeaders: ownProps.deltaHeaders,
//     headers: ownProps.headers,
//     orientation: state.orientation.orientation,
//     tables: ownProps.tables
//   };
// };
//
// export default connect(select)(SummaryCard);
