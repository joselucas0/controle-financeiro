import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

export default function Transactions() {
  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>Transações</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Data</TableCell>
              <TableCell>Descrição</TableCell>
              <TableCell align="right">Valor</TableCell>
              <TableCell>Categoria</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* Dados fictícios */}
            <TableRow>
              <TableCell>01/01/2024</TableCell>
              <TableCell>Salário</TableCell>
              <TableCell align="right" style={{ color: 'green' }}>R$ 5.000,00</TableCell>
              <TableCell>Receita</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>02/01/2024</TableCell>
              <TableCell>Aluguel</TableCell>
              <TableCell align="right" style={{ color: 'red' }}>R$ 1.200,00</TableCell>
              <TableCell>Moradia</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}