
import express from 'express';
import { charactersData } from '../data/gimbli.js';

const grouponeRouter = express.Router();
const charactersCount = charactersData.length;

const grouponeCharacters = charactersData.slice(Math.ceil(charactersCount / 2));

grouponeRouter.get('/', (req, res) => {
    res.render('pages/group-page.ejs', { 
        pageTitle: 'Group One Characters',
        characters: grouponeCharacters, 
        groupName:"groupone" 
    });
});


grouponeRouter.get('/:character', (req, res) => {
    const characterName = req.params.character;

    if (!characterName) {
        return res.status(400).send("Bad Request: Character name is missing");
    }

    const selectedCharacter = grouponeCharacters.find(char => char.name.toLowerCase() === characterName.toLowerCase());

    if (selectedCharacter) {
        res.render(
            'pages/characters.ejs',
            {
                groupName: "groupone",
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
export { grouponeRouter };
