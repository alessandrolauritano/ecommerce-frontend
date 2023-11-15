import { useContext, createContext, ReactNode, useState } from "react"


type ShoppingCartContex={       //This is the structure of the context
    getItemQuantity: (id: number) => number,
    increaseItemQuantity: (id: number) => void,
    decreaseItemQuantity: (id: number) => void,
    removeFromCart: (id: number) => void,
    cartQuantity: number,
    openCart: () => void,
    closeCart: () => void,
    cartItems: CartItem[],
    isOpen: boolean
}

const ShoppingCartContext = createContext({} as  ShoppingCartContex) // empty object

export function useShoppingCart(){ //This is to get/consume the context in other components
    return useContext(ShoppingCartContext) //So the basic concept is that all the functions of this context
}                                           //Can be used by other components

type ShoppingCartProviderProps={
    children: ReactNode;
}
type CartItem={
    id: number,
    quantity: number
}
export function ShoppingCartProvider({children}: ShoppingCartProviderProps){ //implementing the provider
    const[cartItems, setCartItems] = useState<CartItem[]>([]);
    const[isOpen, setIsOpen] = useState<boolean>(false);
    const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0)

    function getItemQuantity(id: number){
        return cartItems.find(item => item.id === id)?.quantity || 0
    }
    function increaseItemQuantity(id: number){
        setCartItems(itemsIntheCart => {
            if(itemsIntheCart.find(item => item.id === id)==null){
                return [...itemsIntheCart, {id, quantity: 1}]
            }
            else{
                return itemsIntheCart.map(item => {
                    if (item.id === id){
                        return { ...item, quantity: item.quantity+1 }
                    }
                    else return item
                })
            }
         })
    }
    function decreaseItemQuantity(id: number){
        setCartItems(itemsIntheCart => {
            if(itemsIntheCart.find(item => item.id === id)?.quantity===1){
                return itemsIntheCart.filter(item => item.id !== id)
            }
            else{
                return itemsIntheCart.map(item => {
                    if (item.id === id){
                        return { ...item, quantity: item.quantity - 1 }
                    }
                    else return item
                })
            }
        })
    }
    function removeFromCart(id: number){
        setCartItems(itemsInTheCart=> {
            return itemsInTheCart.filter(item=> item.id !== id)
        })
    }
    const openCart = () => setIsOpen(true);
    const closeCart = () => setIsOpen(false);
return( 
    <ShoppingCartContext.Provider 
    value={{
    getItemQuantity, 
    increaseItemQuantity, 
    decreaseItemQuantity, 
    removeFromCart,
    openCart,
    closeCart,
    cartItems,
    isOpen,
    cartQuantity
    }}>
        {children}
    </ShoppingCartContext.Provider>

)}


