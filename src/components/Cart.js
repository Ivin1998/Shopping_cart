import React from 'react';
import { Cartstate } from '../context/Context';
import { ListGroup } from 'react-bootstrap';

const Cart = () => {
  const {state:{cart},dispatch}=Cartstate()
  return (
    <div className='home'>
      <div className='productcontainer'>
        <ListGroup>
          {
            cart.map((prod)=>(<div>
              <span>{prod.productName}</span>
            </div>))
          }
        </ListGroup>
      </div>
    </div>
  )
}

export default Cart;