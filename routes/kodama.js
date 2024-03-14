import express from 'express';
import { charactersData } from '../data/gimbli.js';

const kodamaRouter = express.Router();

kodamaRouter.get('/:character', (req, res) => {
    const characterName = req.params.character;

    console.log("Reached the kodama route handler");
    console.log("Character Name:", characterName);

    if (!characterName) {
        return res.status(400).send("Bad Request: Character name is missing");
    }

    const selectedCharacter = charactersData.find(char => char.name.toLowerCase() === characterName.toLowerCase());

    if (selectedCharacter) {
        res.render(
            'pages/kodama.ejs',
            {
                pageTitle: selectedCharacter.name,
                subTitle: "Here's some more info about this character",
                className: "kodama",
                character: selectedCharacter,
            }
        );
    } else {
        res.status(404).send("Oops, character not found");
    }
});

export { kodamaRouter };
