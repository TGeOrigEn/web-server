const database = require('../database');

class Rank {
    async create(req, res) {
        const {
            person_id,
            start_date,
            end_date,
            degree,
            name,
        } = req.body;

        const rank = await database.query('INSERT INTO rank (person_id, start_date, end_date, degree, name) values ($1, $2, $3, $4, $5) RETURNING *'
            , [person_id, start_date, end_date, degree, name]);

        res.json(rank.rows[0]);
    }

    async getAll(req, res) {
        const rank = await database.query('SELECT * FROM rank');
        res.json(rank.rows);
    }

    async update(req, res) {
        const {
            id,
            person_id,
            start_date,
            end_date,
            degree,
            name,
        } = req.body;

        const rank = await database.query('UPDATE rank SET person_id = $1, start_date = $2, end_date = $3, degree = $4, name = $5 WHERE id = $6 RETURNING *'
            , [person_id, start_date, end_date, degree, name, ID]);

        res.json(rank.rows[0]);
    }

    async delete(req, res) {
        const id = req.params.id;
        const rank = await database.query('DELETE FROM rank WHERE id = $1 RETURNING *', [id]);
        res.json(rank.rows[0]);
    }
}

module.exports = new Rank();
