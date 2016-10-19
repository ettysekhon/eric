import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';

import {
  Text
} from './Text';

import SummaryCard from './SummaryCard';
import Content from './Content';
import Container from './Container';
import Header from './Header';

const summary = {
  title: 'MONDAY',
  subTitle: '17:00, 09 May 2016',
  data: [{
    tables: [{
      title: 'HOURLY UNIQUE VISITORS',
      data: [
        ['09 May 16', '02 May 16', '11 May 15', '18 May 15'],
        ['119,365', '89,361', '119,365', '89,361']
      ]
    }],
    delta: [{
      title: 'WoW',
      up: false,
      value: '-51.4%'
    }, {
      title: 'YoY',
      up: false,
      value: '-8.8%'
    }, {
      title: 'YoY(DA)',
      up: true,
      value: '13.1%'
    }]
  }, {
    tables: [{
      title: 'TOTAL ORDERS',
      data: [
        ['09 May 16', '02 May 16', '11 May 15', '18 May 15'],
        ['119,365', '89,361', '119,365', '89,361']
      ]
    }, {
      title: 'HOME DELIVERY ORDERS',
      data: [
        ['119,365', '89,361', '119,365', '89,361']
      ]
    }, {
      title: 'RESERVATIONS',
      data: [
        ['119,365', '89,361', '119,365', '89,361']
      ]
    }, {
      title: 'PAY COLLECT: ORDER',
      data: [
        ['119,365', '89,361', '119,365', '89,361']
      ]
    }],
    delta: [{
      title: 'WoW',
      up: false,
      value: '-51.4%'
    }, {
      title: 'YoY',
      up: false,
      value: '-8.8%'
    }, {
      title: 'YoY(DA)',
      up: true,
      value: '13.1%'
    }]
  }]
};

const SummaryView = () => {
  const cards = summary.data.map((card, index) => {
    return (
      <SummaryCard
        key={index}
        tables={card.tables}
        delta={card.delta}
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
}

export default SummaryView;
