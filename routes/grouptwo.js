
import express from 'express';
import { charactersData } from '../data/gimbli.js';

const grouptwoRouter = express.Router();
const charactersCount = charactersData.length;

const grouptwoCharacters = charactersData.slice(Math.ceil(charactersCount / 2));

grouptwoRouter.get('/', (req, res) => {
    res.render('pages/grouptwo.ejs', { pageTitle: 'Group Two Characters', characters: grouptwoCharacters });
});

export { grouptwoRouter };
