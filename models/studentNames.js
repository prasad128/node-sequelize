
const Sequelize = require("sequelize")
const db = require("../config/database")

const StudentNames = db.define("studentNames", {
    name: {
        type: Sequelize.STRING
    }
})

module.exports = StudentNames