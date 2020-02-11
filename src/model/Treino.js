const Sequelize = require("sequelize");
const sequelize = require("../database/database");

const Treino = sequelize.define('treino', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    tipoTreino: {
        allowNull: false,
        type: Sequelize.STRING,
    },
    noSeries: {
        allowNull: false,
        type: Sequelize.INTEGER,
    },
    tempoDescanso: {
        allowNull: false,
        type: Sequelize.INTEGER,
    },
    horaInicio: {
        allowNull: true,
        type: Sequelize.INTEGER,
    },
    horaTermino: {
        allowNull: true,
        type: Sequelize.INTEGER,
    },
    dificuldade: {
        allowNull: true,
        type: Sequelize.INTEGER,
    },
    cansaco: {
        allowNull: true,
        type: Sequelize.INTEGER,
    },
});

module.exports = Treino;
