import React, { PureComponent } from 'react';
import { connect } from 'dva';

@connect(state => ({
  monitor: state.monitor,
}))
export default class Workplace extends PureComponent {
  state = {}

  componentDidMount() {}

  render() {
    return (
      <div>
      工作台
      </div>
    );
  }
}
