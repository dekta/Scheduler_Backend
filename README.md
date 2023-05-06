# Scheduler_Backend



## API Documentation
  - Deployed = 

### User End Point

| METHOD      | ENDPOINT    |  Request Body | DESCRIPTION |
| :---        |    :----:   | :-----------: | :----------:|
| POST        | /UserRouter/signup  | name,email,password,image |This endpoint allow users to register in the website and send user a real time email for confirmation|
| POST  | /UserRouter/login  |email,password|  This endpoint allow users to login. Return JWT token on login. |
| POST |  /UserRouter/logout | token (getting after login) | This endpoint allow users to logout|
|POST |  /UserRouter/forgotPasword | email | This endpoint allow users to reset password.In this end point user enter their email ( registered email).by this email we find the user and send a otp at user email |
|POST| /UserRouter/verifyOTP | otp | in this end point user enter the otp that we sended user by email|
|POST| /UserRouter/changePassword | Password | in this end point user enter updated password and password updated in database|
