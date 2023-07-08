import React, { createContext, useContext, useReducer } from 'react';
import { faker } from '@faker-js/faker';
import { cartReducer } from './Reducer';


const Cart = createContext();
faker.seed(95);

const Context = ({children}) => {
    const products = [...Array(30)].map(()=>({
      id: faker.string.uuid(),
      productName : faker.commerce.product(),
      price : faker.commerce.price(),
      image : faker.image.url(),
      instock : faker.helpers.arrayElement([0,5,10,12,6]),
      fastDelivery : faker.datatype.boolean(),
      ratings : faker.helpers.arrayElement([1,2,3,4,5]),
    }));

    const [state,dispatch] = useReducer(cartReducer,{ 
      products: products,
      cart:[]
    })
    

  return (
   <Cart.Provider value={{state,dispatch}}>
    {children}   {/* App in index.js is the children */}
    </Cart.Provider>
  )
}

export default Context;

export const Cartstate = ()=>{
  return useContext(Cart);
}