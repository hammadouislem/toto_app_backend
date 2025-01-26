const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes/ToDoRoutes');
const { swaggerUi, swaggerSpec } = require("./swagger");

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});