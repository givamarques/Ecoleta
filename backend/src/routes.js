const express = require('express');
const multer = require('multer');
const PostController = require('./controllers/PostController');

const routes = new express.Router();
const upload = multer();

//req=requisicao acessa informacao e res=resposta envia
routes.post('/posts', upload.single('image'), PostController.store);

module.exports = routes;