const { Model, DataTypes } = require("sequelize");

class PermissionRole extends Model {
    static init(connection){
        super.init(
            {
                permission_id: DataTypes.INTEGER,
                role_id: DataTypes.INTEGER,
            },
            {
                sequelize: connection,
            }
        );
    }
}
module.exports = PermissionRole;