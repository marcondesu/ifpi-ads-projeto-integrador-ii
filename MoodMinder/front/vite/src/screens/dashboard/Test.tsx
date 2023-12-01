import React, { useState } from 'react';
import { FaSignOutAlt, FaBars } from 'react-icons/fa';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

interface MenuItem {
  text: string;
  icon: React.ReactNode;
}

const Dashboard: React.FC = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const menuItems: MenuItem[] = [
    { text: 'Acompanhamentos', icon: <span>📊</span> },
    { text: 'Configurações', icon: <span>⚙️</span> },
  ];

  return (
    <div style={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ backgroundColor: 'white', borderBottom: '1px solid #ddd' }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{ mr: 2 }}
          >
            <FaBars />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Your Logo
          </Typography>
          <div style={{ flexGrow: 1 }} />
          <IconButton color="inherit" sx={{ ml: 2 }}>
            <FaSignOutAlt />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        open={open}
        onClose={toggleDrawer}
        ModalProps={{ keepMounted: true }}
      >
        <Toolbar />
        <List>
          {menuItems.map((item, index) => (
            <ListItem button key={index} onClick={toggleDrawer}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Container
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          paddingTop: 72, // Ajuste isso para combinar com a altura do seu AppBar
          backgroundColor: '#f2f2f2', // Fundo acinzentado
          borderRadius: '8px', // Bordas arredondadas
        }}
      >
        <Toolbar /> {/* Adicione algum espaço abaixo do AppBar */}
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h4" component="div">
              Main Content Area
            </Typography>
          </Grid>
          {/* Adicione mais itens de grid para outros conteúdos */}
        </Grid>
      </Container>
    </div>
  );
};

export default Dashboard;
