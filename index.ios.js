import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';

import {
  Text
} from './app/components/Text';

import Card from './app/components/Card';
import Content from './app/components/Content';
import Container from './app/components/Container';
import Header from './app/components/Header';

const summary = {
  title: 'MONDAY',
  subTitle: '17:00, 09 May 2016',
  data: [{
    title: 'TOTAL ORDERS',
    table: [
      ['09 May 16', '02 May 16', '11 May 15', '18 May 15'],
      ['119,365', '89,361', '119,365', '89,361']
    ],
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
}


class Eric extends Component {
  render() {
    return (
      <Container>
        <Header
          subTitle={summary.subTitle}
          title={summary.title}
        />
        <Content>
          <Card
            tableData={summary.data[0].table}
            summaryData={summary.data[0].delta}
            title={summary.data[0].title} />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Eric', () => Eric);
