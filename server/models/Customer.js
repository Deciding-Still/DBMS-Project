module.exports=(sequelize,DataTypes)=>{
    const Customer = sequelize.define('Customer', {
        customerID: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        customerName: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    return Customer;
}