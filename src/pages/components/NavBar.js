import Link from "next/link"

const NavBar = () => {
  return (
    <div>
       <div className="navBar">
       <nav>
        <ul>
          <li>
            <Link href={"/"}>Logo</Link>
          </li>
          <li>
            <Link href={"/home"}>home</Link>
          </li>
          <li>
            <Link href={"/about"}>About</Link>
          </li>
          <li>
            <Link href={"/contact"}>Contact</Link>
          </li>
          <li>
            <Link href={"/blog"}>Blog</Link>
          </li>
          <li>
            <Link href={"/blog/dynamicPage"}>DynamicBlog</Link>
          </li>
          <li>
            <Link href={"/shop/dynamicPages"}>Shop</Link>
          </li>
        </ul>
       </nav>
       </div>
    </div>
  )
}

export default NavBar
