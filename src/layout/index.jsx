import { useState } from "react";
import { AppBar, Box, Toolbar, useTheme, useMediaQuery, styled, CssBaseline } from "@mui/material";
import Navbar from "../components/common/Navbar";
import Sidebar from "../components/common/Sidebar";
import { Outlet } from "react-router-dom";

const drawerWidth = '240'

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
    ...theme.typography.mainContent,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    transition: theme.transitions.create(
      'margin',
      open
        ? {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
          }
        : {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
          }
    ),
    [theme.breakpoints.up('md')]: {
      marginLeft: open ? 0 : -(drawerWidth - 20),
      width: `calc(100% - ${drawerWidth}px)`
    },
    [theme.breakpoints.down('md')]: {
      marginLeft: '20px',
      width: `calc(100% - ${drawerWidth}px)`,
      padding: '16px'
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: '10px',
      width: `calc(100% - ${drawerWidth}px)`,
      padding: '16px',
      marginRight: '10px'
    }
  }));

const AdminLayout = () => {

    const theme = useTheme();
    const matchDownMd = useMediaQuery(theme.breakpoints.down('md'));
    const [opened, setOpened] = useState(true);

    const handleLeftDrawerToggle = () => {
        setOpened(!opened);
      };

  return (
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <AppBar
        enableColorOnDark
        position="fixed"
        elevation={0}
        color="inherit"
        sx={{
            bgColor: theme.palette.background.default,
            transition: opened ? theme.transitions.create('width') : "none",
        }}
      >
        <Toolbar>
          <Navbar handleLeftDrawerToggle={handleLeftDrawerToggle} />
        </Toolbar>
      </AppBar>
      <Sidebar drawerOpen={!matchDownMd ? opened : !opened} drawerToggle={handleLeftDrawerToggle}/>
      <Main theme={theme} open={opened}>
        <Outlet />
      </Main>
    </Box>
  );
};

export default AdminLayout;
