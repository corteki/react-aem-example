import React, {createContext} from 'react';

export const AppContext = createContext({
    products: [],
    cart: [],
    addToCart: (product: any) => {},
    removeFromCart: (id: number) => {}
} as any);