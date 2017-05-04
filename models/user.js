module.exports = function (sequelize, type) {
    return sequelize.define('users', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoincrement: true
        },
        first_name: {
            type: type.STRING,
            allowNull: false
        },
        middle_name: {
            type: type.STRING,
            allowNull: false
        },
        surname: {
            type: type.STRING,
            allowNull: false
        },
        login: {
            type: type.STRING,
            allowNull: false
        },
        password: {
            type: type.STRING,
            allowNull: false
        }
    }, {
        timestamps: false,
        underscored: true
    });
};
