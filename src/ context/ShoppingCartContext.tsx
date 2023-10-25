import { DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_FORM_ACTIONS, ReactNode, createContext, useContext, useState } from "react";

type ShoppingCartProviderProps = {
    children: ReactNode; // Any kind of elements
}

type ShoppingCartContext = {
    getItemQuantity: (id: number) => number
    increaseQuantity: (id: number) => void
    decreaseQuantity: (id: number) => void
    removeItem: (id: number) => void
}

type CartItem = {
    id: number
    quantity: number
}
const ShoppingCartContext = createContext({} as ShoppingCartContext) //we pass in an empty object

export function useShoppingCart(){ //to use the Shopping cart context
    return useContext(ShoppingCartContext)
}


export function ShoppingCartProvider ({ children } : ShoppingCartProviderProps){
        const [cartItems, setCartItems] = useState<CartItem[]>([])
        
        function getItemQuantity(id: number){
           return cartItems.find(item => item.id === id)?.quantity || 0
        }

        function increaseQuantity(id: number){
            setCartItems(currItems => {
                if(currItems.find(item => item.id === id) == null) //if we don't have this item in the cart
                {
                    return [...currItems, {id, quantity: 1}] //return all the items already in the cart, plus the item witht the specific id with 1 quantity
                } else {
                    return currItems.map (item => { // if the item is already in the cart
                        if (item.id === id){
                            return {...item /*all the item in the quantity*/, quantity: item.quantity + 1} //decrease the quantity by 1
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

        return <ShoppingCartContext.Provider value={{ getItemQuantity, increaseQuantity, decreaseQuantity, removeItem}}>
            {children}
        </ShoppingCartContext.Provider>
}