// import * as React from "react";
// import { useState } from "react";
// import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import CssBaseline from "@mui/material/CssBaseline";
// import TextField from "@mui/material/TextField";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
// import Link from "@mui/material/Link";
// import Grid from "@mui/material/Grid";
// import Box from "@mui/material/Box";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
// import Typography from "@mui/material/Typography";
// import Container from "@mui/material/Container";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { FcGoogle } from "react-icons/fc";

// function Copyright(props) {
//   return (
//     <Typography
//       variant="body2"
//       color="text.secondary"
//       align="center"
//       {...props}
//     >
//       {"Copyright © "}
//       <Link color="inherit" href="https://mui.com/">
//         Zomato Clone
//       </Link>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

// // TODO remove, this demo shouldn't need to reset the theme.

// const defaultTheme = createTheme();

// export default function SignIn() {
//   const [userData, setuserData] = useState({
//     email: "",
//     password: "",
//   });

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     // const data = new FormData(event.currentTarget);
//     const response = await fetch("http://localhost:5500/auth/signin", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         credentials: {
//           email: userData.email,
//           password: userData.password,
//         },
//       }),
//     });

//     if (response.ok) {
//       const data = await response.json();
//       const token = data.token; // Extract the token from the response

//       // Save the token in local storage or any other secure storage mechanism
//       localStorage.setItem("token", token);

//       alert("Signed In Successfully");
//     } else {
//       // Handle error response
//       const errorResponse = await response.json();
//       const errorMessage = errorResponse.error; // Access the error message from the response
//       alert(errorMessage);
//     }
//   };

//   const OnChange = (e) => {
//     setuserData({ ...userData, [e.target.name]: e.target.value });
//   };
//   return (
//     <ThemeProvider theme={defaultTheme}>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 2,
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//           }}
//         >
//           <Typography component="h1" variant="h5">
//             Sign In
//           </Typography>
//           <Box
//             component="form"
//             noValidate
//             onSubmit={handleSubmit}
//             sx={{ mt: 3 }}
//           >
//             <Grid container spacing={2}>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   id="email"
//                   label="Email Address"
//                   name="email"
//                   autoComplete="email"
//                   value={userData.email}
//                   onChange={OnChange}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   name="password"
//                   label="Password"
//                   type="password"
//                   id="password"
//                   autoComplete="new-password"
//                   value={userData.password}
//                   onChange={OnChange}
//                 />
//               </Grid>
//             </Grid>
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2 }}
//             >
//               Sign In
//             </Button>
//             <Link href="http://localhost:5500/auth/google">
//               <Button
//                 fullWidth
//                 variant="outlined"
//                 sx={{ mt: 3, mb: 2, textTransform: "none" }}
//               >
//                 <FcGoogle
//                   className="mr-2 text-xl"
//                   style={{ fontSize: "40px" }}
//                 />
//                 Sign in With Google
//               </Button>
//             </Link>
//             <Grid container justifyContent="flex-end">
//               <Grid item>
//                 <Link href="/signup" variant="body2">
//                   Don't have an account? Sign up
//                 </Link>
//               </Grid>
//             </Grid>
//           </Box>
//         </Box>
//         <Copyright sx={{ mt: 5 }} />
//       </Container>
//     </ThemeProvider>
//   );
// }

import * as React from "react";
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
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

export default function SignIn() {
  const [userData, setuserData] = useState({
    email: "",
    password: "",
  });
  const [isOpen, setIsOpen] = useState(true);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch("http://localhost:5500/auth/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        credentials: {
          email: userData.email,
          password: userData.password,
        },
      }),
    });

    if (response.ok) {
      const data = await response.json();
      const token = data.token; // Extract the token from the response

      // Save the token in local storage or any other secure storage mechanism
      localStorage.setItem("jwtToken", token);

      alert("Signed In Successfully");
      setIsOpen(false);
      window.location = "/";
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
  if (!isOpen) {
    return <h1 className="font-light text-gray-800">Signed in Successfully</h1>;
  }
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={OnChange}
              value={userData.email}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              // autoComplete="current-password"
              onChange={OnChange}
              value={userData.password}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
