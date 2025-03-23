import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyles';
import TopBar from './components/TopBar';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Transactions from './pages/Transactions';
import Reports from './pages/Reports';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      
      {/* Top Navigation Bar */}
      <TopBar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      
      {/* Sidebar with Animation */}
      <Sidebar 
        isOpen={sidebarOpen} 
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)} 
      />
      
      {/* Main Content Area */}
      <div style={{ 
        marginLeft: sidebarOpen ? '240px' : '72px', 
        transition: 'margin 0.3s ease',
        padding: '20px'
      }}>
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