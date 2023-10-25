import { Container, Nav, Button, Navbar as NavbarBs} from "react-bootstrap" //bs navbar
import { NavLink } from "react-router-dom"
import { useShoppingCart } from "../ context/ShoppingCartContext"


export function Navbar() {
    
    return (
        <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
            <Container>
                <Nav className ="me-auto" >
                    <Nav.Link to={"/"} as = {NavLink}>Home</Nav.Link>
                    <Nav.Link to={"/about"} as = {NavLink}>About</Nav.Link>
                    <Nav.Link to={"/store"} as = {NavLink}>Store</Nav.Link>
              </Nav>
              <Button style = {{ width: "3rem", height: "3rem", position: "relative"}} variant = "outline-primary">
                <div className="bg-danger d-flex justify-content-center align-items-center rounded-circle" 
                     style={{ 
                     color: "white",
                     width: "1.5rem", 
                     height: "1.5rem", 
                     position: "absolute", 
                     bottom: 0,
                     right: 0,
                     transform: "translate(50%, 20%)"
                     }}>2</div>
              </Button>
            </Container>
        </NavbarBs>
    )
}