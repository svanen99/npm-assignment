import express from 'express';
import { charactersRouter } from './routes/characters.js';
import { grouponeRouter } from './routes/groupone.js'; 
import { grouptwoRouter } from './routes/grouptwo.js'; 

const app = express();
const port = process.env.PORT || 4444;

app.use(express.static('public'));

app.use('/characters', charactersRouter);
app.use('/groupone', grouponeRouter); 
app.use('/grouptwo', grouptwoRouter); 

app.get('/', (req, res) => {
    res.render('pages/home.ejs', {
        pageTitle: 'Your Home Page Title',
        subTitle: 'Welcome to Your Home Page!',
    });
});

app.listen(port, () => console.log(`Running on the coolest port: ${port}`));
