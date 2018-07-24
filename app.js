const express = require('express');
const cors = require('cors');
const app = express();

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions));

const generateMedecins = require('./src/services/fake-data-service');
const generatedMedecins = generateMedecins();
const PORT = process.env.port || 3000;

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.get('/medecins', cors(corsOptions), (req,res) => {
    res.json(generatedMedecins);
});

app.listen(PORT, err => {
    if(!err) {
        console.log(`Server running on port: ${PORT}`);
        app.get('/', (req,res) => {
            res.render("index");
        });
    }
});