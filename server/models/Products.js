module.exports=(sequelize,DataTypes)=>{
    const Products = sequelize.define('Products', {
        productID: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        productName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        productPrice: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        productStock: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });

    return Products;
}