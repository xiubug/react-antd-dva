import React, { PureComponent } from 'react';
import { connect } from 'dva';

@connect(state => ({
  monitor: state.monitor,
}))
export default class BasicForms extends PureComponent {
  state = {}

  componentDidMount() {}

  render() {
    return (
      <div>
      基础表单
      </div>
    );
  }
}
