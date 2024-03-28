module.exports = (sequelize, DataTypes) => {
    const Branch = sequelize.define('Branch', {
        branchID: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        branchName: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    return Branch;
}