const database = require('../database');

class Career {
    async create(req, res) {
        const {
            person_id,
            start_date,
            end_date,
            post,
            place,
        } = req.body;

        const career = await database.query('INSERT INTO career (person_id, start_date, end_date, post, place) values ($1, $2, $3, $4, $5) RETURNING *'
            , [person_id, start_date, end_date, post, place]);

        res.json(career.rows[0]);
    }

    async getAll(req, res) {
        const career = await database.query('SELECT * FROM career');
        res.json(career.rows);
    }

    async update(req, res) {
        const {
            id,
            person_id,
            start_date,
            end_date,
            post,
            place,
        } = req.body;

        const career = await database.query('UPDATE career SET person_id = $1, start_date = $2, end_date = $3, post = $4, place = $5 WHERE id = $6 RETURNING *'
            , [person_id, start_date, end_date, post, place, id]);

        res.json(career.rows[0]);
    }

    async delete(req, res) {
        const id = req.params.id;
        const career = await database.query('DELETE FROM career WHERE id = $1 RETURNING *', [id]);
        res.json(career.rows[0]);
    }
}

module.exports = new Career();
