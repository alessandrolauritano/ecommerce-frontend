import { Button, Offcanvas, OffcanvasBody, OffcanvasHeader, OffcanvasTitle, Stack } from "react-bootstrap";
import { useShoppingCart } from "../ context/ShoppingCartContext";
import { SideCartItem } from "./SideCartItem";

export function SideCart(){
    const {isOpen, closeCart, cartItems, cartQuantity} = useShoppingCart();
    return(
        <Offcanvas show={isOpen} onHide={closeCart} placement="end">
            <OffcanvasHeader closeButton>
                <OffcanvasTitle>Cart</OffcanvasTitle>
            </OffcanvasHeader>
            <OffcanvasBody>
            {cartQuantity === 0 ? (
          <div className="fs-3 d-flex align-items-center">Your cart is empty!</div>
        ) : (
          <Stack gap={3}>
            {cartItems.map((item) => (
              <SideCartItem key={item.id} {...item} />
            ))}
          </Stack>
        )}
            </OffcanvasBody>
        </Offcanvas>
    )
}