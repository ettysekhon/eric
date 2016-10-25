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
import getSummary from '../actions/summary';


class SummaryView extends Component {
  componentDidMount() {
    this.props.getSummary();
  }
  render() {
    const { isLoading, summary } = this.props;
    const data = summary.data || [];
    const cards = data.map((card, index) => {
      return (
        <SummaryCard
          delta={card.delta}
          key={index}
          tables={card.tables}
        />
      );
    });
    return (
      <Container>
        <Header
          subTitle={summary.subTitle}
          title={summary.title}
        />
        <ModalSpinner
          visible={isLoading}
        />
        <Content>
          {
            cards
          }
        </Content>
      </Container>
    );
  }
}

SummaryView.propTypes = {
  getSummary: PropTypes.func,
  isLoading: PropTypes.bool.isRequired,
  /* eslint-disable react/forbid-prop-types */
  summary: PropTypes.object
  /* eslint-enable react/forbid-prop-types */
};

export default connect((state, ownProps) => {
  return {
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
