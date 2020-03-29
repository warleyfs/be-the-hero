const knex = require('knex');
const conf = require('../../knexfile');
const env = process.env.NODE_ENV;
const connection = knex(env === 'test' ? conf.test : conf.development);

module.exports = connection;