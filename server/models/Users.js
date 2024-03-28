module.exports=(sequelize,DataTypes)=>{
    const Users = sequelize.define('Users', {
        username: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        Name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false
        },
        bid: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });

    return Users;
}