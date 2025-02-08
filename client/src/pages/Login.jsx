import {
  Avatar,
  Button,
  Container,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { CameraAlt as CameraAltIcon } from "@mui/icons-material";
import { VisuallyHidenInput } from "../components/styles/StyledComponents";
import { useFileHandler, useInputValidation, useStrongPassword } from "6pp";
import { usernameValidator } from "../utils/validators";
import { bgGradient } from "../constants/color";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const toggleLogin = () => setIsLogin((prev) => !prev);
  const name = useInputValidation("");
  const bio = useInputValidation("");
  const username = useInputValidation("", usernameValidator);
  const password = useStrongPassword();
  const avatar = useFileHandler("single");

  const handleLogin = (e) => {
    e.preventDefault();
  };
  const handleSignUp = (e) => {
    e.preventDefault();
  };
  return (
    <div
    style={{backgroundColor:bgGradient}}
    >

    <Container
      component={"main"}
      maxWidth="xs"
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {isLogin ? (
          <>
            <Typography variant="h5">Login</Typography>
            <form
              style={{
                width: "100%",
                marginTop: "1rem",
              }}
              onSubmit={handleLogin}
            >
              <TextField
                required
                fullWidth
                label="Username"
                margin="normal"
                variant="outlined"
                value={username.value}
                onChange={username.changeHandler}
              />
              <TextField
                required
                fullWidth
                label="Password"
                type="password"
                margin="normal"
                variant="outlined"
                value={password.value}
                onChange={password.changeHandler}
              />
              <Button
                sx={{
                  marginTop: "1rem",
                }}
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
              >
                Login
              </Button>

              <Typography textAlign={"center"} m={"1rem"}>
                Or
              </Typography>

              <Button
                fullWidth
                variant="text"
                onClick={() => setIsLogin(false)}
              >
                Sign Up instead
              </Button>
            </form>
          </>
        ) : (
          
          <>
  <Typography variant="h5">Sign Up</Typography>
  <form
    style={{
      width: "100%",
      marginTop: "0.1rem", // Reduced top margin
    }}
    onSubmit={handleSignUp}
  >
    {/* Avatar with reduced size */}
    <Stack position="relative" width="8rem" margin="auto">
      <Avatar
        sx={{
          width: "8rem", // Reduced size
          height: "8rem", // Reduced size
          objectFit: "contain",
        }}
        src={avatar.preview}
      />
      <IconButton
        sx={{
          position: "absolute",
          bottom: "0",
          right: "0",
          color: "white",
          bgcolor: "rgba(0,0,0,0.5)",
          ":hover": {
            bgcolor: "rgba(0,0,0,0.7)",
          },
        }}
        component="label"
      >
        <>
          <CameraAltIcon />
          <VisuallyHidenInput
            type="file"
            onChange={avatar.changeHandler}
          />
        </>
      </IconButton>
    </Stack>

    {/* Avatar Error */}
    {avatar.error && (
      <Typography
        m="0.5rem"
        width="fit-content"
        display="block"
        color="error"
        variant="caption"
      >
        {avatar.error}
      </Typography>
    )}

    {/* Name Field */}
    <TextField
      required
      fullWidth
      label="Name"
      margin="dense" // Reduced margin
      variant="outlined"
      value={name.value}
      onChange={name.changeHandler}
    />

    {/* Bio Field */}
    <TextField
      required
      fullWidth
      label="Bio"
      margin="dense" // Reduced margin
      variant="outlined"
      value={bio.value}
      onChange={bio.changeHandler}
    />

    {/* Username Field */}
    <TextField
      required
      fullWidth
      label="Username"
      margin="dense" // Reduced margin
      variant="outlined"
      value={username.value}
      onChange={username.changeHandler}
    />
    {username.error && (
      <Typography color="error" variant="caption">
        {username.error}
      </Typography>
    )}

    {/* Password Field */}
    <TextField
      required
      fullWidth
      label="Password"
      type="password"
      margin="dense" // Reduced margin
      variant="outlined"
      value={password.value}
      onChange={password.changeHandler}
    />
    {password.error && (
      <Typography color="error" variant="caption">
        {password.error}
      </Typography>
    )}

    {/* Sign Up Button */}
    <Button
      sx={{
        marginTop: "1rem",
      }}
      variant="contained"
      color="primary"
      type="submit"
      fullWidth
    >
      Sign Up
    </Button>

    {/* Or Divider */}
    <Typography textAlign="center" m="1rem">
      Or
    </Typography>

    {/* Login Instead Button */}
    <Button fullWidth variant="text" onClick={toggleLogin}>
      Login Instead
    </Button>
  </form>
</>

        )}
      </Paper>
    </Container>
  </div>
  );
};

export default Login;
