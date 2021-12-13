const {Sequelize, DataTypes} = require('sequelize')
const MembersModel = require('../models/members')
const allMembers = require('./allMembers')
//const mysql = require('mysql')
const sequelize = new Sequelize(
    'magasin',  // nom bdd
    'root',     // username bdd
    'root',     //mdp bdd
    {
        host: 'localhost',
        port: '8889',
        dialect: 'mysql',    //nom du driver
    }
)
const Member = MembersModel(sequelize,DataTypes)

const initDb = () =>{
    return sequelize.sync({force: true})
        .then(_ =>{
            console.log('tous les membres" ont bien été synchronisé a la bdd')

            allMembers.map(allMembers =>{
                Member.create({
                name: allMembers.name,
                age: allMembers.age,
                picture: allMembers.picture
                }).then (allMembers => console.log(allMembers.toJSON()))
            })
            console.log('la bdd a bien été initialisée')

        })
}

module.exports = {
    initDb,Member
}

