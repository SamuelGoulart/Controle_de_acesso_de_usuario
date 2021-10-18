const User = require("../models/User");
const bcrypt = require("bcryptjs");

module.exports = {
    async store(req, res){

        const { name, username, password } = req.body;

        let user = await User.findOne({
            where: {
                username: username
            }
        })

        if (user) {
            return res.status(400)
                .send({ error: "Este usuário já existe" })
        }

        const passwordHashed = bcrypt.hashSync(password);

        user = await User.create({
            name,
            username,
            password: passwordHashed,
        });

        return res.status(201).send(user);
    }
}