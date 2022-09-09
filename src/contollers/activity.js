const database = require('../database');

class Activity {
    async create(req, res) {
        const {
            PersonID,
            Name,
            Description,
            Place,
        } = req.body;

        const activity = await database.query('INSERT INTO Activity (PersonID, Name, Description, Place) values ($1, $2, $3, $4) RETURNING *'
            , [PersonID, Name, Description, Place]);

        res.json(activity.rows[0]);
    }

    async getAll(req, res) {
        const ID = req.params.id;
        const activity = await database.query('SELECT * FROM Activity WHERE ID = $1', [ID]);
        res.json(activity.rows);
    }

    async update(req, res) {
        const {
            ID,
            PersonID,
            Name,
            Description,
            Place,
        } = req.body;

        const activity = await database.query('UPDATE Activity SET PersonID = $1, Name = $2, Description = $3, Place = $4 WHERE ID = $5 RETURNING *'
            , [PersonID, Name, Description, Place, ID]);

        res.json(activity.rows[0]);
    }

    async delete(req, res) {
        const ID = req.params.id;
        const activity = await database.query('DELETE FROM Activity WHERE ID = $1', [ID]);
        res.json(activity.rows[0]);
    }
}

module.exports = new Activity();
