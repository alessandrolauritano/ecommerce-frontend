import { Button, Offcanvas, OffcanvasBody, OffcanvasHeader, OffcanvasTitle, Stack } from "react-bootstrap";
import { useShoppingCart } from "../ context/ShoppingCartContext";
import { SideCartItem } from "./SideCartItem";

export function SideCart(){
    const {isOpen, closeCart, cartItems} = useShoppingCart();
    return(
        <Offcanvas show={isOpen} onHide={closeCart} placement="end">
            <OffcanvasHeader closeButton>
                <OffcanvasTitle>Cart</OffcanvasTitle>
            </OffcanvasHeader>
            <OffcanvasBody>
                <Stack gap={3}>
                    {cartItems.map(item => (
                        <SideCartItem key={item.id}{...item}/>
                    ))}
                </Stack>
            </OffcanvasBody>
        </Offcanvas>
    )
}