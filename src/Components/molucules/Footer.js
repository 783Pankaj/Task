import React from "react";
import { Box, Typography } from "@mui/material"
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
const Footer=()=>{
    return(
        <>
        <Box
            sx={{textAlign:"center", bgcolor:"#1A1A10", color:"white", p:3}}
        >
            <Box
               sx={{
                my:3,
                "& svg":{
                    fontSize:"60px",
                    cursor:"pointer",
                    mr:2,
                },
                "& svg:hover":{
                    color:"goldenrod",
                    transform:'translateX(5px)',
                    transition: 'all 400ms'
                }
               }}
            >
                <InstagramIcon />
               <YouTubeIcon />
               <FacebookIcon />
               <TwitterIcon />
            </Box>
            <Typography
              variant="h5"
              sx={{
                "@media (max-width:600px)":{
                    fontSize:"1rem",
                },
              }}
              >
                All rigth reserved &copy; Pankaj Pal
              </Typography>
        </Box>
        </>
    );
}
export default Footer;