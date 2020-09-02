import Product from "../../models/products";

export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const CREATE_PRODUCT = 'CREATE_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const SET_PRODUCTS = 'SET_PRODUCTS';

export const fetchProducts = () => {
    return async dispatch => {
        //add async code here.  Must happen
        const response = await fetch('https://servertest-a3610.firebaseio.com/ConferenceRoom.json'
        );

        const resData = await response.json();
        const loadedProducts = [];
        for (const key in resData) {
            loadedProducts.push(
            new Product(
                key,
                'u1',
                resData[key].title,
                resData[key].imageUrl,
                resData[key].description,
                resData[key].price,
                resData[key].arr,
            )
            )
        }
        dispatch({ type: SET_PRODUCTS, products: loadedProducts })
    }
}

export const deleteProduct = productId => {
    return { type: DELETE_PRODUCT, pid: productId }
}
export const createProduct = (title, description, imageUrl, price) => {
    const quantity = price
    const arr = [0,0,0,0,0,0,0]
    return async dispatch => {
        //add async code here.  Must happen
        const response = await fetch('https://servertest-a3610.firebaseio.com/ConferenceRoom.json', {
            method: 'POST',
            header: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                description,
                imageUrl,
                price,
                arr                
            })
        });

        const resData = await response.json();
        console.log(resData);

        dispatch({
            type: CREATE_PRODUCT,
            productData: {
                id: resData.name,
                title, //these are both equivalent ways of setting up the variable productData
                description,
                imageUrl,
                price,
            }
        })
    }
}
export const updateProduct = (id, title, description, imageUrl) => {
    return {
        type: UPDATE_PRODUCT, pid: id, productData: {
            title, //or title = title these are both equivalent ways of setting up the variable productData
            description,
            imageUrl,
        }
    }
}