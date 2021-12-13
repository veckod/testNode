const {Member} = require('../db/sequelize') // on importe le model membre

module.exports = (app)=>{ // on exporte ce module

    app.get('/members', (req,res)=>{  // notre route
        Member.findAll()  // findAll() = methode qui permet de recuperer toutes les infos des membres
            .then(members => {
                const message = " la liste dess membres a bien été recuperée"
                res.json({message, data:members})
            })
    })
}



