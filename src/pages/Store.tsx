import { Col, Row } from "react-bootstrap"
import jsonItems from "../data/items.json"
import { StoreItem } from "../components/StoreItem"

export function Store(){
    return (
        <>
        <h1>Store</h1>
        <Row xs={1} md={2} lg={3} className="g-3"> {/*gap of 3 in both directions */}
            {jsonItems.map(item => (
                <Col key={item.id}><StoreItem{...item}/></Col>
            ))}
        </Row>
        </>
    )
}