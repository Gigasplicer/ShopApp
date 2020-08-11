import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cart";
import CartItem from '../../models/cart-item';


const initialState = {
    items: {},//javascript object make a class in models
    totalAmount: 0,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const addedProduct = action.product;
            const prodPrice = addedProduct.price;
            const prodTitle = addedProduct.title;

            if (state.items[addedProduct.id]) {
                //already have. just need to increase quantity.
                const updatedCartItem = new CartItem(
                    state.items[addedProduct.id].quantity + 1,
                    prodPrice,
                    prodTitle,
                    state.items[addedProduct.id].sum + prodPrice
                );
                return {
                    ...state,
                    items: { ...state.items, [addedProduct.id]: updatedCartItem },
                    totalAmount: state.totalAmount + prodPrice
                }
            } else {
                const newCartItem = new CartItem(1, prodPrice, prodTitle, prodPrice);
                return {
                    ...state,
                    items: { ...state.items, [addedProduct.id]: newCartItem },//[] used for accessing a dynamic property
                    totalAmount: state.totalAmount + prodPrice
                };
            };
        case REMOVE_FROM_CART:
            
            const selectedItem = state.items[action.pid]
            const currentQty = selectedItem.quantity;
            let updatedCartItems;

            if (currentQty > 1) {
                const updatedCartItem = new CartItem(
                    selectedItem.quantity - 1, 
                    selectedItem.productPrice, 
                    selectedItem.productTitle, 
                    selectedItem.sum - selectedItem.productPrice)
                updatedCartItems = { ...state.items, [action.pid]: updatedCartItem }
            } else {
                updatedCartItems = { ...state.items };
                delete updatedCartItems[action.pid];
            }
            return {
                ...state,
                items: updatedCartItems,
                totalAmount: state.totalAmount - selectedItem.productPrice
            }
    }
    return state;
};