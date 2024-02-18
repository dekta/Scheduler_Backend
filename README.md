# Scheduler_Backend



## API Documentation
  - Deployed backend = https://odd-teal-caridea-tux.cyclic.app/

### User End Point

| METHOD      | ENDPOINT    |  Request Body | DESCRIPTION |
| :---        |    :----:   | :-----------: | :----------:|
| POST        | /UserRouter/signup  | name,email,password,image |This endpoint allow users to register in the website and send user a real time email for confirmation|
| POST  | /UserRouter/login  |email,password|  This endpoint allow users to login. Return JWT token on login. |
| POST |  /UserRouter/logout | token (getting after login) | This endpoint allow users to logout|
|POST |  /UserRouter/forgotPasword | email | This endpoint allow users to reset password.In this end point user enter their email ( registered email).by this email we find the user and send a otp at user email |
|POST| /UserRouter/verifyOTP | otp | in this end point user enter the otp that we sended user by email|
|POST| /UserRouter/changePassword | Password | in this end point user enter updated password and password updated in database|



### teacher end point

| METHOD      | ENDPOINT    |  Request Body | DESCRIPTION |
| :---        |    :----:   | :-----------: | :----------:|
| POST        | /scheduler/teacher/addDetails | mobile,gender,address,qualification,experience,expertise | this end point for add teacher other details |
| GET         |  /scheduler/teacher/getAllTeacher   |     | this end point for getting all the teachers details that are registered in website |
| PATCH |  /scheduler/teacher/update/TeacherDetails | authentication required | from this user can update their details |




### Student End Point 

| METHOD      | ENDPOINT    |  Request Body | DESCRIPTION |
| :---        |    :----:   | :-----------: | :----------:|
| POST   | /scheduler/student/addDetails  | mobile,gender,address,standard,subjects,courseDetails |  this end point for add student other details |
| GET | /scheduler/student/allStudents  |    |  this end point for getting all the students details that are registered in website |
| PATCH |  /scheduler/student/update/studentDetails | authentication required | from this user can update their details |
| POST   | /booking/slotBooking  | StudentName, email,phone,courseName,teacherName,Teacher_Booking_id,slot | from this user can book slot of selected teacher |
| POST  | /feedback/StudentFeedback | name,email,message |  from this end point user can give feedback |




### Admin Route
-  Admin registration required

| METHOD      | ENDPOINT    |  Request Body | DESCRIPTION |
| :---        |    :----:   | :-----------: | :----------:|
| GET   |  /adminRoute/allusers  |    |  get all user details |
| GET  | /adminRoute/allRegTeacher  |   |  get details all register teachers |
| PATCH | /adminRoute/makePermanent  |   |  make teacher as permanent teacher |
| DELETE | /adminRoute/deleteTeacher  |   |  remove teacher | 
| GET  | /adminRoute/allStudents  |  |  GET All students details |
| GET |  /adminRoute//allFeedback |  |  Get all feedbacks  |
| GET  |  /adminRoute/allBooking  |  |  detail of all bookings |
| GET | /adminRoute/activeUser   |   |  All active users count | 


