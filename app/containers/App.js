// @flow
import * as React from 'react';
import { View, Text } from 'react-desktop/macOs';

type Props = {
  children: React.Node
};

export default class App extends React.Component<Props> {
  props: Props;

  render() {
    return (
      <View
        background="#F8F8FF"
        padding="20px"
        horizontalAlignment="center"
        verticalAlignment="center"
        width="100%">
        {this.props.children}
      </View>
    );
  }
}
