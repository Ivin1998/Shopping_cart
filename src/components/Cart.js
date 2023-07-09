import React, { useEffect, useState } from 'react';
import Image from 'react-bootstrap/Image';
import { Cartstate } from '../context/Context';
import { Button, Col, Form, ListGroup, Row } from 'react-bootstrap';
import Rating from './Rating';
import { AiFillDelete } from 'react-icons/ai';

const Cart = () => {

  const {state:{cart},dispatch}=Cartstate();
  const[total,setTotal]= useState();

  useEffect(()=>{
   setTotal(cart.reduce((acc,current)=>acc+Number(current.price)*current.qty,0))
  },[cart]);

  return (
    <div className='home'>
      <div className='productcontainer'>
        <ListGroup>
          {
            cart.map((prod)=>(
              <ListGroup.Item key={prod.id}>
             <Row>
             <Col md={2}>
               <Image src={prod.image} alt={prod.productName} fluid rounded/>
              </Col>
              <Col md={2}>
                <span>{prod.productName}</span>
              </Col>
              <Col md={2}>
              <span>{prod.price}</span>
              </Col>
              <Col md={2}>
               <Rating rating={prod.ratings} />
              </Col>
              <Col md={2}>
                <Form.Select value={prod.qty}
                onChange={(e)=>dispatch({
                  type:"CHANGE_CART_QTY",
                  payload:{
                    id:prod.id,
                    qty:e.target.value
                  }
                })}
                >          {/* qty in our cart  */}
                {[...Array(prod.instock).keys()].map((x)=>(
                  <option key={x+1}>{x+1}</option>
                ))
                }
                </Form.Select>
              </Col>
              <Col md={2}>
                <Button
                type="button"
                variant="light"
                onClick={()=>dispatch(
                  {
                    type: "REMOVE_FROM_CART",
                   payload: prod,
                }
                )}>
                <AiFillDelete fontSize="20px"/>
                </Button>
              </Col>
             </Row>
             </ListGroup.Item>
            ))
          }
        </ListGroup>
        </div>
        <div className='filters summary'>
            <span className='title'> Subtotal ({cart.length}) items</span>
            <span style={{fontWeight:700,fontSize:20}}>Total: ${total}</span>
        
      </div>
    </div>
  )
}

export default Cart;