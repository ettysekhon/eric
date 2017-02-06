import React, {
  Component,
  PropTypes
} from 'react';

import {
  InteractionManager
} from 'react-native';

import { connect } from 'react-redux';

import SummaryCard from './SummaryCard';
import Tabs from './Tabs';
import Content from './Content';
import Container from './Container';
import Header from './Header';
import ModalSpinner from './ModalSpinner';
import MessageView from './MessageView';
import getAdobe from '../actions/adobe';
import routes from '../utils/routes';

class SummaryView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRefreshing: false,
      isLoading: false,
      summary: {},
      top10: [],
      tabs: ['SUMMARY', 'TOP 10'],
      activeTab: 'SUMMARY'
    };
    this.onRefresh = this.onRefresh.bind(this);
    this.onTabPress = this.onTabPress.bind(this);
  }
  componentDidMount() {
    InteractionManager.runAfterInteractions(() => {
      this.props.getAdobe();
    });
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.isLoading !== this.props.isLoading) {
      if (this.state.isRefreshing === false) {
        /* eslint-disable react/no-set-state */
        this.setState({
          isLoading: nextProps.isLoading,
          summary: nextProps.summary,
          top10: nextProps.top10
        });
        /* eslint-enable react/no-set-state */
      }

      if (this.state.isRefreshing === true) {
        if (nextProps.isLoading === false) {
          /* eslint-disable react/no-set-state */
          this.setState({
            isRefreshing: false,
            isLoading: false,
            summary: nextProps.summary,
            top10: nextProps.top10
          });
          /* eslint-enable react/no-set-state */
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
    const currentActiveTab = this.state.activeTab;
    const nextActiveTab = nextState.activeTab;
    if (currentMetrics === nextMetrics
      && currentOrientation === nextOrientation
      && currentRefreshing === nextRefreshing
      && currentLoading === nextLoading
      && currentError === nextError
      && currentActiveTab === nextActiveTab) {
      return false;
    }

    return true;
  }
  onRefresh() {
    /* eslint-disable react/no-set-state */
    this.setState({ isRefreshing: true });
    /* eslint-enable react/no-set-state */
    InteractionManager.runAfterInteractions(() => {
      this.props.getAdobe();
    });
  }
  onTabPress(tab) {
    /* eslint-disable react/no-set-state */
    this.setState({ activeTab: tab });
    /* eslint-enable react/no-set-state */
  }
  render() {
    const { error, orientation } = this.props;
    const { subTitle, title } = this.state.summary;
    const summary = this.state.summary.data || [];
    const top10 = this.state.top10 || [];
    const errorMessage = 'Howdy! Looks like you are hiding in a cave. Please connect to the internet and try again.';
    const onRefresh = this.onRefresh;
    const summaryCards = summary.map((card, index) => {
      const deltaData = orientation === 'PORTRAIT'
        ? card.delta
        : [];
      return (
        <SummaryCard
          delta={deltaData}
          key={index}
          orientation={this.props.orientation}
          tables={card.tables}
          type={'SUMMARY'}
        />
      );
    });
    const top10Cards = top10.map((card, index) => {
      return (
        <SummaryCard
          delta={card.delta}
          key={index}
          orientation={this.props.orientation}
          tables={card.tables}
          type={'TOP 10'}
        />
      );
    });
    const tabs = (
      <Tabs
        activeTab={this.state.activeTab}
        onPress={this.onTabPress}
        tabs={this.state.tabs}
      />
    );
    const tabContent = this.state.activeTab === 'SUMMARY'
      ? summaryCards
      : top10Cards;

    const content = error
      ? (
        <MessageView
          alternateButtonOnPress={() => {
            requestAnimationFrame(() => {
              return this.props.navigator.push({
                route: routes.SIGNIN
              });
            });
          }}
          alternateButtonText={'SIGNIN'}
          buttonIsDisabled={this.state.isLoading}
          buttonIsLoading={this.state.isLoading}
          buttonOnPress={() => {
            /* eslint-disable react/no-set-state */
            this.setState({ canSubmit: false });
            /* eslint-enable react/no-set-state */
            this.props.getAdobe();
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
        {(summary.length > 0)
          ? tabs
          : null
        }
        {
          tabContent
        }
      </Content>);
    return (
      <Container>
        <Header
          subTitle={subTitle}
          title={title}
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
  getAdobe: PropTypes.func,
  isLoading: PropTypes.bool.isRequired,
  /* eslint-disable react/forbid-prop-types */
  navigator: PropTypes.object,
  orientation: PropTypes.string
  /* eslint-enable react/forbid-prop-types */
};

export default connect((state, ownProps) => {
  return {
    error: state.adobe.error,
    isLoading: state.adobe.isLoading,
    navigator: ownProps.navigator,
    orientation: state.orientation.orientation,
    summary: state.adobe.summary,
    top10: state.adobe.top10
  };
}, (dispatch) => {
  return {
    getAdobe: () => {
      dispatch(getAdobe());
    }
  };
})(SummaryView);
