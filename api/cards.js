import express from 'express';
import db from '../db/db';
const Sequelize = require('sequelize');
const consola = require('consola');
const app = express();
app.use(express.json());

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
app.get('/', async (req, res) => {
  const cards = await CardEntry.findAll({ attributes: ['message'] });
  const result = { cards: cards.map((x) => x.message) };
  consola.info(result);

  res.end(JSON.stringify(result));
});
app.post('/', async (req, res) => {
  consola.info(req.body.message);
  await CardEntry.create({
    message: req.body.message
  });
  res.end();
});

export default {
  path: '/api/cards',
  handler: app
};
