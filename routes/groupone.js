import express from 'express';
import { charactersData } from '../data/gimbli.js';

const grouponeRouter = express.Router();

const charactersCount = charactersData.length;
const grouponeCharacters = charactersData.slice(0, Math.ceil(charactersCount / 2));

grouponeRouter.get('/', (req, res) => {
    res.render('pages/groupone.ejs', { pageTitle: 'Group One Characters', characters: grouponeCharacters });
});

export { grouponeRouter };
