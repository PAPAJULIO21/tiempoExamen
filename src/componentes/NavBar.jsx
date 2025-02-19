import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useNavigate } from "react-router-dom";


function NavBar() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
    
    
    
      useEffect(() => {
        fetch("/weather.json")
          .then((response) => response.json())
          .then((data) => {
            setData(data.ciudades);
      
          })
          .catch((error) => console.error("Error fetching JSON:", error));
      }, []);



  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <DropdownButton id="dropdown-basic-button" title="Ciudades">
            {data.map((item, index) => ( 
              <Dropdown.Item onClick={()=>navigate("/detalle", { state: { item } })} style={{padding : "20px"}} key={index}>{item.nombre}</Dropdown.Item>
            ))}
            </DropdownButton>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;