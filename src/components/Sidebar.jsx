import { NavLink } from 'react-router-dom';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Home, AttachMoney, BarChart } from '@mui/icons-material';

export default function Sidebar() {
  const activeStyle = {
    backgroundColor: '#4CAF50',
  };

  return (
    <div style={{ 
      width: 250, 
      minHeight: '100vh', 
      backgroundColor: '#1B5E20',
      padding: '20px 0'
    }}>
      <List>
        <NavLink 
          to="/" 
          style={({ isActive }) => isActive ? activeStyle : undefined}
        >
          <ListItem button>
            <ListItemIcon><Home style={{ color: 'white' }} /></ListItemIcon>
            <ListItemText primary="Dashboard" style={{ color: 'white' }} />
          </ListItem>
        </NavLink>
        <NavLink 
          to="/transactions"
          style={({ isActive }) => isActive ? activeStyle : undefined}
        >
          <ListItem button>
            <ListItemIcon><AttachMoney style={{ color: 'white' }} /></ListItemIcon>
            <ListItemText primary="Transações" style={{ color: 'white' }} />
          </ListItem>
        </NavLink>
        <NavLink 
          to="/reports"
          style={({ isActive }) => isActive ? activeStyle : undefined}
        >
          <ListItem button>
            <ListItemIcon><BarChart style={{ color: 'white' }} /></ListItemIcon>
            <ListItemText primary="Relatórios" style={{ color: 'white' }} />
          </ListItem>
        </NavLink>
      </List>
    </div>
  );
}