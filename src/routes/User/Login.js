import React, { Component } from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import { Form, Input, Button, Icon } from 'antd';
import Store from 'store';
import Config from '../../common/config';
import styles from './Login.less';

const FormItem = Form.Item;

@connect(state => ({
  login: state.login,
  messageStatus: state.global.messageStatus,
}))
@Form.create()

export default class Login extends Component {
  state = {
    type: 'account',
  }
  componentWillReceiveProps(nextProps) {
    // 登录成功
    if (nextProps.login.status === 'ok') {
      const userInfo = nextProps.login.info;
      // 模拟登录成功用户Token，2个小时超时哦
      Store.set(Config.USER_TOKEN, (new Date()).getTime());
      Store.set(Config.USER_ID, userInfo[0].id); // 存储登录信息

      this.props.dispatch(routerRedux.push('/'));
    }

    // 登录失败
    if (nextProps.login.status === 'error') {
      this.props.dispatch({
        type: 'global/changeMessage',
        payload: '账户或密码错误',
      });
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.messageStatus) return; // 弹窗未完全关闭禁止再次提交
    const { type } = this.state;
    this.props.form.validateFields({ force: true },
      (err, values) => {
        if (!err) {
          this.props.dispatch({
            type: `login/${type}Submit`,
            payload: values,
          });
        }
      }
    );
  }

  render() {
    const { form, login } = this.props;
    const { getFieldDecorator } = form;
    const { type } = this.state;
    return (
      <div className={styles['login-form']}>
        <div className={styles['login-logo']}>
          <img alt="" src="https://t.alipayobjects.com/images/rmsweb/T1B9hfXcdvXXXXXXXX.svg" />
          <span>Ant Design</span>
        </div>
        <Form onSubmit={this.handleSubmit}>
          <FormItem>
            {getFieldDecorator('username', {
              rules: [{
                required: type === 'account', message: '请输入账户名！',
              }],
            })(
              <Input
                prefix={<Icon type="user" className={styles.prefixIcon} />}
                placeholder="sosout"
              />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{
                required: type === 'account', message: '请输入密码！',
              }],
            })(
              <Input
                prefix={<Icon type="lock" className={styles.prefixIcon} />}
                type="password"
                placeholder="sosout"
              />
            )}
          </FormItem>
          <FormItem className={styles.additional}>
            <Button loading={login.submitting} className={styles.submit} type="primary" htmlType="submit">
              登录
            </Button>
          </FormItem>
          <div className={styles['login-account']}>
            <span>账号：sosout</span>
            <span>密码：sosout</span>
          </div>
        </Form>
      </div>
    );
  }
}
