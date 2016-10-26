import React, {
  Component,
  PropTypes
} from 'react';

import { connect } from 'react-redux';

import SummaryCard from './SummaryCard';
import Content from './Content';
import Container from './Container';
import Header from './Header';
import ModalSpinner from './ModalSpinner';
import MessageView from './MessageView';
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
