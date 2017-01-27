import React, {
  Component,
  PropTypes,
} from 'react';

import {
  Image,
  TouchableHighlight,
  View
} from 'react-native';

import { Colors } from '../theme/';
import styles from './Styles/SummaryTablesStyles';
import images from '../theme/Images';

import {
  Heading4
} from './Text';

import SummaryTable from './SummaryTable';
import CardContent from './CardContent';

const getData = (type, data, orientation) => {
  if (orientation !== 'PORTRAIT') {
    return data;
  }
  const ret = data.map((row) => {
    if (type === 'SUMMARY') {
      return row.filter((cell, i) => {
        return i === 0 || i === 1 || i === 3 || i === 5;
      });
    }
    return row.filter((cell, i) => {
      return i < 2;
    });
  });
  return ret;
};

const getIcon = (isExpanded, canRender, onIconClick) => {
  const icon = isExpanded ? images.contract : images.expand;
  return canRender ? (
    <TouchableHighlight
      onPress={onIconClick}
      style={styles.iconContainer}
    >
      <View
        style={styles.slop}
      >
        <Image
          source={icon}
          style={styles.icon}
        />
      </View>
    </TouchableHighlight>
  ) : null;
};

class SummaryTables extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false
    };
    this.onIconClick = this.onIconClick.bind(this);
  }
  onIconClick() {
    /* eslint-disable react/no-set-state */
    this.setState({ isExpanded: !this.state.isExpanded });
    /* eslint-enable react/no-set-state */
  }
  render() {
    const tables = this.props.tables.map((table, index, array) => {
      const data = getData(this.props.type, table.data, this.props.orientation);
      const canRenderIcon = index === 0 && array.length > 1;
      const icon = getIcon(this.state.isExpanded, canRenderIcon, this.onIconClick);
      const props = canRenderIcon ? {
        onPress: this.onIconClick
      } : null;
      const primaryTable = index === 0;
      const headingText = primaryTable ? { color: Colors.primaryDark } : null;
      return (!this.state.isExpanded && !primaryTable)
        ? null
        : (
          <View key={index}>
            {
              icon
            }
            <CardContent
              {...props}
            >
              <Heading4
                style={[styles.heading, headingText]}
              >{table.title}
              </Heading4>
            </CardContent>
            <SummaryTable data={data} />
          </View>
        );
    });
    return (
      <View>
        {
          tables
        }
      </View>
    );
  }
}

SummaryTables.displayName = 'SummaryTables';

SummaryTables.propTypes = {
  orientation: PropTypes.string,
  tables: PropTypes.array,
  type: PropTypes.string
};

export default SummaryTables;
