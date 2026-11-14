const express = require("express");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Student Data
let students = [
  {
    id: 1,
    name: "Rahul",
    department: "CSE",
    semester: 3
  },
  {
    id: 2,
    name: "Anjali",
    department: "ECE",
    semester: 5
  }
];


// GET ALL STUDENTS
app.get("/students", (req, res) => {

  const department = req.query.department;

  if (department) {
    const filteredStudents = students.filter(
      student =>
        student.department.toLowerCase() ===
        department.toLowerCase()
    );

    return res.status(200).json(filteredStudents);
  }

  res.status(200).json(students);
});


// GET SINGLE STUDENT
app.get("/students/:id", (req, res) => {

  const id = parseInt(req.params.id);

  const student = students.find(
    student => student.id === id
  );

  if (!student) {
    return res.status(404).json({
      message: "Student not found"
    });
  }

  res.status(200).json(student);
});


// ADD STUDENT
app.post("/students", (req, res) => {

  const { id, name, department, semester } = req.body;

  if (
    !id ||
    !name ||
    !department ||
    !semester
  ) {
    return res.status(400).json({
      message: "All fields are required"
    });
  }

  const existingStudent = students.find(
    student => student.id === id
  );

  if (existingStudent) {
    return res.status(400).json({
      message: "Student ID already exists"
    });
  }

  const newStudent = {
    id,
    name,
    department,
    semester
  };

  students.push(newStudent);

  res.status(201).json({
    message: "Student added successfully",
    student: newStudent
  });
});


// UPDATE STUDENT
app.put("/students/:id", (req, res) => {

  const id = parseInt(req.params.id);

  const student = students.find(
    student => student.id === id
  );

  if (!student) {
    return res.status(404).json({
      message: "Student not found"
    });
  }

  const { name, department, semester } = req.body;

  if (name) student.name = name;
  if (department) student.department = department;
  if (semester) student.semester = semester;

  res.status(200).json({
    message: "Student updated successfully",
    student
  });
});


// DELETE STUDENT
app.delete("/students/:id", (req, res) => {

  const id = parseInt(req.params.id);

  const studentIndex = students.findIndex(
    student => student.id === id
  );

  if (studentIndex === -1) {
    return res.status(404).json({
      message: "Student not found"
    });
  }

  students.splice(studentIndex, 1);

  res.status(200).json({
    message: "Student deleted successfully"
  });
});


// ERROR HANDLING MIDDLEWARE
app.use((err, req, res, next) => {
  res.status(500).json({
    message: "Internal Server Error"
  });
});


app.listen(PORT, () => {
  console.log(
    `Server running at http://localhost:${PORT}`
  );
});