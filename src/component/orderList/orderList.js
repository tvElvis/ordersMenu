import React from 'react';

import Order from '../order/order';

function OrderList({ orders }) {
  const orderList = orders.map(order => <Order order={order} key={order.id} />)
  return (
    <div>
      {orderList}
    </div>
  )
}

export default OrderList;
