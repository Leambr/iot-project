const express = require('express');
const trainingCoursesController = require('../controllers/TrainingCoursesController');

const router = new express.Router();

router.get('/trainingCourses', trainingCoursesController.getAllTrainingCourses);
router.get('/trainingCourseById/:id', trainingCoursesController.getTrainingCourseById);
router.get('/trainingCourseBySensorId/:id', trainingCoursesController.getTrainingCourseBySensorId);
module.exports = router;
