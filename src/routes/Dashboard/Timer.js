import React, { Component } from 'react';
import { connect } from 'dva';

@connect(state => ({
  chart: state.chart,
}))
export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick() {
    this.setState(prevState => ({
      seconds: prevState.seconds + 1,
    }));
  }

  render() {
    return (
      <div>
        Timer count { this.state.seconds }
      </div>
    );
  }
}
