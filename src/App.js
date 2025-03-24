import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { useTheme, Box } from '@mui/material';
import { Routes, Route, useLocation } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import TopBar from './components/TopBar';
import Sidebar from './components/Sidebar';
import NewTransactionModal from './components/NewTransactionModal';
import Dashboard from './pages/Dashboard';
import Transactions from './pages/Transactions';
import Reports from './pages/Reports';
import { createTransaction } from './services/api';
import { useSnackbar } from 'notistack';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [pageTitle, setPageTitle] = useState('Dashboard');
  const [modalOpen, setModalOpen] = useState(false);
  const [refreshData, setRefreshData] = useState(false);
  const theme = useTheme();
  const location = useLocation();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    const titleMap = {
      '/': 'Dashboard',
      '/transactions': 'Transações',
      '/reports': 'Relatórios'
    };
    setPageTitle(titleMap[location.pathname] || 'Controle Financeiro');
  }, [location.pathname]);

  const handleAddTransaction = async (transactionData) => {
    try {
      await createTransaction({
        ...transactionData,
        date: new Date(transactionData.date).toISOString()
      });
      enqueueSnackbar('Transação adicionada com sucesso!', { variant: 'success' });
      setRefreshData(!refreshData); // Força atualização dos dados
    } catch (error) {
      enqueueSnackbar('Erro ao adicionar transação', { variant: 'error' });
      console.error('Erro ao criar transação:', error);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      
      <TopBar 
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)} 
        pageTitle={pageTitle}
        onAddClick={() => setModalOpen(true)}
      />
      
      <Sidebar 
        isOpen={sidebarOpen} 
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)} 
      />

      <NewTransactionModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleAddTransaction}
      />
      
      <Box sx={{ 
        ml: { 
          xs: 0, 
          md: sidebarOpen ? '240px' : 0 
        },
        pt: '80px',
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
          <Route path="/" element={<Dashboard refreshTrigger={refreshData} />} />
          <Route 
            path="/transactions" 
            element={<Transactions refreshTrigger={refreshData} />} 
          />
          <Route 
            path="/reports" 
            element={<Reports refreshTrigger={refreshData} />} 
          />
        </Routes>
      </Box>
    </ThemeProvider>
  );
}

export default App;