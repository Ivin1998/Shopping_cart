import { Badge, Container, Dropdown, FormControl, Nav, Navbar } from 'react-bootstrap';
import '../App.css';
import {FaShoppingCart} from "react-icons/fa";

const Header =()=> {
  return <Navbar bg='dark' variant='dark' style={{height:80}}>
    <Container>
      <Navbar.Brand>
       <a href='/'>Shopping Cart</a>
      </Navbar.Brand>
      <Navbar.Text>
        <FormControl style={{width:500}} placeholder='Search a product'
        className='m-auto'/>
      </Navbar.Text>
      <Nav>
        <Dropdown alignRight>
          <Dropdown.Toggle variant='success'>
            <FaShoppingCart/>
            <Badge>{10}</Badge>
          </Dropdown.Toggle>
          <Dropdown.Menu style={{minWidth:200}}>
            <span style={{padding:10}}>Cart is empty!</span>
          </Dropdown.Menu>
        </Dropdown>
      </Nav>
    </Container>
    </Navbar>
}

export default Header;
