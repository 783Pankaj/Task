'use client'
// import NavBar from "./components/NavBar";
import Navbar from "@/Components/molucules/Navbar";
import { addToCart, removeToCart, emptyCart, buyToCart} from "@/Components/redux/action";
import { buyList, productList } from "@/Components/redux/productAction";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Link from "next/link";
// import { productPageNation } from "../redux/productAction";


const Index=()=>{
  const dispatch = useDispatch();
  const Buydispatch = useDispatch();
  
  let data = useSelector((state)=>state.productData);
  console.log("data in main component", data);

  // let val = useSelector((state)=>state.buyProductData);
  // console.log("buy data is here",val)
  // useEffect(()=>{
  //   dispatch(productList())
  // },[])

  // useEffect(()=>{
  //   Buydispatch(buyList())
  // },[])
  return(
  <>
   <div>
    <Navbar />
   </div>
   <div>
      <div className='product-container'>
        {
          data.slice(0,21).map((item)=><div className='product-item' key={item.id}>
            <img src={item.thumbnail} alt="" />
            <div>Title : {item.title} </div>
            <div>stock : {item.stock} </div>
            <div>Price : {item.price} </div>
            <div>Category : {item.category} </div>
            <div>Brand : {item.brand} </div>
            <div>
              <button id="cart" onClick={() => dispatch(addToCart(item))} >Add to Cart</button>
              <button id="remove-cart" onClick={() => dispatch(removeToCart(item.id))}>Remove to Cart</button>
              <Link href='/products'>
              <button id="buy" onClick={()=>dispatch(buyToCart(item))}>Buy</button>
              </Link>
              </div>
          </div>
          )
        }
      </div>
    </div>
    <div style={{margin:'20px 100px' , textAlign:'center'}}>
      <button id="cart" onClick={() => dispatch(emptyCart())}>Empty Cart</button>
      </div>  
      {/* <div>
        <PageNation />
      </div> */}
  </>
  );
}
export default Index;