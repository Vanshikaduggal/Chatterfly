import { Grid,Skeleton, Stack } from '@mui/material'
import React from 'react'

const Loaders = () => {
  return (
    <div>
      <Grid container height={"calc(100vh - 4rem)"} spacing={"1rem"}>
          {/* Left Sidebar */}
          <Grid
            item
            sm={4}
            md={3}
            sx={{
              display: { xs: "none", sm: "block" },
              bgcolor: "#f5f5f5", // Example background color for the sidebar
              overflowY: "auto", // Prevent overflow in the sidebar
            }}
            height={"100%"}
          >
            {/* Left Sidebar Content */}
            <Skeleton variant='rectangular'/>
          </Grid>

          {/* Main Content */}
          <Grid
            item
            xs={12}
            sm={8}
            md={6}
            lg={6}
            sx={{
              padding: "1rem",
              overflowY: "auto", // Prevent overflow in the main content
            }}
            height={"100%"}
          >
            <Stack spacing={"1rem"}>
            {Array.from({length:10}).map((_,index)=>(
                <Skeleton key={index}variant='rounded' height={"5rem"}/>
            ))}
            </Stack>
          </Grid>

          {/* Right Sidebar */}
          <Grid
            item
            md={3}
            lg={3}
            sx={{
              display: { xs: "none", md: "block" },
              color: "white",
              padding: "2rem",
              bgcolor: "rgba(0,0,0,0.85)",
              overflowY: "auto", // Prevent overflow in the sidebar
            }}
            height={"100%"}
          >
            {/* Right Sidebar Content */}
            <Skeleton variant='rectangular' height={"100vh"}/>
          </Grid>
        </Grid>
    </div>
  )
}

export default Loaders
