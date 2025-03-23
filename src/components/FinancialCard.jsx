import { Card, CardContent, Typography } from '@mui/material';

export default function FinancialCard({ title, value, color }) {
  return (
    <Card style={{ 
      backgroundColor: color, 
      color: 'white',
      height: '100%'
    }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>{title}</Typography>
        <Typography variant="h4">{value}</Typography>
      </CardContent>
    </Card>
  );
}