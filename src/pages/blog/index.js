
import Link from "next/link";
import NavBar from "../components/NavBar";
import Image from "next/image";

export async function getStaticProps() {
    const res = await fetch("https://dummyjson.com/products")
    const apiData = await res.json();
    return {
        props: {
            apiData,
        },
    }
}
const Blog = ({ apiData:{products} }) => {
   
    return (
        <div>
            <NavBar />
            <h2>Blog Page</h2>
           <div>
            {
                products.slice(0,10).map((val,i)=>(
                    <div key={i}>
                        
                        <Link href={`/blog/${val.id}`}>
                        <h3>Tittle: {val.title}</h3>
                        </Link> 
                        <h4>Description: {val.description}</h4>
                        <h2>Price: {val.price}</h2>
                        <img src={val.thumbnail} width={100} height={100} alt="image"/>
                        <button style={{margin:30, padding:8, borderRadius:10, backgroundColor:"green"}}
                           onClick={()=>alert('Order has been booked')}
                        >Buy Now</button>
                        <hr/>
                    </div>
                   
                ))
            }
           </div>
        </div>
    );
}
export default Blog;  