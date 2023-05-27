import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux' // later replace createStore to configStore
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { 
    productListReducer, 
    productDetailsReducer,
    productDeleteReducer,
    productCreateReducer,
    productUpdateReducer,

} from './reducers/productReducers'

import { cartReducer } from './reducers/cartReducers'

import {
    orderCreateReducer,
    orderDetailsReducer,
    orderPayReducer,
    orderDeliveryReducer,
    orderListMyReducer,
    orderListReducer
} from './reducers/orderReducers'

import { 
    userLoginReducer, 
    userRegisterReducer, 
    userDetailsReducer, 
    userUpdateProfileReducer,
    userListReducer,
    userDeleteReducer,
    userUpdateReducer
} from './reducers/userReducers'






const reducer = combineReducers({
    //products
    productList: productListReducer,
    productDetails: productDetailsReducer,
    productDelete: productDeleteReducer,
    productCreate: productCreateReducer,
    productUpdate: productUpdateReducer,

    //cart
    cart: cartReducer,

    //order
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    orderListMy: orderListMyReducer,
    orderList: orderListReducer,
    orderDeliver: orderDeliveryReducer,

    //user
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    userList: userListReducer,
    userDelete: userDeleteReducer,
    userUpdate: userUpdateReducer,
})


const userInfoFromStorage = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) : null

const cartItemsFromStorage = localStorage.getItem('cartItems') ?
    JSON.parse(localStorage.getItem('cartItems')) : []

const deliveryAddressFromStorage = localStorage.getItem('deliveryAddress') ?
    JSON.parse(localStorage.getItem('deliveryAddress')) : {}

const paymentMethodFromStorage = localStorage.getItem('paymentMethod') ?
    JSON.parse(localStorage.getItem('paymentMethod')) : {}


const initialState = {
    cart: {
        cartItems: cartItemsFromStorage,
        deliveryAddress: deliveryAddressFromStorage,
        paymentMethod: paymentMethodFromStorage,
    },
    userLogin: { userInfo: userInfoFromStorage },
}


const middleware = [thunk]

const store = createStore(reducer, initialState,
    composeWithDevTools(applyMiddleware(...middleware)))

export default store

