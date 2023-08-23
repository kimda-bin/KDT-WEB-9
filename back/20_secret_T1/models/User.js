const User = function (sequelize, DataTypes) {
    const model = sequelize.define('userInfo',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true,
            },
            userid: {
                type: DataTypes.STRING(15),
                allowNull: false,
            },
            name: {
                type: DataTypes.STRING(15),
                allowNull: false,
            },
            pw: {
                type: DataTypes.STRING(255),
                allowNull: false,
            }
        },
        {
            tableName: 'userInfo',
            freezeTableName: true,
            timestamps: false
        });
    return model
}

module.exports = User