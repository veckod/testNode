module.exports = (sequelize, DataTypes)=>{

    return sequelize.define('Members', {

        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        picture: {
            type: DataTypes.STRING,   // les images sont de type string
            allowNull: true            // ici il sera toléré de ne pas ajouté d'image
        }
    },

    {
        // facultatif:
        timestamps: true,      // permet d'indiqué que l'on souhaite modifier le comportement par defaut proposé par sequelize
        createdAt: 'created',  // permet d'ajouté automatiquement la date de creation pour ce model
        updatedAt: false       // permet d'ajouté automatiquement une date de modification pour ce model (desactivé)
    })
}

