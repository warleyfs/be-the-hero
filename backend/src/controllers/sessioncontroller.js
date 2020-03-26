const connection = require('../database/connection');

module.exports = {
    async create(request, response) {
        const { id } = request.body;
        const name = await connection('ongs').where('id', id).select('name').first();

        if (!name) {
            return response.status(400).json({ error: 'No ONG found with this id!' });
        }
        return response.json(name);
    }
};