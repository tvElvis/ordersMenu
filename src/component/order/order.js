import React from 'react'

import styles from './order.css'

function Order(props) {
  return (
    <div className={styles.Order}>
      {`${props.order.docNum}, ${props.order.docDate}, ${props.order.description}`}
    </div>
  )
}

export default Order
