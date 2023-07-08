import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { Cartstate } from '../context/Context';
import Rating from './Rating';

const SingleProduct = ({prod}) => {

  const {
    state:{cart},
    dispatch}= Cartstate();
  
  return (
    <div className='products'>
        <Card>
          <Card.Img variant='top' src={prod.image} alt={prod.productName}/>
          <Card.Body>
            <Card.Title>{prod.productName}</Card.Title>
            <Card.Subtitle style={{paddingBottom:10}}>
              <span>$ {prod.price}</span>
              {prod.fastDelivery ? (
                <div>Fast Delivery</div>
              ): <div>4 days Delivery </div>}
              <Rating rating={prod.ratings}/>
            </Card.Subtitle>
            {
              cart.some((p)=>p.id===prod.id)?(<Button 
                onClick={()=>{dispatch({
                  type:'REMOVE_FROM_CART',
                  payload:prod
                })
              }}
              variant='danger'>
              Remove from cart
            </Button>):(<Button onClick={()=>{ dispatch({
              type:'ADD_TO_CART',
              payload:prod,
            })
              
            }} disabled={!prod.instock} variant='success'>
             {!prod.instock?'Out of stock':"Add to cart"}
            </Button>)
            }
            
            
          </Card.Body>
        </Card>
    </div>
  );
};
export default SingleProduct;