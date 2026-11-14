Student Management REST API
A simple REST API built using Node.js and Express.js for managing student records.

Features
Retrieve all students
Retrieve a student by ID
Add a new student
Update student details
Delete a student
Search students by department
Input validation
Proper HTTP status codes
Error handling middleware
Technologies Used
Node.js
Express.js
Installation
Clone the repository:

git clone https://github.com/hariprasad987-create/student-management-api.git
Move into the project directory:

cd student-management-api
Install dependencies:

npm install
Run the Server
node server.js
Server will run on:

http://localhost:3000
API Endpoints
Get All Students
GET /students
Get Student By ID
GET /students/:id
Example:

GET /students/1
Add New Student
POST /students
Request Body:

{
  "id": 3,
  "name": "Hari Prasad",
  "department": "AI-ML",
  "semester": 4
}
Update Student
PUT /students/:id
Request Body:

{
  "semester": 5
}
Delete Student
DELETE /students/:id
Example:

DELETE /students/3
Search by Department
GET /students?department=CSE
HTTP Status Codes
200 OK
201 Created
400 Bad Request
404 Not Found
500 Internal Server Error
Project Structure
student-management-api/
│
├── node_modules/
├── package.json
├── package-lock.json
├── server.js
└── README.md
Testing
The API can be tested using:

Postman
Thunder Client
Browser (for GET requests)
Author
Hari Prasad