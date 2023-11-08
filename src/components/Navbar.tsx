import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { AiOutlineShoppingCart } from "react-icons/ai"

export function Navbar(){
    return (
        <NavbarBs className="bg-white mb-3 shadow-sm">
            <Container>
            <Nav>
                <Nav.Link to="/" as={ NavLink }>Home</Nav.Link>
                <Nav.Link to="/about" as={NavLink}>About</Nav.Link>
                <Nav.Link to="/store" as={NavLink}>Store</Nav.Link>
            </Nav>
            <Button
            style={{ width: "3rem", height: "3rem"}} className="p-0">    
            <AiOutlineShoppingCart size={30}/>            
    
    </Button> 
            </Container>
        </NavbarBs>
    )
}