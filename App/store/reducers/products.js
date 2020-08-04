import PRODUCTS from '../../data/dummy-data'

const initialState = {
    availableProducts: PRODUCTS, //all the products will be visible when the app starts
    userProducts: PRODUCTS.filter(prod => prod.ownerId === 'u1')//this filters user products to initialize with u1 stored in dummy data
}
export default(state = initialState, action) => {// we get an action? not sure
    return state;
}