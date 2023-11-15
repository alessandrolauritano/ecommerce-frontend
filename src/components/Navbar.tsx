import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { useShoppingCart } from "../ context/ShoppingCartContext"
import { SideCart } from "./SideCart";

export function Navbar(){
    const { cartQuantity, openCart, closeCart } = useShoppingCart();
    return (
        <NavbarBs sticky="top" className="bg-white mb-3 shadow-sm">
            <Container>
            <Nav>
                <Nav.Link to="/" as={ NavLink }>Home</Nav.Link>
                <Nav.Link to="/about" as={NavLink}>About</Nav.Link>
                <Nav.Link to="/store" as={NavLink}>Store</Nav.Link>
            </Nav>
            <Button
            onClick={openCart}
            style={{ width: "3rem", height: "3rem", position:"relative"}} 
            className="p-0" 
            variant="outline-dark">    
            <AiOutlineShoppingCart className="" style={{}} size={30}/>            
            <div className="bg-black rounded-circle d-flex align-items-center justify-content-center" 
            style=
            {{position: "absolute", 
                width: "1.5rem", 
                height:"1.5rem", 
                color:"white", 
                transform:"translate(-30%, -25%)"}}>{cartQuantity}</div>
            </Button> 
            </Container>
        <SideCart></SideCart>
        </NavbarBs>
    )
}