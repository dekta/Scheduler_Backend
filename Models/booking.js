const mongoose = require("mongoose")


const bookingSchema  =  mongoose.Schema({
    StudentName:String,
    email:String,
    phone:String,
    startDate :String,
    teacherName:String,
    Teacher_Booking_id:Number,
    teacherSlot:String,
    fees:Number,
    courseName:String,
    duration:String,
    fees:Number,
    slot:String,
    feeStatus:{type:Boolean, default:false}

})

const BookingModel =  mongoose.model("booking",bookingSchema)
module.exports = {BookingModel}