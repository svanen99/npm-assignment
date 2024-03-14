import express from 'express';
import { chihiroRouter } from './routes/chihiro.js';
import { jijiRouter } from './routes/jiji.js';
import { kikkiRouter } from './routes/kikki.js';
import { kodamaRouter } from './routes/kodama.js';
import { sanRouter } from './routes/san.js';
import { setsukoRouter } from './routes/setsuko.js';
import { totoroRouter } from './routes/totoro.js';
import { meiRouter } from './routes/mei.js';



const app = express();
const port = process.env.PORT || 4444;

app.use(express.static('public'));
app.use('/chihiro', chihiroRouter);
app.use('/jiji', jijiRouter);
app.use('/kikki', kikkiRouter);
app.use('/kodama', kodamaRouter);
app.use('/san', sanRouter);
app.use('/setsuko', setsukoRouter);
app.use('/totoro', totoroRouter);
app.use('/mei', meiRouter);






app.get('/', (req, res) => {
    res.render('pages/home.ejs', {
        pageTitle: 'Your Home Page Title',
        subTitle: 'Welcome to Your Home Page!',
       
    });
});

app.listen(port, () => console.log(`Running on the coolest port: ${port}`));
