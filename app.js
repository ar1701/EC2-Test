const port = 8000;
const express = require('express');
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/name', (req, res) => {
  res.send(`Hello, Ayush!`);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
}
);
