const express = require('express')
const app = express()
const sequelize = require('./src/db/sequelize')

 sequelize.initDb()

require('./src/routes/findAllMembers')(app)
require('./src/routes/findMembersByPk')(app)
require('./src/routes/createMember')(app)

app.listen(3000, ()=>{
    console.log('http://localhost:3000')
})



