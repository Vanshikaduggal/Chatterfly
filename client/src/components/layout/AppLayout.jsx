import React from 'react';
import Header from './Header';
import Title from '../shared/Title';
import { Grid } from '@mui/material';

const AppLayout = () => (WrappedComponent) => {
  return (props) => {
    return (
      <>
        <Title />
        <Header />
        <Grid container height={"calc(100vh - 4rem)"}>
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
            First
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
            <WrappedComponent {...props} />
          </Grid>

          {/* Right Sidebar */}
          <Grid
            item
            md={3}
            lg={3}
            sx={{
              display: { xs: "none", md: "block" },
              padding: "2rem",
              bgcolor: "rgba(0,0,0,0.85)",
              color: "white",
              overflowY: "auto", // Prevent overflow in the sidebar
            }}
            height={"100%"}
          >
            {/* Right Sidebar Content */}
            Third
          </Grid>
        </Grid>
      </>
    );
  };
};

export default AppLayout;
