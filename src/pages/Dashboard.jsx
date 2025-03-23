import { Card, CardContent, Typography, Grid } from '@mui/material';
import FinancialCard from '../components/FinancialCard';
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const data = [
  { name: 'Receitas', value: 4000 },
  { name: 'Despesas', value: 1500 },
];

export default function Dashboard() {
  return (
    <div style={{ padding: '20px', width: '100%' }}>
      <Typography variant="h4" gutterBottom>Visão Geral</Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <FinancialCard 
            title="Saldo Atual" 
            value="R$ 2.500,00" 
            color="#4CAF50" 
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <FinancialCard 
            title="Receitas Mensais" 
            value="R$ 4.000,00" 
            color="#2E7D32" 
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <FinancialCard 
            title="Despesas Mensais" 
            value="R$ 1.500,00" 
            color="#D32F2F" 
          />
        </Grid>
      </Grid>

      <Card style={{ marginTop: 20 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>Distribuição de Gastos</Typography>
          <div style={{ height: 300 }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                >
                  {data.map((entry, index) => (
                    <Cell 
                      key={index} 
                      fill={index === 0 ? '#4CAF50' : '#D32F2F'} 
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}