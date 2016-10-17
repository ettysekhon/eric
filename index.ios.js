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

class Eric extends Component {
  render() {
    return (
      <Container>
        <Header
          subTitle={'17:00, 09 May 2016'}
          title={'M O N D A Y'}
        />
        <Content>
          <Card title={'TOTAL ORDERS'} />
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
