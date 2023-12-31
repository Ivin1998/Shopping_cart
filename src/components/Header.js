import { Badge, Button, Container, Dropdown, FormControl, Nav, Navbar } from 'react-bootstrap';
import '../App.css';
import {FaShoppingCart} from "react-icons/fa";
import { Link } from 'react-router-dom';
import { Cartstate } from '../context/Context';
import { AiFillDelete } from 'react-icons/ai';

const Header =()=> {

  const {
    state:{cart},
    dispatch,productDispatch
  }= Cartstate();
  return <Navbar bg='dark' variant='dark' style={{height:80}}>
    <Container>
      <Navbar.Brand>
      <Link to='/'>Shopping Cart</Link>
      </Navbar.Brand>
      <Navbar.Text>
        <FormControl style={{width:500}} placeholder='Search a product' className='search'
        onChange={(e)=>{
          productDispatch({
            type:"FILTER_BY_SEARCH",
            payload:e.target.value,
          })
        }}/>
      </Navbar.Text>
      <Nav>
        <Dropdown>
          <Dropdown.Toggle variant='success'>
            <FaShoppingCart/>
            <Badge>{cart.length}</Badge>
          </Dropdown.Toggle> 
          <Dropdown.Menu style={{minWidth:200,right: 0, left: 'auto'}}>
            { cart.length > 0 ?( <>
            {cart.map((prod)=>(
              <span className='cartItem' key={prod.id}><img src={prod.image} className='cartItemImg' alt={prod.productName}/>
              <div className='cartItemDetail'>
                <span>{prod.productName}</span>
                <span> $ {prod.price.split(".")[0]}</span>
              </div>
              <AiFillDelete 
              fontSize="20px"
              style={{cursor:"pointer"}}
              onClick={()=>
              dispatch({
                type:"REMOVE_FROM_CART",
                payload: prod,
              })
              }
              />
              </span>
              
            ))}
            <Link to='/cart'><Button style={{width:'95%',margin:"0 5px"}}>Go to cart</Button></Link>
            </>):
            (<span style={{padding:10}}>Cart is empty!</span>)  }   
          </Dropdown.Menu>
        </Dropdown>
      </Nav>
    </Container>
    </Navbar>
}

export default Header;
