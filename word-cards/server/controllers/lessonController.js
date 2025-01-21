const LessonModel = require("../models/lesson");

module.exports = {
    getLesson: (req, res) => {
        const lesson = LessonModel.getLesson(req.params.id).then((result) => {
            if (result)
                return res.status(200).json(result);
            else
                return res.status(404).json({error: "Lesson Not Found"});
        });
    },

    getLessons: (req, res) => {
        const lesson = LessonModel.getLessons().then((result) => {
            res.status(200).json(result);
        });
    },

    createLesson: (req, res) => {
        const lesson = LessonModel.createLesson(req.params.lesson_name, req.params.teacher_id , req.params.creation_date).then((result) => {
            return res.status(200).json(result);
        });
    },

    deleteLesson: (req, res) => {
        const lesson = LessonModel.deleteLesson(req.params.id).then((result) => {
            return res.status(200).json(result);
        });
    }
}



    




