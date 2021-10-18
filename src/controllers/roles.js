const Role = require("../models/Role");
const Permission  = require("../models/Permission");

module.exports = {
    async store(req, res){

        const { name, description, permissions } = req.body;

        let role = await Role.findOne({
            where: {
                name
            }
        })

        if (role) {
            return res.status(400)
                .send({ error: "role já existe" })
        }

        console.log(permissions);

        const permission = await Permission.findByPk(permissions)

        role = await Role.create({
            name,
            description,
            permission
        });

        return res.status(201).send(role); 
      
    }
}