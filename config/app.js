require('dotenv').config()
const dbHost = process.env.DBHOST || 'mongodb://localhost:27017/recruito'

module.exports = {
  name: 'recruito',
  title: 'Recruito',
  http: {
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 80
  },
  author: 'und3fined-v01d',
  version: '1.0.0',
  db: {
    connectionUri: dbHost,
    params: {},
    collections: ['moment', 'user', 'feeling', 'ask']
  }
}
