const database = require('../database');

class Career {
    async create(req, res) {
        const {
            PersonID,
            StartDate,
            EndDate,
            Post,
            Place,
        } = req.body;

        const career = await database.query('INSERT INTO Career (PersonID, StartDate, EndDate, Post, Place) values ($1, $2, $3, $4, $5) RETURNING *'
            , [PersonID, StartDate, EndDate, Post, Place]);

        res.json(career.rows[0]);
    }

    async getAll(req, res) {
        const ID = req.params.id;
        const career = await database.query('SELECT * FROM Career WHERE PersonID = $1', [ID]);
        res.json(career.rows[0]);
    }

    async update(req, res) {
        const {
            ID,
            PersonID,
            StartDate,
            EndDate,
            Post,
            Place,
        } = req.body;

        const career = await database.query('UPDATE Career SET PersonID = $1, StartDate = $2, EndDate = $3, Post = $4, Place = $5 WHERE PersonID = $6 RETURNING *'
            , [PersonID, StartDate, EndDate, Post, Place, ID]);

        res.json(career.rows[0]);
    }

    async delete(req, res) {
        const ID = req.params.id;
        const career = await database.query('DELETE FROM Career WHERE ID = $1', [ID]);
        res.json(career.rows[0]);
    }
}

module.exports = new Career();
