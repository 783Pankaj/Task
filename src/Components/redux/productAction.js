import { PRODUCT_BUY, PRODUCT_LIST, SEARCH_PRODUCT} from "./constaent"

export const productList = () => {
  
    return {
        type: PRODUCT_LIST,
    }
}

// export const buyList = () => {
  
//     return {
//         type: PRODUCT_BUY,
//     }
// }


export const productSearch =(query)=>{
    return{
        type: SEARCH_PRODUCT,
        query
    }
}

// export const productPageNation =(pnation)=>{
//     return{
//         type: PAGENATION_PRODUCT,
//         pnation
//     }
// }