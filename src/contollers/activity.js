const database = require('../database');

class Activity {
    async create(req, res) {
        const {
            person_id,
            name,
            description,
            place,
        } = req.body;

        const activity = await database.query('INSERT INTO activity (person_id, name, description, place) values ($1, $2, $3, $4) RETURNING *'
            , [person_id, name, description, place]);

        res.json(activity.rows[0]);
    }

    async getAll(req, res) {
        const activity = await database.query('SELECT * FROM activity');
        res.json(activity.rows);
    }

    async update(req, res) {
        const {
            id,
            person_id,
            name,
            description,
            place,
        } = req.body;

        const activity = await database.query('UPDATE activity SET person_id = $1, name = $2, description = $3, place = $4 WHERE id = $5 RETURNING *'
            , [person_id, name, description, place, id]);

        res.json(activity.rows[0]);
    }

    async delete(req, res) {
        const id = req.params.id;
        const activity = await database.query('DELETE FROM activity WHERE id = $1', [id]);
        res.json(activity.rows[0]);
    }
}

module.exports = new Activity();
