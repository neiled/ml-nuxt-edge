import db from '../db/db';
const Sequelize = require('sequelize');
const consola = require('consola');

const Model = Sequelize.Model;
class CardEntry extends Model {}
CardEntry.init(
  {
    message: {
      type: Sequelize.STRING,
      allowNull: false
    }
  },
  {
    sequelize: db,
    modelName: 'Card'
  }
);

export default {
  path: '/api/cards',
  async handler(req, res) {
    const cards = await CardEntry.findAll({ attributes: ['message'] });
    const result = { cards: cards.map((x) => x.message) };
    consola.info(result);

    res.end(JSON.stringify(result));
  }
};
