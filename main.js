const app = require('./server')
const { db } = require('./server/db')

db.sync().then(function() {
  app.listen(8080, ()=> console.log('Server started on port 8080'))
})
