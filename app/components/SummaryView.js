import React, {
  Component,
  PropTypes
} from 'react';

import {
  InteractionManager
} from 'react-native';

import { connect } from 'react-redux';

import SummaryCard from './SummaryCard';
import Content from './Content';
import Container from './Container';
import Header from './Header';
import ModalSpinner from './ModalSpinner';
import MessageView from './MessageView';
import getSummary from '../actions/summary';

class SummaryView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRefreshing: false,
      isLoading: false,
      summary: {}
    };
    this.onRefresh = this.onRefresh.bind(this);
  }
  componentDidMount() {
    console.log('getSummary componentDidMount');
    InteractionManager.runAfterInteractions(() => {
      this.props.getSummary();
    });
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.isLoading !== this.props.isLoading) {
      if (this.state.isRefreshing === false) {
        this.setState({
          isLoading: nextProps.isLoading,
          summary: nextProps.summary
        });
      }

      if (this.state.isRefreshing === true) {
        if (nextProps.isLoading === false) {
          this.setState({
            isRefreshing: false,
            isLoading: false,
            summary: nextProps.summary
          });
        }
      }
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.isRefreshing === true) {
      if (nextProps.isLoading === true && nextProps.error === false) {
        return false;
      }
    }

    const currentMetrics = (this.state.summary && this.state.summary.subTitle) || '';
    const nextMetrics = (nextProps.summary && nextProps.summary.subTitle) || '';
    const currentOrientation = this.props.orientation;
    const nextOrientation = nextProps.orientation;
    const currentRefreshing = this.state.isRefreshing;
    const nextRefreshing = nextState.isRefreshing;
    const currentLoading = this.props.isLoading;
    const nextLoading = nextProps.isLoading;
    const currentError = this.props.error;
    const nextError = nextProps.error;
    if (currentMetrics === nextMetrics
      && currentOrientation === nextOrientation
      && currentRefreshing === nextRefreshing
      && currentLoading === nextLoading
      && currentError === nextError) {
      return false;
    }

    return true;
  }
  onRefresh() {
    /* eslint-disable react/no-set-state */
    this.setState({ isRefreshing: true });
    /* eslint-enable react/no-set-state */
    this.props.getSummary();
  }
  render() {
    const { error } = this.props;
    const summary = this.state.summary;
    const data = summary.data || [];
    const errorMessage = 'Howdy! Looks like you are hiding in a cave. Please connect to the internet and try again.';
    const onRefresh = this.onRefresh;
    const content = error
      ? (
        <MessageView
          buttonIsDisabled={this.state.isLoading}
          buttonIsLoading={this.state.isLoading}
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
    ) : (
      <Content
        isRefreshing={this.state.isRefreshing}
        onRefresh={onRefresh}
      >
        {data.map((card, index) => {
          return (
            <SummaryCard
              delta={card.delta}
              key={index}
              orientation={this.props.orientation}
              tables={card.tables}
            />
          );
        })}
      </Content>);
    return (
      <Container>
        <Header
          subTitle={summary.subTitle}
          title={summary.title}
        />
        <ModalSpinner
          visible={this.state.isLoading}
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
  orientation: PropTypes.string,
  /* eslint-disable react/forbid-prop-types */
  summary: PropTypes.object
  /* eslint-enable react/forbid-prop-types */
};

export default connect((state, ownProps) => {
  return {
    error: state.summary.error,
    isLoading: state.summary.isLoading,
    navigator: ownProps.navigator,
    orientation: state.orientation.orientation,
    summary: state.summary.data
  };
}, (dispatch) => {
  return {
    getSummary: () => {
      dispatch(getSummary());
    }
  };
})(SummaryView);
