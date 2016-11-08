import React, {
  Component,
} from 'react';

import SummaryCard from './SummaryCard';
import Content from './Content';
import Container from './Container';
import Header from './Header';
import summaryData from './metrics.json';
import mapper from '../api/mapper';

const onRefresh = () => {
  return null;
};

class SummaryView extends Component {
  constructor(props) {
    super(props);
    const data = mapper(summaryData);
    this.state = {
      summary: data
    };
  }
  render() {
    const summary = this.state.summary;
    const data = summary.data || [];
    const content = (
      <Content
        isRefreshing={false}
        onRefresh={onRefresh}
      >
        {data.map((card, index) => {
          return (
            <SummaryCard
              orientation={'PORTRAIT'}
              delta={card.delta}
              key={index}
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
        {
          content
        }
      </Container>
    );
  }
}

export default SummaryView;
