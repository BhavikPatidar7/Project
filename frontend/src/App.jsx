import * as React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import { Box, CssBaseline } from "@mui/material";
import { styled, useTheme } from '@mui/material/styles';
import NavBar from './components/NavBar';
import SideDrawer from './components/SideDrawer';
import { drawerWidth } from "./Constants/layout";
import ProtectedRoute from './components/ProtectedRoute';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

function App() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
        <NavBar open={open} handleDrawerOpen={handleDrawerOpen} />
        <SideDrawer open={open} handleDrawerClose={handleDrawerClose} DrawerHeader={DrawerHeader} />
        <Main open={open}>
        <DrawerHeader />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dashboard" element={ <ProtectedRoute><Dashboard /></ProtectedRoute>} />
            </Routes>
          </BrowserRouter>
        </Main>
    </Box>
  );
}

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    variants: [
      {
        props: ({ open }) => open,
        style: {
          transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
          marginLeft: 0,
        },
      },
    ],
  }),
);
export default App;
