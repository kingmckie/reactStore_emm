import {createContext} from 'react';

const storeContext = createContext( {
    cart: [],
    user: {},
    addProductToCart: () => {},
    removeProductToCart: () => {},
});


export default storeContext;
