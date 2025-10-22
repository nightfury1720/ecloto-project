import { useState, useEffect } from 'react'
import { Product, Cart, CartItem } from '@/types'
import { FREE_GIFT, THRESHOLD } from '@/data/products'

export const useCart = () => {
    const [cart, setCart] = useState<Cart>({
        items:[],
        subTotal: 0,
        hasFreeGift: false
    })

    const removeFromCart = (productId: number) => {
        setCart(prev => ({
            ...prev,
            items: prev.items.filter(item => item.product.id !== productId)
        }))
    }

    const addToCart  = (product: Product) => {
        setCart(prev => {
            const isExisting = prev.items.find(item => item.product.id === product.id);
            if(isExisting){
                return {
                    ...prev,
                    items: prev.items.map(item => item.product.id === product.id ? {...item, quantity: item.quantity+1} : item)
                }
            } else {
                return {
                    ...prev,
                    items: [...prev.items, {product, quantity: 1}]
                }
            }
        })
    }

    const updateCartItemQuantity = (productId: number, quantity: number) => {
        if(quantity === 0){
            removeFromCart(productId)
        } else {
            setCart(prev => ({
                ...prev,
                items: prev.items.map(item => item.product.id === productId ? {...item, quantity} : item)
            }))
        }

    }

    const progressPercentage = Math.min((cart.subTotal/THRESHOLD)*100, 100)

    useEffect(() => {
        const subTotal = cart.items.reduce((sum,item) => sum+(item.product.price*item.quantity),0)
        const shouldHaveFreeGift = subTotal >= THRESHOLD

        if(subTotal !== cart.subTotal || shouldHaveFreeGift !== cart.hasFreeGift){

            if(shouldHaveFreeGift && !cart.hasFreeGift){
                setCart(prev => ({
                    ...prev,
                    items: [...prev.items, {product: FREE_GIFT, quantity: 1}]
                }))
            } else if( !shouldHaveFreeGift && cart.hasFreeGift){
                removeFromCart(FREE_GIFT.id)
            }

            setCart(prev => ({
                ...prev,
                subTotal,
                hasFreeGift: shouldHaveFreeGift
            }))
        }
    }, [cart.items, cart.hasFreeGift])

    return {
        progressPercentage,
        removeFromCart,
        updateCartItemQuantity, addToCart,
        cart
    }
}