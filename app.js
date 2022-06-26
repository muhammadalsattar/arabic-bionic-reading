import path from 'path';
import express from 'express';
import hbs from 'hbs'

import transform from './utils/transform.js';
import template from './utils/template.js';
import generateFile from './utils/generate-file.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(process.cwd(), '/public')));
app.set('view engine', 'hbs');
app.set('views', path.join(process.cwd(), '/views'));
hbs.registerPartials(path.join(process.cwd(), '/views/partials/template'));


app.get('/', (req, res) => {
    res.render('main');
});


app.get('/download', (req, res) => {
    res.download('./Arabic-bionic-text.html', 'Arabic-bionic-text.html');
});

app.post('/generate', (req, res) => {
    const pages = transform(req.body.text);
    const HTMLTemplate = template(pages);
    generateFile(HTMLTemplate);
    res.send({pages});
});


app.listen(port, () => {
    console.log('Server is running on port 3000');
});
