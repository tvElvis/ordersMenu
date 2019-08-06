import React, { Component } from 'react'

import OrderList from '../../component/orderList/orderList';

import URL from '../../config';


class OrdersMenu extends Component {
  state = {
    isLoading: false,
    orders: []
  }

  componentDidMount() {
    this.toggleLoadingStatus();
    fetch(`${URL}/order`, {
      method: 'GET',
    })
    .then(response => response.json())
    .catch(error => console.error('Error:', error))
    .then(response => this.setState({
      orders: response
    }));

    this.toggleLoadingStatus();
  }

  toggleLoadingStatus = () => {
    this.setState({
      isLoading: !this.state.isLoading,
    });
  }

  render() {
    console.log(this.state.orders)
    return (
      <OrderList orders={this.state.orders}/>
    )
  }
}

export default OrdersMenu;