import React, { Component } from 'react';
import { connect } from 'dva';

const rankingListData = [];
for (let i = 0; i < 7; i += 1) {
  rankingListData.push({
    title: `工专路 ${i} 号店`,
    total: 323234,
  });
}

@connect(state => ({
  chart: state.chart,
}))
export default class Analysis extends Component {
  state = {}

  componentDidMount() {}

  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'chart/clear',
    });
  }

  render() {
    console.log("render Analysis.js");
    return (
      <div>
      主页
      </div>
    );
  }
}
