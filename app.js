const app = require('./server')

app.use('/', require('./src/routes/usersRoutes'))

module.exports = app