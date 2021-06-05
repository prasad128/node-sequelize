const Sequelize = require('sequelize');
const db = require("../config/database");
const StudentNames = require('./studentNames');

const Marks = db.define("marks", {
    student_id: {
        type: Sequelize.INTEGER
    },
    sub_id: {
        type: Sequelize.INTEGER
    },
    marks: {
        type: Sequelize.INTEGER
    }
})

StudentNames.hasMany(Marks, { as: "studentMarks", foreignKey: "student_id"})
Marks.belongsTo(StudentNames, { as: "studentMarks", foreignKey: "student_id"})

module.exports = Marks