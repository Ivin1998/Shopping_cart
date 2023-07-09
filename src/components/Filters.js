import { Button, Form } from 'react-bootstrap';
import Rating from './Rating';
import { Cartstate } from '../context/Context';

const Filters = () => {

    const{productState:{byStock,byFastDelivery,sort,byRating}
    ,productDispatch} = Cartstate();

    console.log({byStock,sort,byFastDelivery,byRating});

  return (
    <div className='filters'>
        <span className='title'>Filter Products</span>
    <span>
        <Form.Check
        inline 
        label="Ascending"
        name="group1"
        type="radio"
        id={`inline-1`} 
        onChange={()=>
        productDispatch({
            type:'SORT_BY_PRICE',
            payload:"lowTOHigh"
        })}
        
        />
        </span>
        <span>
        <Form.Check
        inline 
        label="Descending"
        name="group1"
        type="radio"
        id={`inline-2`}
        onChange={()=>
        productDispatch({
            type:'SORT_BY_PRICE',
            payload:'highTOLOW'
        })
        }
        />
    </span>
    <span>
        <Form.Check
        inline 
        label="Fast Delivery Only"
        name="group1"
        type="radio"
        id={`inline-2`}
        onChange={()=>productDispatch({
            type:'FILTER_BY_DELIVERY' 
        })} />  
    </span>
    <span>
        <Form.Check
        inline 
        label="Include Out of Stock"
        name="group1"
        type="checkbox"
        id={`inline-3`} 
        onChange={()=>productDispatch({
            type:'FILTER_BY_STOCK'  
        })}
        />
    </span>
    <span>
        <label style={{padding:10}}>Rating: </label>
        <Rating rating={byRating} onClick={(e)=>
            productDispatch({
            type:"FILTER_BY_RATING",
            payload:e,
        })} style={{cursor:"pointer"}}/>
    </span>
    <Button variant="light"
    onClick={()=>productDispatch({
        type:"CLEAR_FILTERS"
    })}>Clear Filters</Button>
    </div>
  )
}

export default Filters;