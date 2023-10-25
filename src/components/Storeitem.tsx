import { Button, Card } from "react-bootstrap"
import { useShoppingCart } from "../ context/ShoppingCartContext"

type StoreItemProps = {
    id: number,
    name: string,
    price: number,
    imgUrl: string
}

export function StoreItem({ id, name, price, imgUrl }: StoreItemProps){
    const { getItemQuantity, increaseQuantity, decreaseQuantity, removeItem } = useShoppingCart();
    const quantity = getItemQuantity(id);
    return (
    <Card>
    <Card.Img 
    variant="top" src={imgUrl} 
    height="200px" 
    style={{ objectFit: "cover"}}
    />
    <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
            <span className="fs-2">{name}</span>
            <span className="ms-2 text-muted">${price}</span>
        </Card.Title>
        <div className="mt-auto">
        { quantity === 0 ? (
            <Button className = "w-100" onClick={() => increaseQuantity(id)}> + Add To Cart</Button>
           ): 
           <div className="d-flex flex-column align-items-center">
            <div className="d-flex align-items-center" style={{gap:"1rem"}}>  
            <Button onClick={() => decreaseQuantity(id)}>-</Button><div><span>{quantity} in cart</span></div> <Button onClick={() => increaseQuantity(id)}>+</Button> </div>
            <Button variant="danger" size="sm" onClick={() => removeItem(id)}>Remove</Button>
            </div>
            } 
            
        </div>
    </Card.Body>
</Card>
)
}