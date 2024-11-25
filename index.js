const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const message = 'Hello World from Node.js app!';

  console.log(message);
  res.send(
    <html>
      <head><title>Node.js App</title></head>
      <body>
        <h1>${message}</h1>
        <script>
          console.log('Mensagem recebida do servidor: ${message}');
        </script>
      </body>
    </html>
  );
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});