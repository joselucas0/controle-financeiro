import { motion } from 'framer-motion';
import { Grid, Card, Typography, useTheme } from '@mui/material';
import FinancialCard from '../components/FinancialCard';
import { 
  ResponsiveContainer, 
  PieChart, Pie, Cell, 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend 
} from 'recharts';

const data = [
  { name: 'Jan', receita: 4000, despesa: 2400 },
  { name: 'Fev', receita: 3000, despesa: 1398 },
  { name: 'Mar', receita: 2000, despesa: 9800 },
];

const chartData = [
  { name: 'Receitas', value: 4000, color: '#4CAF50' },
  { name: 'Despesas', value: 1500, color: '#D32F2F' },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Dashboard() {
  const theme = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{ padding: '20px', marginLeft: 240 }}
    >
      <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
        Visão Geral Financeira
      </Typography>

      <Grid container spacing={3} sx={{ mb: 4 }}>
        {[
          { title: 'Saldo Atual', value: 'R$ 8.450,00', icon: '💰', trend: '+2.3%' },
          { title: 'Receitas', value: 'R$ 12.300,00', icon: '📈', trend: '+5.1%' },
          { title: 'Despesas', value: 'R$ 3.850,00', icon: '📉', trend: '-1.2%' },
        ].map((card, index) => (
          <Grid item xs={12} md={4} key={card.title}>
            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.1 }}
            >
              <FinancialCard {...card} />
            </motion.div>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Card sx={{ p: 2, height: 400 }}>
            <Typography variant="h6" gutterBottom>
              Tendência Mensal
            </Typography>
            <ResponsiveContainer width="100%" height="90%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="receita" 
                  stroke="#4CAF50" 
                  strokeWidth={2}
                />
                <Line 
                  type="monotone" 
                  dataKey="despesa" 
                  stroke="#D32F2F" 
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ p: 2, height: 400 }}>
            <Typography variant="h6" gutterBottom>
              Distribuição de Gastos
            </Typography>
            <ResponsiveContainer width="100%" height="90%">
              <PieChart>
                <Pie
                  data={chartData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                >
                  {chartData.map((entry, index) => (
                    <Cell key={index} fill={entry.color} />
                  ))}
                </Pie>
                <Legend 
                  align="right"
                  layout="vertical"
                  verticalAlign="middle"
                  formatter={(value, entry) => (
                    <span style={{ color: theme.palette.text.primary }}>
                      {value} - R$ {entry.payload.value}
                    </span>
                  )}
                />
              </PieChart>
            </ResponsiveContainer>
          </Card>
        </Grid>
      </Grid>
    </motion.div>
  );
}