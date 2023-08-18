const User = function (sequelize, DataTypes) {
    const model = sequelize.define('userInfo',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoincrement: true
            },
            userid: {
                type: DataTypes.STRING(15),
            },
            name: {
                type: DataTypes.STRING(15),
            },
            pw: {
                type: DataTypes.STRING(500),
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