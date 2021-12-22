import React from 'react'
import { Button, Offcanvas, Nav, Navbar, Container, NavDropdown, Form, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom'



export default function Barra() {
 


  const salir=()=>{
    sessionStorage.clear()
    window.location.href="/"

  }





  return (
    


      <Navbar bg="dark" variant="dark" expand={false}>
        <Container fluid>

     
       
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
       
          
          <Navbar.Brand hidden={false} href="/" > <i className='fas fa-user'></i> Bienvenido {sessionStorage.getItem('nombre')} </Navbar.Brand>
     
          <Navbar.Brand href="#"></Navbar.Brand>
         
          <Navbar.Brand href="#"></Navbar.Brand>
          <Navbar.Brand href="#"></Navbar.Brand>
      
          
          
          <Navbar.Brand  hidden={false} href="#home" onClick={() => salir()} to="/"> <i className='fas fa-user-times'></i >Cerrar sesión</Navbar.Brand>
        
         
          
          
         
         
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="start"
          >
                 
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel"><i class="fas fa-filter"></i>Opciones</Offcanvas.Title>
            </Offcanvas.Header>
          
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
              
                  <NavDropdown  title="Busqueda de repositorios  " id="offcanvasNavbarDropdown"  >
                 
                  <NavDropdown.Item ><i class="fas fa-user-plus"></i>  <Link className="navbar-brand" to="/principal">Buscar Git</Link></NavDropdown.Item>
               
                

                </NavDropdown>
                
               
                <NavDropdown title="Derechos de autor" id="offcanvasNavbarDropdown">
                  <NavDropdown.Item > <i class="fas fa-book-open"></i><Link className="navbar-brand" to="/derechos"> Creditos</Link></NavDropdown.Item>
              
                 
                </NavDropdown>
               
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Offcanvas.Body>

           
          </Navbar.Offcanvas>
          
     
      

        </Container>



      </Navbar>



 
    
  )
}
