import React, { useEffect, useState } from 'react'
import { Box, CssBaseline, Container, Typography, Grid, Card, CardContent} from '@mui/material';
import Pagination from '@mui/material/Pagination';
// import axios from 'axios';

const PageNation = () => {
//   const[page, setPage] = useState(1);
//   const[posts, setPosts] = useState([])
//   const loadPosts = async()=>{
//     const res = await axios.get(`https://dummyjson.com/quotes/?${page}`)
//     setPosts(res.data.quotes)
//     console.log(posts)
//   };

//   useEffect(()=>{
//    loadPosts();
//   },[page])
  return (
    <div>
      <CssBaseline />
      <Container component={Box} py={3}>
      {/* <Grid container spacing={2}>
        {
          posts.map((post) =>(
            <Grid item sm={3} key={post.id} style={{height:250}}>
              <Card>
                <CardContent>
                  <Typography>{post.id} {post.quote}</Typography>
                  <Typography>{post.author}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        }
        </Grid> */}
        {/* <Typography>{page}</Typography> */}
        <Pagination count={10}
          color='primary'
          variant='outlined'
          shape='circle' 
          defaultPage={1}
          showFirstButton={true}
          showLastButton={true}
          onChange={(event, value)=>setPage(value)}
          />
      </Container>
    </div>
  )
}

export default PageNation;
