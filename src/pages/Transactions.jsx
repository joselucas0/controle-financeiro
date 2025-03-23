import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const transactions = [
  { date: '01/01/2024', description: 'Salário', value: 5000, type: 'receita' },
  { date: '02/01/2024', description: 'Aluguel', value: 1200, type: 'despesa' },
  { date: '03/01/2024', description: 'Supermercado', value: 450, type: 'despesa' },
];

export default function Transactions() {
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', paddingTop: '80px' }}>
      <TableContainer component={Paper} sx={{ borderRadius: '12px' }}>
        <Table>
          <TableHead sx={{ bgcolor: '#F5F7FB' }}>
            <TableRow>
              <TableCell>Data</TableCell>
              <TableCell>Descrição</TableCell>
              <TableCell align="right">Valor (R$)</TableCell>
              <TableCell>Tipo</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.map((transaction, index) => (
              <TableRow key={index}>
                <TableCell>{transaction.date}</TableCell>
                <TableCell>{transaction.description}</TableCell>
                <TableCell 
                  align="right"
                  sx={{ color: transaction.type === 'receita' ? '#4CAF50' : '#D32F2F' }}
                >
                  {transaction.type === 'despesa' ? '-' : ''}{transaction.value},00
                </TableCell>
                <TableCell>
                  <span style={{
                    padding: '4px 8px',
                    borderRadius: '4px',
                    backgroundColor: transaction.type === 'receita' ? '#E8F5E9' : '#FFEBEE',
                    color: transaction.type === 'receita' ? '#2E7D32' : '#D32F2F'
                  }}>
                    {transaction.type.charAt(0).toUpperCase() + transaction.type.slice(1)}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}