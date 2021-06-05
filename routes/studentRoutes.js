const express = require('express');
const Marks = require('../models/marks');
const router = express.Router()
const StudentNames = require("../models/studentNames");
const Subjects = require('../models/subjects');

router.get("/", async(req, res) => {
    try {
        const allStudents = await StudentNames.findAll()
        console.log("Students", allStudents);
        res.status(200).json(allStudents)
    } catch (error) {
        console.log("Error -", error);
    }
})

router.post("/", async(req, res) => {
    const {name,id} = req.body;
    console.log("Name and Id", name, id);
    try {
        const createdStudent = await StudentNames.create({id: 9, name: "Jay"})
        console.log("Created Student-", createdStudent);
        // res.status(200).json(createdStudent)
        res.redirect("/students")
    } catch (error) {
        console.log("Error-", error);
    }
})

router.get("/subjects", async(req, res) => {
    try {
        const allSubjects = await Subjects.findAll()
        console.log("All Subjects ------", allSubjects);
        res.status(200).json(allSubjects)
    } catch (error) {
        console.log("Error --------", error);
    }
})

router.post("/subjects", async(req, res) => {
    const {name,id} = req.body;
    console.log("Subject =", name,id);
    try {
        const newSubject = await Subjects.create({id: 2, name: "Science"})
        console.log("Created Subject", newSubject);
        res.redirect("/students/subjects")
    } catch (error) {
        console.log("Error- ", error);
    }
})

router.get("/marks", async(req, res) => {
    try {
        const marksList = await Marks.findAll()
        console.log("Marks List ======", marksList);
        res.status(200).json(marksList)
    } catch (error) {
        console.log("Error-", error);
    }
})

router.post("/marks", async(req, res) => {
    try {
        const studentMarks = await Marks.create({id:17, student_id:10, sub_id:2, marks: 60})
        console.log("Single Student Marks-------", studentMarks);
        res.redirect("/students/marks")
    } catch (error) {
        console.log("Error --", error);        
    }
})

router.get("/student-marks", async(req, res) => {
    try {
        const studentMarks = await StudentNames.findAll({ include: [{ model: Marks, as: "studentMarks"}]})
        console.log("Student Marks------------------", studentMarks);
        res.status(200).json(studentMarks)
    } catch (error) {
        console.log("Error--------", error);
    }
})

module.exports = router