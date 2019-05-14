/**
 * Auth: zzh
 * Desc: dva 官网demo
 */
import React, { Component } from 'react';
import { connect } from 'dva';
import './DvaDemo.less';
import ProductList from './ProductList';

@connect(
  state => ({
    products: state.products,
  })
)
export default class DvaDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

  componentDidMount() {
  }

  handleAdd = () => {
    const param = {
      name: this.state.inputValue,
      id: this.props.products.length + 1,
    };
    this.props.dispatch({
      type: 'products/addProduct',
      payload: { ...param },
    });
  };

  handleDelete = (id) => {
    this.props.dispatch({
      type: 'products/deleteProductById',
      payload: id,
    });
  };

  render() {
    return (
      <div>
        <input onChange={e => this.setState({ inputValue: e.target.value })} />
        <button onClick={this.handleAdd}>Add</button>
        <h2 className="text-red">Dva Demo! ProductList!</h2>
        <ProductList onDelete={this.handleDelete} products={this.props.products} />
      </div>
    );
  }
}
