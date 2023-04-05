const express = require('express');


const {CourseModel} = require('../Models/course.model');
const {UserModel}  = require("../Models/User.model")
const {Feedback} = require('../Models/feedback.model')
const {BookingModel} = require('../Models/booking')
const {StudentModel} =  require("../Models/student.model")
const {TeacherModel} = require('../Models/teacher.model')
const AdminRouter = express.Router();


//All users
AdminRouter.get("/allusers", async(req,res)=>{
    try{
        const users= await UserModel.find()
        res.status(201).send({"users":users});
    }
    catch(err){
        res.status(500).json({message: 'Internal server error'});
    }
})

//All teachers
AdminRouter.get("/allteacher", async(req,res)=>{
    try{
        const teachers= await TeacherModel.find()
        res.status(201).send({"teachers":teachers});
    }
    catch(err){
        res.status(500).json({message: 'Internal server error'});
    }
})


//All courses
AdminRouter.get("/allCourse", async(req,res)=>{
    try{
        const course= await CourseModel.find()
        res.status(201).send({"course":course});
    }
    catch(err){
        res.status(500).json({message: 'Internal server error'});
    }
})

module.exports = {AdminRouter} ;