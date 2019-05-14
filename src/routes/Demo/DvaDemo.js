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
  state = {};

  componentDidMount() {
  }

 handleDelete = (id) => {
   this.props.dispatch({
     type: 'products/deleteProductById',
     payload: id,
   });
 };

 render() {
   return (
     <div>
       <span className="text-14">Dva Demo!</span>
       <h2 className="text-red">Dva Demo! ProductList!</h2>
       <ProductList onDelete={this.handleDelete} products={this.props.products} />
     </div>
   );
 }
}
