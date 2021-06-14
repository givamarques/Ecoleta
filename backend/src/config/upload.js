const multer = require('multer');
const path = require('path');

module.exports = {
    storage: new multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'uploads'),
        filename: function(req, file, cb) {
            //cb = callback. esta retornando null caso de algum erro ou o nome original do arquivo caso de certo
            cb(null, file.originalname);
        }
    })
};