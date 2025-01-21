const StudentLessonModel = require("../models/studentLesson");


module.exports = {
    getStudentsLessons: (req, res) => {
        const lesson = StudentLessonModel.getStudentLessons().then((result) => {
            if (result)
                return res.status(200).json(result);
            else
                return res.status(404).json({error: "Lesson Not Found"});
        });
}};



    




