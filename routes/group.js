import express from 'express';
import { charactersData } from '../data/gimbli.js';

const groupRouter = express.Router();

groupRouter.get('/:group/:character', (req, res) => {
    const groupName = req.params.group;
    const characterName = req.params.character;

    const selectedCharacter = charactersData.find(char => 
        char.group && char.group.toLowerCase() === groupName.toLowerCase() && 
        char.name.toLowerCase() === characterName.toLowerCase()
    );

    if (selectedCharacter) {
        res.render(
            'pages/characters.ejs',
            {
                pageTitle: selectedCharacter.name,
                subTitle: "Here's some more info about this character",
                character: selectedCharacter
            }
        );
    } else {
        res.status(404).send(`Not Found: Character ${characterName} not found for Group ${groupName}`);
    }
});

export { groupRouter };
