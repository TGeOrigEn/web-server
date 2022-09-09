const database = require('../database');

class Rank {
    async create(req, res) {
        const {
            PersonID,
            StartDate,
            EndDate,
            Degree,
            Name,
        } = req.body;

        const rank = await database.query('INSERT INTO Rank (PersonID, StartDate, EndDate, Degree, Name) values ($1, $2, $3, $4, $5) RETURNING *'
            , [PersonID, StartDate, EndDate, Degree, Name]);

        res.json(rank.rows[0]);
    }

    async get(req, res) {
        const ID = req.params.id;
        const rank = await database.query('SELECT * FROM Rank WHERE ID = $1', [ID]);
        res.json(rank.rows[0]);
    }

    async update(req, res) {
        const {
            ID,
            PersonID,
            StartDate,
            EndDate,
            Degree,
            Name,
        } = req.body;

        const rank = await database.query('UPDATE Rank SET PersonID = $1, StartDate = $2, EndDate = $3, Degree = $4, Name = $5 WHERE ID = $5 RETURNING *'
            , [PersonID, StartDate, EndDate, Degree, Name, ID]);

        res.json(rank.rows[0]);
    }

    async delete(req, res) {
        const ID = req.params.id;
        const rank = await database.query('DELETE FROM Rank WHERE ID = $1;', [ID]);
        res.json(rank.rows[0]);
    }
}

module.exports = new Rank();
