const GlobalService = require('./GlobalService');
const table = require('../utils/constants/tablesConstants');
const model = require('../utils/constants/modelsConstants');
const db = require('../config/databaseConfig');

const trainingCoursesService = {
    getAllTrainingCourses: async () => {
        try {
            const query = `SELECT * FROM ${table.training_courses}`;
            const result = await GlobalService.getAll(query, model.trainingCoursesModel);
            return result;
        } catch (error) {
            throw error;
        }
    },

    getTrainingCourseById: async (id) => {
        try {
            const query = `SELECT * FROM ${table.training_courses} WHERE id = ${id}`;
            const result = await GlobalService.getById(query, model.trainingCoursesModel);
            return result;
        } catch (error) {
            throw error;
        }
    },

    getTrainingCourseBySensorId: async (id) => {
        try {
            return new Promise((resolve, reject) => {
                const query = `SELECT * FROM ${table.training_courses} WHERE sensor_id = '${id}'`;
                db.query(query, (error, result) => {
                    if (error || result.length === 0) {
                        reject(new Error('Capteur inexistante.'));
                    } else {
                        resolve(result);
                    }
                });
            });
        } catch (error) {
            throw error;
        }
    },
};

module.exports = trainingCoursesService;
