
import React, { useState } from "react";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import Logo from '../Images/logo.png'
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { productSearch } from "../redux/productAction";
import cart from'../Images/cart.png';

const Navbar = () => {
  const result = useSelector((state) => state.cartData);
  const dispatch = useDispatch();
  console.log("data in header", result);


  const [mobileOpen, setMobileOpen] = useState(false);
  // hndle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  //menu drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        color={"goldenrod"}
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, my: 2 }}
      >
        <a href='/'>
          <Image src={Logo} alt="logo" height={"70"} width="200" />
        </a>
      </Typography>
      <Divider />
      <ul className="mobile-navigation">
        <li>
          <Link href={"/"}>home</Link>
        </li>
        <li>
          <Link href={"/products"}>Products</Link>
        </li>
        <li>
          <Link href={"/cart"}>
            <div >
              <span>{result.length}</span>
              <Image src={cart} alt="cart"
                         height={'40px'} width={'40px'} 
                         id="cartImg"
                      />
            </div>
          </Link>
        </li>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/login"}>Login</Link>
        </li>
        <li className='search-box' >
          <input type=' text' placeholder='search Product'
            onChange={(event) => dispatch(productSearch(event.target.value))}
          />
        </li>
      </ul>
    </Box>
  );
  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{
                mr: 2,
                display: { sm: "none" },
              }}
              onClick={handleDrawerToggle}
            >
              Shoping
              <MenuIcon />

            </IconButton>
            <Typography
              color={"goldenrod"}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              <Image src={Logo} alt="logo" height={"70"} width="250" />
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="navigation-menu">
             
                <li>
                  <Link href={"/"}>home</Link>
                </li>
                <li>
                  <Link href={"/products"}>Products</Link>
                </li>
                {/* <li>
                    <Link href={"/cart"}>Cart</Link>
                  </li> */}

                <li>
                  <Link href={"/cart"}>
                    <div>
                      <span id="cartNum">{result.length}</span>
                      <Image src={cart} alt="cart"
                         height={'40px'} width={'40px'} 
                         id="cartImg"
                      />
                    </div>
                  </Link>
                </li>

                <li>
                  <Link href={"/about"}>About</Link>
                </li>
                <li>
                  <Link href={"/login"}>Login</Link>
                </li>
              </ul>

            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "240px",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
}
export default Navbar;