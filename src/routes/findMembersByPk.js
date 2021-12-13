const {Member} = require('../db/sequelize')

module.exports = (app) =>{
    app.get('/members/:id', (req, res) =>{         //on ajoute le param :id dans l'url
        Member.findByPk(req.params.id)
            .then(members => {
                const message = "le membre a bien été recuperé"
                res.json({message, data:members})
            })
    })
}
