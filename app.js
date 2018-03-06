const express = require('express');
const multer = require('multer');
const upload = multer({ dest: './uploads/' });

const port = process.env.PORT || '1337';

const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

app.post('/get-file-size', upload.single('file'), (req, res) => {
  res.json({
    size: req.file.size
  });
});

app.get('*', (req, res) => {
  res.render('index');
});

app.listen(port, () => {
  console.log('App running on port ' + port);
});
