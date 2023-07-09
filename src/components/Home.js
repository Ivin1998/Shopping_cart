import React from 'react';
import { Cartstate } from '../context/Context';
import SingleProduct from './SingleProduct';
import './styles.css';
import Filters from './Filters';

const Home = () => {

  const {state:{products},
  productState:{byStock,byFastDelivery,sort,byRating,searchQuery}
  } = Cartstate();

  const transformProducts = ()=>{
    let sortedProducts = products;

    if(sort){
      sortedProducts=sortedProducts.sort((a,b)=>(
        sort==='lowTOHigh'?a.price-b.price:b.price-a.price
      ));
    }
    if(!byStock){
      sortedProducts = sortedProducts.filter((prod)=>prod.instock)
    }
    if(byFastDelivery){
      sortedProducts = sortedProducts.filter((prod)=>prod.fastDelivery)
    }
    if(byRating){
      sortedProducts = sortedProducts.filter((prod)=>prod.ratings===byRating)
    }
    if(searchQuery){
      sortedProducts = sortedProducts.filter((prod)=>prod.productName.toLowerCase().includes(searchQuery));
    }
    return sortedProducts;
  }

  return (
    <div className='home'>
      <Filters/>
      <div className='productcontainer'>
        {transformProducts().map((prod)=>{
          return <SingleProduct prod={prod} key={prod.id}/>
      } )}
      </div>
    </div>
  )
}

export default Home;