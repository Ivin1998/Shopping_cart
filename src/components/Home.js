import React from 'react';
import { Cartstate } from '../context/Context';
import SingleProduct from './SingleProduct';
import './styles.css';
import Filters from './Filters';

const Home = () => {

  const {state:{products}} = Cartstate();

  return (
    <div className='home'>
      <Filters/>
      <div className='productcontainer'>
        {products.map((prod)=>{
          return <SingleProduct prod={prod} key={prod.id}/>
} )}
      </div>
    </div>
  )
}

export default Home;