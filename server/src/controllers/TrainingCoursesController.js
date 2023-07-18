const trainingCoursesService = require('../services/TrainingCoursesService');
const responseFormatter = require('../utils/responseFormatter');

const trainingCoursesController = {
    getAllTrainingCourses: async (_, res) => {
        try {
            const trainingCourses = await trainingCoursesService.getAllTrainingCourses();
            const response = responseFormatter.formatResponse(res.statusCode, trainingCourses);
            res.json(response);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getTrainingCourseById: async (req, res) => {
        try {
            const trainingCourse = await trainingCoursesService.getTrainingCourseById(
                req.params.id
            );
            const response = responseFormatter.formatResponse(res.statusCode, trainingCourse);
            res.json(response);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getTrainingCourseBySensorId: async (req, res) => {
        try {
            const trainingCourse = await trainingCoursesService.getTrainingCourseBySensorId(
                req.params.id
            );
            const response = responseFormatter.formatResponse(res.statusCode, trainingCourse);
            res.json(response);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
};

module.exports = trainingCoursesController;
