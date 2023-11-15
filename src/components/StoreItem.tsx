import { Button, Card } from "react-bootstrap"
import { formatCurrency } from "../utilities/formatCurrency"
import { useShoppingCart } from "../ context/ShoppingCartContext";

type StoreItemType = {
    id: number,
    name: string,
    price: number,
    imgUrl: string
}

export function StoreItem({id, name, price, imgUrl}: StoreItemType){
    const { getItemQuantity, increaseItemQuantity, decreaseItemQuantity, removeFromCart} = useShoppingCart();
    const quantity = getItemQuantity(id);
 return (
    <Card className="h-100">
        <Card.Img src={imgUrl} height="250px" style={{objectFit: "cover"}}/>
        <Card.Body>
        <Card.Title className="mb-3 d-flex justify-content-between align-items-baseline">
            <span className="fs-3">{name}</span>
            <span className="ms-2 text-muted">{formatCurrency(price)}</span>
            </Card.Title>
            <div className="mt-auto">
                {quantity === 0? (
                <Button variant="dark" className="w-100" onClick={()=> increaseItemQuantity(id)}>+ Add</Button>
                ) : <div className="d-flex flex-column align-items-end"
                    style={{gap:"0.5rem"}}>
                     <div className="align-items-center d-flex justify-content-end"
                        style={{gap:"0.5rem"}}>
                        <Button variant="dark" onClick={()=> decreaseItemQuantity(id)}>-</Button>
                        <div>
                        <span className="fs-5">{quantity}</span> in Cart</div>
                        <Button variant="dark" onClick={()=> increaseItemQuantity(id)}>+</Button>
                     </div>
                    <Button variant="outline-danger" onClick={()=> removeFromCart(id)}>Remove</Button>
                    </div>}
            </div>
        </Card.Body>
    </Card>
 )
}