import React, {
  Component,
  PropTypes
} from 'react';

import {
  View
} from 'react-native';

import EvilIcons from 'react-native-vector-icons/EvilIcons';

import { connect } from 'react-redux';

import {
  Heading3,
} from './Text';

import SummaryCard from './SummaryCard';
import Content from './Content';
import Container from './Container';
import Header from './Header';
import ModalSpinner from './ModalSpinner';
import ButtonEric from './ButtonEric';
import { Colors } from '../theme/';

import getSummary from '../actions/summary';

class SummaryView extends Component {
  componentDidMount() {
    this.props.getSummary();
  }
  render() {
    const { isLoading, summary, error } = this.props;
    const data = summary.data || [];
    const errorMessage = 'Howdy! Looks like you are hiding in a cave. Please connect to the internet and try again.';

    const content = error
      ? (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          padding: 10
        }}
      >
        <EvilIcons
          color={Colors.primary}
          name={'refresh'}
          size={90}
          style={{
            marginTop: -100
          }}
        />
        <Heading3
          style={{
            paddingBottom: 20
          }}
        >{errorMessage}</Heading3>
        <ButtonEric
          isDisabled={this.props.isLoading}
          isLoading={this.props.isLoading}
          onPress={() => {
            /* eslint-disable react/no-set-state */
            this.setState({ canSubmit: false });
            /* eslint-enable react/no-set-state */
            this.props.getSummary();
          }}
        >
          {'RETRY'}
        </ButtonEric>
      </View>
    ) : (<Content>{data.map((card, index) => {
      return (
        <SummaryCard
          delta={card.delta}
          key={index}
          tables={card.tables}
        />
      );
    })}</Content>);
    return (
      <Container>
        <Header
          subTitle={summary.subTitle}
          title={summary.title}
        />
        <ModalSpinner
          visible={isLoading}
        />
        {
          content
        }
      </Container>
    );
  }
}

SummaryView.propTypes = {
  error: PropTypes.bool,
  getSummary: PropTypes.func,
  isLoading: PropTypes.bool.isRequired,
  /* eslint-disable react/forbid-prop-types */
  summary: PropTypes.object
  /* eslint-enable react/forbid-prop-types */
};

export default connect((state, ownProps) => {
  return {
    error: state.summary.error,
    isLoading: state.summary.isLoading,
    summary: state.summary.data
  };
}, (dispatch) => {
  return {
    getSummary: () => {
      dispatch(getSummary());
    }
  };
})(SummaryView);
