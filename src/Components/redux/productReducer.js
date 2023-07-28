import { PRODUCT_LIST, SET_PRODUCT_BUY, SET_PRODUCT_LIST } from "./constaent"


export const productData = (data = [], action) => {
    switch (action.type) {
            case SET_PRODUCT_LIST:
                console.log("PRODUCT_LIST condition ", action)
                return [...action.data]
        default:
            return data
    }
}

// export const buyProductData = (data = [], action) => {
//     switch (action.type) {
//             case SET_PRODUCT_BUY:
//                 console.log("SET_PRODUCT_BUY condition ", action)
//                 return [...action.data]
//         default:
//             return data
//     }
// }