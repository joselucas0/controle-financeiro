import { AppBar, Toolbar, IconButton, Badge, Box } from '@mui/material';
import { Menu, Notifications, AccountCircle } from '@mui/icons-material';

export default function TopBar({ toggleSidebar }) {
  return (
    <AppBar position="static" color="inherit" elevation={1}>
      <Toolbar>
        <IconButton edge="start" onClick={toggleSidebar}>
          <Menu />
        </IconButton>
        
        <Box flexGrow={1} />
        
        <IconButton>
          <Badge badgeContent={3} color="primary">
            <Notifications />
          </Badge>
        </IconButton>
        
        <IconButton sx={{ ml: 2 }}>
          <AccountCircle />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}