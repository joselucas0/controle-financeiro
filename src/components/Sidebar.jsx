import { NavLink } from 'react-router-dom'; // Adicionar esta linha
import { motion } from 'framer-motion';
import { 
  List, ListItem, ListItemIcon, ListItemText, Divider,
  Menu // Adicionar esta importação
} from '@mui/material';
import { 
  Home, Receipt, BarChart, Savings, Category, Settings 
} from '@mui/icons-material'; // Remover AccountBalanceWallet não utilizado

const sidebarVariants = {
  open: { width: 240 },
  closed: { width: 72 },
};

export default function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <motion.div
      animate={isOpen ? "open" : "closed"}
      variants={sidebarVariants}
      style={{
        background: '#1B5E20',
        height: '100vh',
        overflow: 'hidden',
        position: 'fixed',
        zIndex: 1000
      }}
    >
      <List>
        <ListItem button onClick={toggleSidebar}>
          <ListItemIcon sx={{ minWidth: 40 }}>
            <Menu style={{ color: 'white' }} />
          </ListItemIcon>
        </ListItem>
        
        <NavItem to="/" icon={<Home />} text="Dashboard" />
        <NavItem to="/transactions" icon={<Receipt />} text="Transações" />
        <NavItem to="/reports" icon={<BarChart />} text="Relatórios" />
        
        <Divider sx={{ my: 2, bgcolor: 'rgba(255,255,255,0.2)' }} />
        
        <NavItem to="/categories" icon={<Category />} text="Categorias" />
        <NavItem to="/goals" icon={<Savings />} text="Metas" />
        <NavItem to="/settings" icon={<Settings />} text="Configurações" />
      </List>
    </motion.div>
  );
}

function NavItem({ to, icon, text }) {
  return (
    <ListItem 
      button 
      component={NavLink} 
      to={to}
      sx={{
        '&.active': {
          bgcolor: 'rgba(255,255,255,0.1)',
          borderRight: '3px solid #4CAF50'
        }
      }}
    >
      <ListItemIcon sx={{ minWidth: 40, color: 'white' }}>
        {icon}
      </ListItemIcon>
      <ListItemText primary={text} sx={{ color: 'white' }} />
    </ListItem>
  );
}