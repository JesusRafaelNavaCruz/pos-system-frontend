import { Avatar, Box, Button, Container, TextField, Typography } from "@mui/material";
import { BiRestaurant } from "react-icons/bi";

function Login() {
  return (
    <div>
      <Container>
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "#ff9800" }}>
            <BiRestaurant />
          </Avatar>
          <Typography component="h1" variant="h5">
            RestoPOS
          </Typography>
          <Box component="form" sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Correo electrónico"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, background: 'primary' }}
            >
              Iniciar sesión
            </Button>
          </Box>
        </Box>
        
      </Container>
    </div>
  );
}

export default Login;
