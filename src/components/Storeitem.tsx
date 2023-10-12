import { Button, Card } from "react-bootstrap"
type StoreItemProps = {
    id: number,
    name: string,
    price: number,
    imgUrl: string
}

export function StoreItem({ id, name, price, imgUrl }: StoreItemProps)
{
    const quantity = 1;
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
            <Button className = "w-100"> + Add To Cart</Button>
           ): 
           <div>
            <div>
                Hello
            </div>
            Bye
            </div>} 
            
        </div>
    </Card.Body>
</Card>
)
}