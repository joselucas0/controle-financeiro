import { Typography } from '@mui/material';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const data = [
  { month: 'Jan', receitas: 4000, despesas: 2400 },
  { month: 'Fev', receitas: 3000, despesas: 1398 },
  { month: 'Mar', receitas: 2000, despesas: 9800 },
];

export default function Reports() {
  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>Relatórios</Typography>
      <div style={{ height: 400 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="receitas" fill="#4CAF50" />
            <Bar dataKey="despesas" fill="#D32F2F" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}