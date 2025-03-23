import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { useTheme, useMediaQuery, Box } from '@mui/material';
import { Routes, Route, useLocation } from 'react-router-dom';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyles';
import TopBar from './components/TopBar';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Transactions from './pages/Transactions';
import Reports from './pages/Reports'; // Importação adicionada

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [pageTitle, setPageTitle] = useState('Dashboard');
  const theme = useTheme();
  const location = useLocation();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const titleMap = {
      '/': 'Dashboard',
      '/transactions': 'Transações',
      '/reports': 'Relatórios'
    };
    setPageTitle(titleMap[location.pathname] || 'Controle Financeiro');
  }, [location.pathname]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      
      <TopBar 
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)} 
        pageTitle={pageTitle}
      />
      
      <Sidebar 
        isOpen={sidebarOpen} 
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)} 
      />
      
      <Box sx={{ 
        ml: { 
          xs: 0, 
          md: sidebarOpen ? '240px' : 0 
        },
        pt: '80px', // Espaçamento fixo para a TopBar
        pb: 3,
        transition: theme.transitions.create(['margin', 'padding'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen
        }),
        px: 3,
        width: { 
          xs: '100%', 
          md: sidebarOpen ? 'calc(100% - 240px)' : '100%' 
        },
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        zIndex: 1
      }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/reports" element={<Reports />} /> {/* Rota corrigida */}
        </Routes>
      </Box>
    </ThemeProvider>
  );
}

export default App;