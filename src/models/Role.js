const { Model, DataTypes } = require("sequelize");

class Role extends Model {
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

    static associate(models) {
        // belongsTo = pertece a único registro
        // o endereço pertece a um único estudente

        // belongsToMany pertence a muitos
        // o role pertece a muitos permissions_roles

        // Relacionamento dos Alunos
        //Uma permissions pode ter diversas roles e uma role pode ter varias permissions
        this.hasMany(models.PermissionRole, { foreignKey: '  permission_id', as: 'permission' })
    }

}
module.exports = Role;