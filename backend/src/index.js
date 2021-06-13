const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://givamarques:50660000@cluster0.q9mby.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
})

//req=requisicao acessa informacao e res=resposta envia
app.get('/', (req, res) => {
    return res.send('Hello stranger');
});

app.use(require('./routes'));

app.listen(3333);
//na pasta backend 'mode src index' e ja pode acessar localhost:3333 que vai retornar o 'Hello World'