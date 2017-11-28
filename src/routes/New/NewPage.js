import React, { PureComponent } from 'react';
import { connect } from 'dva';

@connect(state => ({
  project: state.project,
  activities: state.activities,
  chart: state.chart,
}))
export default class Workplace extends PureComponent {
  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <div>新页面</div>
    );
  }
}
