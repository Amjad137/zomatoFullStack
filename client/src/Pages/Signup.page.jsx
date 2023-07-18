import * as React from "react";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { FcGoogle } from "react-icons/fc";
import Popup from "../Components/PopUps/Popup.components";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Zomato Clone
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignUp() {
  const [userData, setuserData] = useState({
    fullName: "",
    email: "",
    password: "",
    address: "",
    phoneNumber: "",
  });
  const [openSignin, setOpenSignin] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const handleSubmit = async (event) => {
    event.preventDefault();

    // const data = new FormData(event.currentTarget);
    const response = await fetch("http://localhost:5500/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        credentials: {
          fullName: userData.fullName,
          email: userData.email,
          password: userData.password,
          address: userData.address,
          phoneNumber: userData.phoneNumber,
        },
      }),
    });

    if (response.ok) {
      const data = await response.json();
      const token = data.token; // Extract the token from the response

      // Save the token in local storage or any other secure storage mechanism
      localStorage.setItem("token", token);

      alert("User created Successfully");
      setIsOpen(false);
    } else {
      // Handle error response
      const errorResponse = await response.json();
      const errorMessage = errorResponse.error; // Access the error message from the response
      alert(errorMessage);
    }
  };

  const OnChange = (e) => {
    setuserData({ ...userData, [e.target.name]: e.target.value });
  };
  const openSigninDialog = () => {
    setOpenSignin(true);
  };
  if (!isOpen) {
    return (
      <h1 className="font-light text-gray-800">Signup is Done Successfully</h1>
    ); // Return null to hide the component
  }
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="fullName"
                  required
                  fullWidth
                  id="fullName"
                  label="Full Name"
                  autoFocus
                  value={userData.fullName}
                  onChange={OnChange}
                />
              </Grid>
              {/* <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid> */}
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={userData.email}
                  onChange={OnChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={userData.password}
                  onChange={OnChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="address"
                  label="Address"
                  name="address"
                  autoComplete="address"
                  value={userData.address}
                  onChange={OnChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="phoneNumber"
                  label="Phone Number"
                  name="phoneNumber"
                  autoComplete="phoneNumber"
                  value={userData.phoneNumber}
                  onChange={OnChange}
                />
              </Grid>
              {/* <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid> */}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Link href="http://localhost:5500/auth/google">
              <Button
                fullWidth
                variant="outlined"
                sx={{ mt: 3, mb: 2, textTransform: "none" }}
              >
                <FcGoogle
                  className="mr-2 text-xl"
                  style={{ fontSize: "40px" }}
                />
                Sign in With Google
              </Button>
            </Link>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/signin" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
