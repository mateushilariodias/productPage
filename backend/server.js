const app = require('./app'); // Verifique se o caminho está correto
const PORT = process.env.PORT || 3010;

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = server;