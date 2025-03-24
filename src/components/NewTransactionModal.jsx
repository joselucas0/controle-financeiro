import { useState } from 'react';
import { Modal, Box, Typography, TextField, Button, MenuItem, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const style = (theme) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
  [theme.breakpoints.down('sm')]: {
    width: '90%'
  }
});

export default function NewTransactionModal({ open, onClose, onSubmit }) {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    description: '',
    amount: '',
    type: 'receita',
    date: new Date().toISOString().split('T')[0],
    category: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      amount: parseFloat(formData.amount)
    });
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style(theme)} component="form" onSubmit={handleSubmit}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Nova Transação
        </Typography>
        
        <Stack spacing={2}>
          <TextField
            label="Descrição"
            variant="outlined"
            fullWidth
            required
            value={formData.description}
            onChange={(e) => setFormData({...formData, description: e.target.value})}
          />
          
          <TextField
            label="Valor"
            variant="outlined"
            type="number"
            fullWidth
            required
            InputProps={{ inputProps: { min: 0, step: 0.01 } }}
            value={formData.amount}
            onChange={(e) => setFormData({...formData, amount: e.target.value})}
          />
          
          <TextField
            select
            label="Tipo"
            value={formData.type}
            onChange={(e) => setFormData({...formData, type: e.target.value})}
            fullWidth
          >
            <MenuItem value="receita">Receita</MenuItem>
            <MenuItem value="despesa">Despesa</MenuItem>
          </TextField>
          
          <TextField
            label="Data"
            type="date"
            InputLabelProps={{ shrink: true }}
            fullWidth
            value={formData.date}
            onChange={(e) => setFormData({...formData, date: e.target.value})}
          />
          
          <TextField
            label="Categoria"
            variant="outlined"
            fullWidth
            value={formData.category}
            onChange={(e) => setFormData({...formData, category: e.target.value})}
          />
          
          <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
            <Button 
              variant="contained" 
              type="submit"
              sx={{ 
                bgcolor: '#2E7D32',
                '&:hover': { bgcolor: '#1B5E20' }
              }}
            >
              Adicionar
            </Button>
            <Button 
              variant="outlined" 
              onClick={onClose}
              sx={{ borderColor: '#2E7D32', color: '#2E7D32' }}
            >
              Cancelar
            </Button>
          </Box>
        </Stack>
      </Box>
    </Modal>
  );
}