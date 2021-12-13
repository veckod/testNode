const {Member} = require('../db/sequelize')

module.exports = (app)=>{

    app.post('/members', (req,res)=>{
        Member.create(req.body)
            .then(members => {
                const message = 'le membre ${req.body.name} a bien été ajouté'
                res.json({message, data: members})
            })
    })
}

