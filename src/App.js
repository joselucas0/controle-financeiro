import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme'; // <-- Importe o theme aqui
import { GlobalStyles } from './styles/GlobalStyles';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Transactions from './pages/Transactions';
import Reports from './pages/Reports';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/reports" element={<Reports />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;