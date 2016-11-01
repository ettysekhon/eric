import React, {
  Component,
  PropTypes
} from 'react';

import {
  AppState
} from 'react-native';

import { connect } from 'react-redux';

import SummaryCard from './SummaryCard';
import Content from './Content';
import Container from './Container';
import Header from './Header';
import ModalSpinner from './ModalSpinner';
import MessageView from './MessageView';
import getSummary from '../actions/summary';
import routes from '../utils/routes';

class SummaryView extends Component {
  componentDidMount() {
    this.props.getSummary();
    this.handleAppStateChange = this.handleAppStateChange.bind(this);
    AppState.addEventListener('change', this.handleAppStateChange);
  }
  componentWillUnmount() {
    AppState.removeEventListener('change', this.handleAppStateChange);
  }
  handleAppStateChange(currentAppState) {
    // TODO: update app state to log user out too
    if (currentAppState === 'active') {
      const { navigator } = this.props;
      if (navigator) {
        requestAnimationFrame(() => {
          return navigator.push({
            route: routes.SIGNUP
          });
        });
      }
    }
  }
  render() {
    const { isLoading, summary, error } = this.props;
    const data = summary.data || [];
    const errorMessage = 'Howdy! Looks like you are hiding in a cave. Please connect to the internet and try again.';

    const content = error
      ? (
        <MessageView
          buttonIsDisabled={this.props.isLoading}
          buttonIsLoading={this.props.isLoading}
          buttonOnPress={() => {
            /* eslint-disable react/no-set-state */
            this.setState({ canSubmit: false });
            /* eslint-enable react/no-set-state */
            this.props.getSummary();
          }}
          buttonText={'RETRY'}
          icon={'refresh'}
          message={errorMessage}
        />
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
  navigator: PropTypes.object.isRequired,
  summary: PropTypes.object
  /* eslint-enable react/forbid-prop-types */
};

export default connect((state, ownProps) => {
  return {
    error: state.summary.error,
    isLoading: state.summary.isLoading,
    navigator: ownProps.navigator,
    summary: state.summary.data
  };
}, (dispatch) => {
  return {
    getSummary: () => {
      dispatch(getSummary());
    }
  };
})(SummaryView);
