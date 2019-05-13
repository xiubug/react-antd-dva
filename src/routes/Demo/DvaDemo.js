import React, { Component } from 'react';
import { connect } from 'dva';
import styles from './DvaDemo.less';
import ProductList from './ProductList';

@connect(state => ({
  products: state.products,
}))
export default class DvaDemo extends Component {
  state = {
    products: [
      { name: 'dva', id: 1 },
      { name: 'antd', id: 2 },
    ],
  };

  componentDidMount() {
  }

 handleDelete = (id) => {
   this.props.dispatch({
     type: 'products/delete',
     payload: id,
   });
 };

 render() {
   return (
     <div>
       <span className={styles['text-14']}>Dva Demo!</span>
       <h2 style={{ color: 'red' }}>Dva Demo! ProductList!</h2>
       <ProductList onDelete={this.handleDelete(event)} products={this.state.products} />
     </div>
   );
 }
}
