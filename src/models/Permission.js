const { Model, DataTypes } = require("sequelize");

class Permissions extends Model {
    static init(connection){
        super.init(
            {
                name: DataTypes.STRING,
                description: DataTypes.STRING,
            },
            {
                sequelize: connection,
            }
        );
    }
}
module.exports = Permissions;