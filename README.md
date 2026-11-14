Student Management REST API
A simple REST API built using Node.js and Express.js to manage student records.

Features:
 Get all students
 Get a student by ID
 Add a new student
 Update student details
 Delete a student
 Search students by department
 Input validation
 Error handling middleware
 Proper HTTP status codes

Technologies Used
 Node.js
 Express.js

Installation:

Clone the repository:

git clone https://github.com/hariprasad987-create/week7-web-devolepment.git


Move into the project folder:

cd week7-web-devolepment


Install dependencies:

npm install

 Run the Server
node server.js


Server runs at:

http://localhost:3000

 API Endpoints
Get All Students
GET /students

Get Student by ID
GET /students/:id


Example:

GET /students/1

Add New Student
POST /students


Request Body:

JSON
{
"id": 3,
"name": "Hari Prasad",
"department": "AI-ML",
"semester": 4
}
Update Student
PUT /students/:id


Request Body:

JSON
{
"semester": 5
}
Delete Student
DELETE /students/:id


Example:

DELETE /students/3

Search Students by Department
GET /students?department=CSE

 HTTP Status Codes
Code	Description
200	OK
201	Created
400	Bad Request
404	Not Found
500	Internal Server Error

Project Structure
week7-web-devolepment/
│
├── server.js
├── package.json
├── package-lock.json
└── README.md

Testing

Tested using:
Thunder Client
Browser (GET Requests)


Author:
Hari Prasad

