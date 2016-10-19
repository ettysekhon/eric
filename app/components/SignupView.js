import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';

import {
  BackgroundImage
} from './BackgroundImage';

import Container from './Container';

const SignupView = () => {
  return (
    <Container>
      <BackgroundImage />
    </Container>
  );
}

export default SignupView;
