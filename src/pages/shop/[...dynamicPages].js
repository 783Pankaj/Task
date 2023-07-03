import { useRouter } from "next/router";
import NavBar from "../components/NavBar";
const dynamicPages= () => {
    const router = useRouter();
    const pagesStore = router.query.dynamicPages;
    console.log(router.asPath)
  return (
    <>
      <NavBar />
      <h2>{`page is ${pagesStore}`}</h2>
    </> 
  )
}

export default dynamicPages;
