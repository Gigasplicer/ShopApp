import PRODUCTS from '../../data/dummy-data'
import { DELETE_PRODUCT } from '../actions/products';

const initialState = {
    availableProducts: PRODUCTS, //all the products will be visible when the app starts
    userProducts: PRODUCTS.filter(prod => prod.ownerId === 'u1')//this filters user products to initialize with u1 stored in dummy data
}
export default(state = initialState, action) => {
    switch(action.type){
        case DELETE_PRODUCT:
            return{
                ...state,
                userProducts: state.userProducts.filter(product => product.id !== action.pid),
                availableProducts: state.availableProducts.filter(product => product.id !== action.pid)
            }

    }
    return state;
}