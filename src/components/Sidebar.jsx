import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useMediaQuery, useTheme } from '@mui/material';
import { 
  List, ListItem, ListItemIcon, ListItemText, Divider
} from '@mui/material';
import { 
  Menu, ChevronLeft, HomeRounded, ReceiptRounded,
  BarChartRounded, CategoryRounded, SavingsRounded, SettingsRounded
} from '@mui/icons-material';

const sidebarVariants = {
  open: { x: 0, width: '240px' },
  closed: { x: '-100%', width: '0px' },
};

const gradientStyle = 'linear-gradient(195deg, #1B5E20 0%, #2E7D32 50%, #4CAF50 100%)';

export default function Sidebar({ isOpen, toggleSidebar }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <motion.div
      animate={isOpen ? "open" : "closed"}
      variants={sidebarVariants}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      style={{
        background: gradientStyle,
        height: '100vh',
        position: 'fixed',
        zIndex: 1000,
        overflow: 'hidden',
        boxShadow: '4px 0 20px rgba(0,0,0,0.1)',
        width: isMobile ? '100%' : '240px'
      }}
    >
      <List sx={{ 
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: isOpen ? 'flex-start' : 'center'
      }}>
        <ListItem 
          button 
          onClick={toggleSidebar}
          sx={{ 
            width: '100%',
            justifyContent: isOpen ? 'flex-end' : 'center',
            mb: 2
          }}
        >
          <ListItemIcon sx={{ minWidth: 'auto', color: 'white' }}>
            {isOpen ? <ChevronLeft /> : <Menu />}
          </ListItemIcon>
        </ListItem>

        {isOpen && (
          <>
            <NavItem to="/" icon={<HomeRounded />} text="Dashboard" />
            <NavItem to="/transactions" icon={<ReceiptRounded />} text="Transações" />
            <NavItem to="/reports" icon={<BarChartRounded />} text="Relatórios" />
            <Divider sx={{ 
              my: 2, 
              bgcolor: 'rgba(255,255,255,0.2)',
              width: '100%' 
            }} />
            <NavItem to="/categories" icon={<CategoryRounded />} text="Categorias" />
            <NavItem to="/goals" icon={<SavingsRounded />} text="Metas" />
            <NavItem to="/settings" icon={<SettingsRounded />} text="Configurações" />
          </>
        )}
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
        borderRadius: '12px',
        marginBottom: '8px',
        width: '100%',
        '&.active': {
          backgroundColor: 'rgba(255,255,255,0.15)',
          '& .MuiListItemIcon-root': {
            color: '#C8E6C9'
          }
        }
      }}
    >
      <ListItemIcon sx={{ 
        minWidth: 'auto', 
        color: 'white',
        mr: 2
      }}>
        {icon}
      </ListItemIcon>
      <ListItemText 
        primary={text} 
        primaryTypographyProps={{
          color: 'white',
          fontWeight: 500,
          variant: 'body2',
          sx: { whiteSpace: 'nowrap' }
        }} 
      />
    </ListItem>
  );
}