'use client'
import Image from 'next/image'
import errorImg from'../../public/errorImg.jpeg'
import { useRouter } from 'next/router';
import Link from 'next/link';

const ErrorPage=()=>{
    const router = useRouter();
    const backToHome=(page)=>{
        router.push(page)
     }

    setTimeout(() => {
        router.push('/')
    }, 3000);
    console.log("i am time")
     return(
        <div>
            <center>
            <Image 
              src={errorImg}
              alt='error page' 
              width={1000}
              height={800}
              />
              <button 
              style={{borderRadius:5, backgroundColor:"green", width:100}}
              type='submit' onClick={()=>backToHome('/')}>Back To Home</button>
               <hr/>
             
            </center>
            <Link href="/">Back To Home</Link>
        </div>
     );
}
export default ErrorPage;