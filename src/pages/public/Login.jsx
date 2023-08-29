import { Avatar, Box, Button, Container, TextField, Typography } from "@mui/material";
import { BiRestaurant } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { useAuth } from "../../context/AuthContext"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginAction } from "../../store/Actions/userActions";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: ""});
  const dispatch = useDispatch();
  const auth = useAuth();
  const navigate = useNavigate();

  const _handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      dispatch(loginAction(formData));
      auth.login();
      navigate("/admin/users")
    } catch (error) {
      console.log(error);
    }
  }

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
          <Box component="form" sx={{ mt: 1 }} onSubmit={handleSubmit}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Correo electrónico"
              name="email"
              autoComplete="email"
              autoFocus
              value={formData.email}
              onChange={_handleInputChange}
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
              value={formData.password}
              onChange={_handleInputChange}
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
