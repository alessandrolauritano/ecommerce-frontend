import { ReactNode, createContext, useContext, useState } from "react";

type ShoppingCartProviderProps = {
    children: ReactNode; // Any kind of elements
}

type ShoppingCartContext = {
    getItemQuantity: (id: number) => number
    increaseQuantity: (id: number) => void
    decreaseQuantity: (id: number) => void
    removeItem: (id: number) => void
    cartItems: CartItemType[]
    cartQuantity: number
}

type CartItemType = {
    id: number
    quantity: number
}
const ShoppingCartContext = createContext({} as ShoppingCartContext) //we pass in an empty object

export function useShoppingCart(){ // Consumer
    return useContext(ShoppingCartContext)
}


export function ShoppingCartProvider ({ children } : ShoppingCartProviderProps){
    
    const [isOpen, setIsOpen] = useState(false)
    const [cartItems, setCartItems] = useState<CartItemType[]> ([])  //it's initialized with an empty array the type of the variables is CartItem 


    const cartQuantity = cartItems.reduce(
        (quantity, item) => item.quantity + quantity, 0)

    function getItemQuantity(id: number){
           return cartItems.find(item => item.id === id)?.quantity || 0
        }

    function increaseQuantity(id: number){
            setCartItems(currItems => { //current state of the Cart
                if(currItems.find(item => item.id === id) == null) //if we don't have this item in the cart
                {   
                    return [...currItems, {id, quantity: 1}] //return all the items already in the cart, plus the item witht the specific id with 1 quantity
                } else {
                    return currItems.map (item => { // if the item is already in the cart
                        if (item.id === id){ 
                            return { ...item , quantity: item.quantity + 1 } //increase the quantity by 1
                        } else {
                          return item
                        }
                    })
                }
            })
        }

        function decreaseQuantity(id: number){
            setCartItems(currItems => {
                if(currItems.find(item => item.id === id)?.quantity === 1) //if the item in the cart is 1, get rid of it
                { 
                    return currItems.filter(item => item.id != id) //return all the items already in the cart, plus the item witht the specific id with 1 quantity
                } else { 
                    return currItems.map (item => { // if the item is already in the cart
                        if (item.id === id){
                            
                            return {...item /*all the item in the quantity*/, quantity: item.quantity-1} //increase the quantity by 1
                        } else {
                          return item
                        }
                    })
                }
            })

        }

        function removeItem(id: number){
            setCartItems(currItems => {
                return currItems.filter(item => item.id != id)
            })
        }

        return <ShoppingCartContext.Provider 
        value={{ getItemQuantity, 
        increaseQuantity, 
        decreaseQuantity, 
        removeItem,
        cartItems,
        cartQuantity}}>
            {children}
        </ShoppingCartContext.Provider>
}