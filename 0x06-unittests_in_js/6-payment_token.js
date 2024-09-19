const getPaymentTokenFromAPI = (success) => new Promise((resolve) => {
  if (success) {
    resolve({ data: 'Successful response from the API' });
  }
});

module.exports = getPaymentTokenFromAPI;
