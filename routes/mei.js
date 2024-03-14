import express from 'express';
import { charactersData } from '../data/gimbli.js';

const meiRouter = express.Router();

meiRouter.get('/:character', (req, res) => {
    const characterName = req.params.character;

    console.log("Reached the mei route handler");
    console.log("Character Name:", characterName);

    if (!characterName) {
        return res.status(400).send("Bad Request: Character name is missing");
    }

    const selectedCharacter = charactersData.find(char => char.name.toLowerCase() === characterName.toLowerCase());

    if (selectedCharacter) {
        res.render(
            'pages/mei.ejs',
            {
                pageTitle: selectedCharacter.name,
                subTitle: "Here's some more info about this character",
                className: "mei",
                character: selectedCharacter,
            }
        );
    } else {
        res.status(404).send("Oops, character not found");
    }
});

export { meiRouter };
