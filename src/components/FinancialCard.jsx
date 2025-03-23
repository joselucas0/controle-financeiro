import {  Card, CardContent, Typography, Box, Grid } from '@mui/material';

export default function FinancialCard({ title, value, trend, period }) {
  return (
    <Grid item xs={12} sm={6} lg={4}>
      <Card sx={{ 
        height: '100%', 
        borderRadius: 3,
        background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)',
        boxShadow: 2,
        transition: 'transform 0.3s ease',
        '&:hover': {
          transform: 'translateY(-5px)'
        }
      }}>
        <CardContent sx={{ textAlign: 'center' }}>
          <Typography variant="h6" color="textSecondary" gutterBottom>
            {title}
          </Typography>
          
          <Box sx={{ 
            fontSize: '2rem', 
            fontWeight: 700,
            color: trend.startsWith('+') ? 'success.main' : 'error.main',
            mb: 1
          }}>
            {value}
          </Box>
          
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center',
            justifyContent: 'center',
            gap: 1
          }}>
            <Typography 
              variant="body2" 
              sx={{ 
                color: trend.startsWith('+') ? 'success.main' : 'error.main',
                fontWeight: 500
              }}
            >
              {trend}
            </Typography>
            <Typography 
              variant="caption" 
              color="textSecondary"
            >
              {period}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
}