import React from "react";
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { orange } from "../../constants/color";
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  Add as AddIcon,
  Group as GroupIcon
} from "@mui/icons-material";
import {useNavigate} from "react-router-dom"
const Header = () => {

    const navigate=useNavigate()
  const handleMobile = () => {
    console.log("Mobile");
  };
  const openSearchDialog = () => {
    console.log("Mobile");
  };
  const openNewGroup = () => {
    console.log("Mobile");
  };
  const navigateToGroup = () => navigate("/groups")

  return (
    <div>
      <Box sx={{ flexGrow: 1 }} height={"4rem"}>
        <AppBar
          position="static "
          sx={{
            bgcolor: orange,
          }}
        >
          <Toolbar>
            <Typography
              variant="h6"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              Chatterfly
            </Typography>
            <Box sx={{ display: { xs: "block", sm: "none" } }}>
              <IconButton color="inherit" onClick={handleMobile}>
                <MenuIcon />
              </IconButton>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
              }}
            />

            <Box>

                <IconBtn title={"Search"}/>
              <Tooltip title="Search">
              <IconButton
                color="inherit"
                size="large"
                onClick={openSearchDialog}
              >
                <SearchIcon />
              </IconButton>
              </Tooltip>

              <Tooltip title="New Group">
                <IconButton color="inherit" size="large" onClick={openNewGroup}>
                  <AddIcon />
                </IconButton>
              </Tooltip>

              <Tooltip title="Manage Groups">
              <IconButton color="inherit" size="large" onClick={navigateToGroup}>
                  <GroupIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </Toolbar>

        </AppBar>
      </Box>
    </div>
  );
};

const IconBtn =({title,icon,onClick})=>{
    return (
        <Tooltip title={title}>
            <IconButton color="inherit" size="large" onClick={onClick}>
                {icon}
            </IconButton>
        </Tooltip>
    )
}

export default Header;
