const express = require('express');
const cors = require('cors');

/** @type {import('express').Application} */
const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

app.get('/api/hello', (req: import('express').Request, res: import('express').Response) => {
  res.json({ message: 'Hello from the backend!' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
