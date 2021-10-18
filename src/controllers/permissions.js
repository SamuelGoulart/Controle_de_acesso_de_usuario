const Permissions = require("../models/Permission");

module.exports = {
    async store(req, res){

        const { name, description } = req.body;

        let permissions = await Permissions.findByPk({
            where: {
                name
            }
        })

        if (permissions) {
            return res.status(400)
                .send({ error: "Permissão já existe" })
        }

        const permission = await Permissions.create({
            name,
            description,
        });

        return res.status(201).send(permission); 
      
    }
}