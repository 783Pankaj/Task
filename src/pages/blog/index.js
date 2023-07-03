
import Link from "next/link";
import NavBar from "../components/NavBar";

export async function getStaticProps() {
    const res = await fetch("https://dummyjson.com/products")
    const apiData = await res.json();
    console.log(apiData)
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
                        
                        <hr/>
                    </div>
                   
                ))
            }
           </div>
        </div>
    );
}
export default Blog;  