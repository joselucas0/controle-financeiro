import { Grid, Card, Box, Typography } from '@mui/material';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import FinancialCard from '../components/FinancialCard';

const data = [
  { name: 'Receitas', value: 4000, color: '#4CAF50' },
  { name: 'Despesas', value: 1500, color: '#D32F2F' },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{
        background: 'white',
        padding: '8px',
        borderRadius: '4px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <p style={{ margin: 0, color: payload[0].payload.color }}>
          {`${payload[0].name}: R$ ${payload[0].value.toLocaleString('pt-BR')}`}
        </p>
      </div>
    );
  }
  return null;
};

export default function Dashboard() {
  return (
    <Box sx={{ 
      width: '100%',
      maxWidth: 1200,
      display: 'flex',
      flexDirection: 'column',
      gap: 3
    }}>
      <Grid container spacing={3}>
        <FinancialCard 
          title="Saldo Atual" 
          value="R$ 8.450,00" 
          trend="+2.3%"
          period="em relação ao mês passado"
        />
        <FinancialCard 
          title="Receitas" 
          value="R$ 12.300,00" 
          trend="+5.1%"
          period="em relação ao mês passado"
        />
        <FinancialCard 
          title="Despesas" 
          value="R$ 3.850,00" 
          trend="-1.2%"
          period="em relação ao mês passado"
        />
      </Grid>

      <Card sx={{
        p: 3,
        borderRadius: 4,
        boxShadow: 3,
        bgcolor: 'background.paper'
      }}>
        <Typography variant="h6" sx={{ mb: 2, color: 'text.secondary' }}>
          Distribuição Financeira
        </Typography>
        <Box sx={{ height: 300 }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart margin={{ top: 0, right: 30, left: 30, bottom: 0 }}>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
              >
                {data.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
              <Legend 
                align="right"
                verticalAlign="middle"
                layout="vertical"
                formatter={(value, entry) => (
                  <span style={{ color: '#2D3436' }}>
                    {value} - {((entry.payload.percent * 100).toFixed(1))}%
                  </span>
                )}
                iconSize={12}
                iconType="circle"
              />
            </PieChart>
          </ResponsiveContainer>
        </Box>
      </Card>
    </Box>
  );
}