const database = require('../database');

class Person {
    async create(req, res) {
        const {
            surname,
            name,
            patronymic,
            date_birth,
            religion,
            origin,
            level_education,
            educational_institution,
            location_educational_institution,
            property,
            awards,
            salary,
            marital_status,
            other
        } = req.body;

        const person = await database.query('INSERT INTO Person'
            + ' (surname, name, patronymic, date_birth, religion, origin, level_education, educational_institution, location_educational_institution, property, awards, salary, marital_status, other) '
            + 'values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) RETURNING *'
            , [
                surname,
                name,
                patronymic,
                date_birth,
                religion,
                origin,
                level_education,
                educational_institution,
                location_educational_institution,
                property,
                awards,
                salary,
                marital_status,
                other
            ]);

        res.json(person.rows[0]);
    }

    async getAll(_req, res) {
        const persons = await database.query('SELECT * FROM person');
        res.json(persons.rows);
    }

    async get(req, res) {
        const id = req.params.id;
        const person = await database.query('SELECT * FROM person WHERE id = $1', [id]);
        res.json(person.rows[0]);
    }

    async update(req, res) {
        const {
            id,
            surname,
            name,
            patronymic,
            date_birth,
            religion,
            origin,
            level_education,
            educational_institution,
            location_educational_institution,
            property,
            awards,
            salary,
            marital_status,
            other
        } = req.body;

        const person = await database.query('UPDATE person SET surname = $1, name = $2, patronymic = $3, date_birth = $4, religion = $5, origin = $6, level_education = $7, educational_institution = $8, location_educational_institution = $9, property = $10, awards = $11, salary = $12, marital_status = $13, other = $14 WHERE id = $15 RETURNING *'
            , [
                surname,
                name,
                patronymic,
                date_birth,
                religion,
                origin,
                level_education,
                educational_institution,
                location_educational_institution,
                property,
                awards,
                salary,
                marital_status,
                other,
                id
            ]);

        res.json(person.rows[0]);
    }

    async delete(req, res) {
        const id = req.params.id;
        const person = await database.query('DELETE FROM person WHERE id = $1', [id]);
        res.json(person.rows[0]);
    }
}

module.exports = new Person();
