/**
 * Auth: zzh
 * Desc: hello word
 */
import React, { Component } from 'react';
import { connect } from 'dva';

@connect(state => ({
  chart: state.chart,
}))
export default class HelloMessage extends Component {
  state = {};

  componentDidMount() {}

  componentWillUnmount() {
  }

  render() {
    return (
      <div>
      Hello {this.props.name} !
      </div>
    );
  }
}
