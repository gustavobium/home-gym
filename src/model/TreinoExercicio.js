const Sequelize = require("sequelize");
const sequelize = require("../database/database");

const TreinoExercico = sequelize.define('treinoexercicio', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    serie_1: {
        allowNull: false,
        type: Sequelize.INTEGER,
    },
    tempo_1: {
        allowNull: false,
        type: Sequelize.INTEGER,
    },
    dificuldade_1: {
        allowNull: false,
        type: Sequelize.INTEGER,
    },
    serie_2: {
        allowNull: true,
        type: Sequelize.INTEGER,
    },
    tempo_2: {
        allowNull: true,
        type: Sequelize.INTEGER,
    },
    dificuldade_2: {
        allowNull: true,
        type: Sequelize.INTEGER,
    },
    serie_3: {
        allowNull: true,
        type: Sequelize.INTEGER,
    },
    tempo_3: {
        allowNull: true,
        type: Sequelize.INTEGER,
    },
    dificuldade_3: {
        allowNull: true,
        type: Sequelize.INTEGER,
    },
    serie_4: {
        allowNull: true,
        type: Sequelize.INTEGER,
    },
    tempo_4: {
        allowNull: true,
        type: Sequelize.INTEGER,
    },
    dificuldade_4: {
        allowNull: true,
        type: Sequelize.INTEGER,
    },
    serie_5: {
        allowNull: true,
        type: Sequelize.INTEGER,
    },
    tempo_5: {
        allowNull: true,
        type: Sequelize.INTEGER,
    },
    dificuldade_5: {
        allowNull: true,
        type: Sequelize.INTEGER,
    },
    serie_6: {
        allowNull: true,
        type: Sequelize.INTEGER,
    },
    tempo_6: {
        allowNull: true,
        type: Sequelize.INTEGER,
    },
    dificuldade_6: {
        allowNull: true,
        type: Sequelize.INTEGER,
    },
    serie_7: {
        allowNull: true,
        type: Sequelize.INTEGER,
    },
    tempo_7: {
        allowNull: true,
        type: Sequelize.INTEGER,
    },
    dificuldade_7: {
        allowNull: true,
        type: Sequelize.INTEGER,
    },
    serie_8: {
        allowNull: true,
        type: Sequelize.INTEGER,
    },
    tempo_8: {
        allowNull: true,
        type: Sequelize.INTEGER,
    },
    dificuldade_8: {
        allowNull: true,
        type: Sequelize.INTEGER,
    },
    serie_9: {
        allowNull: true,
        type: Sequelize.INTEGER,
    },
    tempo_9: {
        allowNull: true,
        type: Sequelize.INTEGER,
    },
    dificuldade_9: {
        allowNull: true,
        type: Sequelize.INTEGER,
    },
    serie_10: {
        allowNull: true,
        type: Sequelize.INTEGER,
    },
    tempo_10: {
        allowNull: true,
        type: Sequelize.INTEGER,
    },
    dificuldade_10: {
        allowNull: true,
        type: Sequelize.INTEGER,
    },
});

module.exports = TreinoExercico;