const GlobalService = require("./GlobalService");
const table = require("../utils/constants/tablesConstants");
const db = require("../config/databaseConfig");

const roomService = {

    getAllRooms: async () => {
        try {

            const query = `SELECT * FROM ${table.rooms}`;
            const result = await GlobalService.getAll(query, "Room");
            return result;
        }
        catch (error) {

            throw error;
        }
    },
    getRoomById: async (id) => {
        try {

            const query = `SELECT * FROM ${table.rooms} WHERE id = ${id}`;
            const result = await GlobalService.getById(query, "Room");
            return result;
        }
        catch (error) {

            throw error;
        }
    },

};

module.exports = roomService;