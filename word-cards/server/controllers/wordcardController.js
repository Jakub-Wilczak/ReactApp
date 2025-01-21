const WordcardModel = require("../models/wordcard");
const LessonModel = require("../models/lesson");

module.exports = {
    getWordcard: (req, res) => {
        WordcardModel.getWordcard(req.params.id).then((result) => {
            if (result)
                return res.status(200).json(result);
            else
                return res.status(404).json({error: "WordCard Not Found"});
        });
    },

    getWordcards: (req, res) => {
        const wordcard = WordcardModel.getWordcards().then((result) => {
            res.status(200).json(result);
        });
    },

 
    createWordcard:async (req, res) => {
        const lesson_id = await LessonModel.getLesson(req.params.lesson_id)
        if (lesson_id)
            return res.status(404).json({error: "There is no lesson with that id so wordcard can't be created"});

        if (req.params.challenge_word.length >200)
            return res.status(404).json({error: "Challenge word is too long"});

        if (req.params.secret_word.length >200)
            return res.status(404).json({error: "secret word is too long"});
        
        WordcardModel.createWordcard(req.params.lesson_id, req.params.challenge_word, req.params.secret_word).then((result) => {
            return res.status(200).json(result);
        });
    },

    deleteWordcard: (req, res) => {
        const wordcard = WordcardModel.deleteWordcard(req.params.id).then((result) => {
            return res.status(200).json(result);
        });
    }
}



    




