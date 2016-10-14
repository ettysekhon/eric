/* @flow */
'use strict';

import React from 'react';
import { Text as RNText} from 'react-native';
import styles from './Styles/TextStyles';

export Text = ({style, ...props}) => {
  return <RNText style={[styles.font, style]} {...props} />;
}

export function Heading1({style, ...props}: Object): ReactElement {
  return <ReactNative.Text style={[styles.font, styles.h1, style]} {...props} />;
}

export function Paragraph({style, ...props}: Object): ReactElement {
  return <ReactNative.Text style={[styles.font, styles.p, style]} {...props} />;
}



const styles = StyleSheet.create({
  font: {
    fontFamily: require('../env').fontFamily,
  },
  h1: {
    fontSize: normalize(24),
    lineHeight: normalize(27),
    color: F8Colors.darkText,
    fontWeight: 'bold',
    letterSpacing: -1,
  },
  p: {
    fontSize: normalize(15),
    lineHeight: normalize(23),
    color: F8Colors.lightText,
  },
});


export default class Text extends Component {

	propTypes: {
        style : React.PropTypes.object
    }

	prepareRootProps() {

		var type = {
			color: this.getContextForegroundColor(),
			fontSize: this.getTheme().fontSizeBase,
			lineHeight: this.getTheme().lineHeight,
			fontFamily: this.getTheme().fontFamily
		}

		var defaultProps = {
			style: type
		}

		return computeProps(this.props, defaultProps);

	}
	render() {
		return(
			<RNText {...this.prepareRootProps()}>{this.props.children}</RNText>
		);
	}

}
