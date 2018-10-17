import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Nav from './Nav';
import DeviceInfo from 'react-native-device-info';

type Props = {};
export default class Main extends Component<Props> {
  constructor(props) {
    super(props);
    props.state = {
      username: 'test',
      password: '',
      auth_token: '',
      refresh_token: ''
    }
  }
  render() {
    return (
      <Nav />
    );
  }
}
