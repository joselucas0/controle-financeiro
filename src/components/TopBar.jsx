import { AppBar, Toolbar, IconButton, Typography, Box } from '@mui/material';
import { Menu, Notifications, AccountCircle } from '@mui/icons-material';

export default function TopBar({ toggleSidebar, pageTitle }) {
  return (
    <AppBar 
      position="fixed"
      sx={{
        background: 'linear-gradient(195deg, #1B5E20 0%, #2E7D32 50%, #4CAF50 100%)',
        boxShadow: 'none',
        color: 'white',
        zIndex: 1300 // Z-index aumentado
      }}
    >
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          onClick={toggleSidebar}
          sx={{ mr: 2 }}
        >
          <Menu />
        </IconButton>

        <Typography 
          variant="h6"
          sx={{ 
            flexGrow: 1,
            fontWeight: 600,
            letterSpacing: '0.5px'
          }}
        >
          {pageTitle}
        </Typography>

        <Box>
          <IconButton color="inherit">
            <Notifications />
          </IconButton>
          
          <IconButton color="inherit" sx={{ ml: 2 }}>
            <AccountCircle />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}