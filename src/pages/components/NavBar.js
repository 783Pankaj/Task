import Link from "next/link"

const NavBar = () => {
  return (

    <div className="nav">
      <input type="checkbox" id="nav-check" />
        <div className="nav-header">
          <div className="nav-title">
            Logo
          </div>
          </div>
          <div className="nav-btn">
            <label for="nav-check">
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>
            <div className="nav-links">
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
