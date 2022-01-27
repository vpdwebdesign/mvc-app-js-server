const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { PrismaClient } = require('@prisma/client');

// Instantiate the Express app and port variable
const app = express();

// Define middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: true} ));

// Define port to listen on
const port = process.env.PORT || 3333; 

const prisma = new PrismaClient();

// Define API routes that correspond to the CRUD operations
// we'll use to manage student/subject/score data.
// You can think of these functions as `controllers` in a
// traditional MVC application. They are responsible for
// handling HTTP requests issued from the `views` defined in React
// to manipulate the data held in the app's `model`
// layer (as defined by Prisma and stored in an a PostgreSQL database)

// Create student record
app.post('/student/create', async (req, res) => {
  console.log("Create: ", req.body);
  const { firstname, lastname, gender, subjects} = req.body;
  const student = await prisma.student.create({
    data: {
      firstname: firstname,
      lastname: lastname,
      gender: gender,
      subjects: subjects
    }
  });

  res.json(student);
});

// Read all student records
app.get('/student/readall', async (req, res) => {
  const students = await prisma.student.findMany({});

  res.json(students);
});

// Read a single student record given a student id
app.get('/student/read/:id', async (req, res) => {
  // Get id  parameter from url string
  const {id} = req.params;

  const student = await prisma.student.findUnique({
    where: {
      id: parseInt(id)
    } 
  });

  res.json(student);
});

// Update a student record given a student id.
// Note: For practical reasons we are only going
// to update the record's subjects and scores data, not
// names and gender, which don't change, normally
app.put('/student/update/:id', async (req, res) => {
  // Get id parameter from url string
  const {id} = req.params;
  //const id_ = parseInt(id);
  const {subjects} = req.body;

  const student = await prisma.student.update({
    where: {
      id: parseInt(id)
    },
    data: {
      subjects: subjects
    }
  });

  res.json(student);
});

// Dlete a student record given a student id
app.delete('/student/delete/:id', async (req, res) => {
  // Get id parameter from url string
  const {id} = req.params;

  const deletedStudent = await prisma.student.delete({
    where: {
      id: parseInt(id)
    }
  });

  res.json(deletedStudent);
});

// Finally, delete all student records
app.delete('/student/deleteall', async (req, res) => {
  const deletedCount = await prisma.student.deleteMany({});
  res.json(deletedCount);
});

// Launch Express app server
app.listen(port, () => {
  console.log(`App server listening on your host's port ${port}`);
});
