import {combineReducers} from 'redux'
import { cartData } from './reducer'
import {productData} from './productReducer'
// import { buyProductData } from './productReducer'
export default combineReducers({
    cartData,
    productData,
    // buyProductData
})