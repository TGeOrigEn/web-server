const database = require('../database');

class Person {
    async create(req, res) {
        const {
            Surname,
            Name,
            Patronymic,
            DateBirth,
            Religion,
            Origin,
            LevelEducation,
            EducationalInstitution,
            LocationEducationalInstitution,
            Property,
            Awards,
            Salary,
            MaritalStatus,
            Other
        } = req.body;

        const person = await database.query('INSERT INTO Person'
            + ' (Surname, Name, Patronymic, DateBirth, Religion, Origin, LevelEducation, EducationalInstitution, LocationEducationalInstitution, Property, Awards, Salary, MaritalStatus, Other) '
            + 'values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) RETURNING *;'
            , [
                Surname,
                Name,
                Patronymic,
                DateBirth,
                Religion,
                Origin,
                LevelEducation,
                EducationalInstitution,
                LocationEducationalInstitution,
                Property,
                Awards,
                Salary,
                MaritalStatus,
                Other
            ]);

        res.json(person.rows[0]);
    }

    async getAll(_req, res) {
        const persons = await database.query('SELECT * FROM Person;');
        res.json(persons.rows);
    }

    async get(req, res) {
        const ID = req.params.id;
        const person = await database.query('SELECT * FROM Person WHERE ID = $1', [ID]);
        res.json(person.rows[0]);
    }

    async update(req, res) {
        const {
            ID,
            Surname,
            Name,
            Patronymic,
            DateBirth,
            Religion,
            Origin,
            LevelEducation,
            EducationalInstitution,
            LocationEducationalInstitution,
            Property,
            Awards,
            Salary,
            MaritalStatus,
            Other
        } = req.body;

        const person = await database.query('UPDATE Person SET Surname = $1, Name = $2, Patronymic = $3, DateBirth = $4, Religion = $5, Origin = $6, LevelEducation = $7, EducationalInstitution = $8, LocationEducationalInstitution = $9, Property = $10, Awards = $11, Salary = $12, MaritalStatus = $13, Other = $14 WHERE ID = $15 RETURNING *'
            , [
                Surname,
                Name,
                Patronymic,
                DateBirth,
                Religion,
                Origin,
                LevelEducation,
                EducationalInstitution,
                LocationEducationalInstitution,
                Property,
                Awards,
                Salary,
                MaritalStatus,
                Other,
                ID
            ]);

        res.json(person.rows[0]);
    }

    async delete(req, res) {
        const ID = req.params.id;
        const person = await database.query('DELETE FROM Person WHERE ID = $1', [ID]);
        res.json(person.rows[0]);
    }
}

module.exports = new Person();
