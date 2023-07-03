import Image from 'next/image'
import NavBar from "./components/NavBar";
import Head from 'next/head'

const Home=()=>{
    return(
        <>
        <Head>
            <title>Home Page</title>
            <meta property='og:title' content='home page' id='title'/>
        </Head>
        <NavBar />
      <h1 style={{color:"red"}}>Home Page</h1>
      <h2>Here You can do anything</h2>
      <p className="pera">The width and height attributes are used to infer the correct aspect ratio of image and avoid layout shift from the image loading in. The width and height do not determine the rendered size of the image file. Learn more about Image Sizing.</p>
      <div style={{display:'flex', flexDirection: 'column'}}>
      <Image
        src={"https://elearningindustry.com/wp-content/uploads/2022/11/shutterstock_1798672534.jpg"}
        alt='home image'
        width={500}
        height={700}
        
      />
       </div>
      <style jsx>
        {`
             h2{
                color:blue
             }  
             .pera{
                color:green
             }
        `}
      </style>
     
    </>
    );
}
export default Home;