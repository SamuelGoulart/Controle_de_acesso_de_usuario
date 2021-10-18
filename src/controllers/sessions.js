const User = require("../models/User");
const jwt = require("jsonwebtoken");
const auth = require("../config/auth");
const bcrypt = require("bcryptjs");

module.exports = {
	async store(req, res) {

		const { username, password } = req.body;

		const user = await User.findOne({
			where: {
				username: username
			}
		});
		
		if (!user || !bcrypt.compareSync(password, user.password)) {
			return res.status(403)
				.send({ error: "Usuário e/ou senha inválidos" });
		}

		//gerar um token
		const token = jwt.sign(
			{ userId: user.id },
			auth.secret,
			{
				expiresIn: "1d"
			});

		//enviar resposta
		res.send({
			user: {
				email: user.email,
				name: user.name
			},
			token
		})
	}
}