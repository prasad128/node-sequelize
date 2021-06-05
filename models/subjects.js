const Sequelize = require("sequelize")
const db = require("../config/database")

const Subjects = db.define("subjects", {
   sub_name: {
        type: Sequelize.STRING
    }
})

module.exports = Subjects