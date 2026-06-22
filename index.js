const express = require('express');
const cors = require('cors');
require('dotenv').config();

const shodanRoutes = require('./routes/shodanRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req,res)=>{
    res.json({menssagem:'API Shodan rodando!'});
});

app.use('/api/shodan', shodanRoutes);

if(process.env.NODE_ENV !== 'production'){
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, ()=>console.log(`Servidor Rodando na porta ${PORT}`));
}

module.exports = app;