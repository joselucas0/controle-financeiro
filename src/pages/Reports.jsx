import { Box, Typography } from '@mui/material';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { month: 'Jan', receitas: 4000, despesas: 2400 },
  { month: 'Fev', receitas: 3000, despesas: 1398 },
  { month: 'Mar', receitas: 2000, despesas: 9800 },
];

export default function Reports() {
  return (
    <Box sx={{ 
      width: '100%',
      maxWidth: 1000,
      bgcolor: 'background.paper',
      borderRadius: 4,
      p: 3,
      boxShadow: 3
    }}>
      <Typography variant="h5" sx={{ mb: 3, color: 'text.primary' }}>
        Análise Financeira Mensal
      </Typography>
      
      <Box sx={{ height: 400 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar 
              dataKey="receitas" 
              fill="#4CAF50"
              name="Receitas"
              radius={[4, 4, 0, 0]}
            />
            <Bar 
              dataKey="despesas" 
              fill="#D32F2F"
              name="Despesas"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
}