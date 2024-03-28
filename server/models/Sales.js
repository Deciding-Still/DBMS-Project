module.exports=(sequelize,DataTypes)=>{
    const Sales = sequelize.define('Sales', {
        salesID: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        pid : {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        cid : {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        price : {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });

    return Sales;
}