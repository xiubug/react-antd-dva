import React, { Component } from 'react';
import { connect } from 'dva';

@connect(state => ({
  chart: state.chart,
}))
export default class Analysis extends Component {
  state = {}

  componentDidMount() {}

  componentWillUnmount() {
  }

  render() {
    return (
      <div>
      分析页
      </div>
    );
  }
}
