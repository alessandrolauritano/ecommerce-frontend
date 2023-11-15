import { Button, Stack } from "react-bootstrap"
import jsonItems from "../data/items.json"
import { formatCurrency } from "../utilities/formatCurrency"
import { useShoppingCart } from "../ context/ShoppingCartContext"

    type SideCartItemType ={
    id: number
    quantity: number
}
export function SideCartItem({id, quantity}: SideCartItemType){
    const {removeFromCart} = useShoppingCart();
    const item = jsonItems.find(i => i.id === id)
    if (item===undefined) return undefined
    return(
        <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
            <img src={item.imgUrl} style={{width: "130px", height: "75px", objectFit:"cover"}}/>
            
            <div className="me-auto">
                <div>{item.name}
                {quantity>1 && <span className="text-muted" style={{fontSize:"0.9rem"}}> x{quantity}</span>}
                </div>
            <div>
                {formatCurrency(item.price)}
            </div>
             </div>
             <div>{formatCurrency(item.price * quantity)}
             </div>
             <Button variant="outline-danger" size="sm" onClick={() => removeFromCart(id)}>&times;</Button>
        </Stack>
    )
}