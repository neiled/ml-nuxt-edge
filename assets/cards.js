import db from '@/middleware/db';

async function getCards() {
  const cards = ['wake up on the couch', 'wake up on the side of the road'];

  const result = await db.query('SELECT * FROM cards;');
  console.log(result);

  return cards;
}
export default getCards;
