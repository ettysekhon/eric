import React from 'react';

import SummaryCard from './SummaryCard';
import Content from './Content';
import Container from './Container';
import Header from './Header';
import summary from '../api/summary';

const SummaryView = () => {
  const cards = summary.data.map((card, index) => {
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
      <Content>
        {
          cards
        }
      </Content>
    </Container>
  );
};

export default SummaryView;
