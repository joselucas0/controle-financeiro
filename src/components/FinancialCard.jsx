import { Card, CardContent, Typography, Box } from '@mui/material';

export default function FinancialCard({ title, value, icon, trend }) {
  return (
    <Card sx={{ 
      height: '100%', 
      background: 'linear-gradient(135deg, #F5F7FB 0%, #FFFFFF 100%)',
      boxShadow: 2
    }}>
      <CardContent>
        <Box display="flex" alignItems="center" gap={2}>
          <Typography variant="h3">{icon}</Typography>
          <Box>
            <Typography variant="subtitle2" color="textSecondary">
              {title}
            </Typography>
            <Typography variant="h4" fontWeight={600}>
              {value}
            </Typography>
            <Typography 
              variant="body2" 
              color={trend.startsWith('+') ? 'success.main' : 'error.main'}
              sx={{ mt: 0.5 }}
            >
              {trend} em relação ao mês passado
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}