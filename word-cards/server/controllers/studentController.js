const StudentModel = require("../models/student.js");

module.exports = {
    getStudent: (req, res) => {
        const student = StudentModel.getStudent(req.params.id).then((result) => {
            if (result)
                return res.status(200).json(result);
            else
                return res.status(404).json({error: "Student Not Found"});
        });
    },

    getStudents: (req, res) => {
        const student = StudentModel.getStudents().then((result) => {
            res.status(200).json(result);
        });
    },

    createStudent: (req, res) => {
        const student = StudentModel.createStudent(req.params.first_name, req.params.last_name , req.params.age , req.params.gender , req.params.birth_date).then((result) => {
            return res.status(200).json(result);
        });
    },

    deleteStudent: (req, res) => {
        const student = StudentModel.deleteStudent(req.params.id).then((result) => {
            return res.status(200).json(result);
        });
    }
}



    




