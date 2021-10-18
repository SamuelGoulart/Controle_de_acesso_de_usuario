const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const User = require("../models/User");
const Permissions = require("../models/Permission");
const Role = require("../models/Role");
const PermissionRole = require("../models/PermissionRole");

const connection = 
    new Sequelize(dbConfig.url, dbConfig.config);

User.init(connection);              
Permissions.init(connection);
Role.init(connection);
PermissionRole.init(connection);


Role.associate(connection.models);


module.exports = connection;
