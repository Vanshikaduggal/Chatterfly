import React from "react";
import Header from "./Header";
import Title from "../shared/Title";
import { Grid } from "@mui/material";
import ChatList from "../specific/ChatList";
import { samplechats } from "../../constants/sampleData";
import { useParams } from "react-router-dom";
import Profile from "../specific/Profile";

const AppLayout = () => (WrappedComponent) => {
  return (props) => {
    const params= useParams()
    const chatId=params.chatId;

    const handleDeleteChat = (e,_id,groupChat)=>{
      e.preventDefault();
      console.log("Delete Chat",_id,groupChat)
    }
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
            <ChatList
              chats={samplechats}
              chatId={chatId}
              handleDeleteChat={handleDeleteChat}
            />
          </Grid>

          {/* Main Content */}
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            lg={6}
            height={"100%"}
          >
            <WrappedComponent {...props} />
          </Grid>

          {/* Right Sidebar */}
          <Grid
            item
            md={4}
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
            <Profile/>
          </Grid>
        </Grid>
      </>
    );
  };
};

export default AppLayout;
