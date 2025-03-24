export async function createTransaction(transactionData) {
    return new Promise((resolve) => {
      console.log('Simulando criação de transação com os dados:', transactionData);
      setTimeout(() => {
        resolve({ data: transactionData });
      }, 500);
    });
  }