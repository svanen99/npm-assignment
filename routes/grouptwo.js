
import express from 'express';
import { charactersData } from '../data/gimbli.js';

const grouptwoRouter = express.Router();
const charactersCount = charactersData.length;

const grouptwoCharacters = charactersData.slice(Math.ceil(charactersCount / 2));

grouptwoRouter.get('/', (req, res) => {
    res.render('pages/group-page.ejs', { 
        pageTitle: 'Group Two Characters',
        characters: grouptwoCharacters, 
        groupName:"grouptwo" 
    });
});


grouptwoRouter.get('/:character', (req, res) => {
    const characterName = req.params.character;

    if (!characterName) {
        return res.status(400).send("Bad Request: Character name is missing");
    }

    const selectedCharacter = grouptwoCharacters.find(char => char.name.toLowerCase() === characterName.toLowerCase());

    if (selectedCharacter) {
        res.render(
            'pages/characters.ejs',
            {
                groupName: "grouptwo",
                pageTitle: selectedCharacter.name,
                subTitle: "Here's some more info about this character",
                className: "character",
                character: selectedCharacter
            }
        );
    } else {
        res.status(404).send("Oops, character not found");
    }
});
export { grouptwoRouter };
