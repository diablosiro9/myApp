// server.js
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');  // Routes pour l'authentification

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());  // Pour lire le JSON dans les requêtes

// Connecter à une base de données MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log(err));

// Utiliser les routes pour l'authentification
app.use('/api', authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
