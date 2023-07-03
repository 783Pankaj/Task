import { useRouter } from "next/router"
import NavBar from "../components/NavBar";


const dynamicPage = () => {
    const router = useRouter();
    const pagesStore = router.query.dynamicPage;
  return (
    <div>
       <>
         <NavBar />
        <h2>This is Page: {pagesStore}</h2>
       </>
    </div>
  )
}

export default dynamicPage
