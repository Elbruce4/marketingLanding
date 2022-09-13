

import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ford from "../../images/fordLogo.png"
import brenson from "../../images/branson.png"
import SwipeableTextMobileStepper from '../carrousel/index.jsx';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignInSide() {

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
        email: data.get('email'),
        password: data.get('password'),
        });
    };

    return (

        <ThemeProvider theme={theme}>
        <Grid container component="main" sx={{ height: '100vh' }}>
            <CssBaseline />
            <SwipeableTextMobileStepper/>
            <Grid item xs={12} sm={8} md={5} order={{md : 2 , xs : 1}} component={Paper} elevation={6} square>
                <Box
                    sx={{
                    my: 8,
                    mx: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    }}
                >
                    <Box 
                        component="form" 
                        noValidate 
                        onSubmit={handleSubmit} 
                        sx={{ mt: 1 }}
                    >
                        <img 
                            src={ford} 
                            alt="ford"
                            style={
                                {
                                    width : "200px",
                                    marginRigth : "55px"
                                }
                            }
                        />
                        
                        <img 
                            src={brenson} 
                            alt="breson"
                            style={
                                {
                                    width : "200px",
                                    marginLeft : "55px"
                                }
                            }
                        />

                        <strong>
                            Lorem ipsum dolor sit amet.
                        </strong>
                        
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Nombre y apellido"
                            name="email"
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="telefono"
                            label="Telefono"
                            type="number"
                        />
                        <TextField 
                            margin="normal"
                            fullWidth 
                            label="Consulta"
                            multiline
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Enviar 
                        </Button>
                        <Copyright sx={{ mt: 5 }} />
                    </Box>
                </Box>
            </Grid>
        </Grid>
        </ThemeProvider>
    );
}