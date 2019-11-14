<template>
  <b-container>
    <b-row>
      <CardDeck :cards="cards" />
    </b-row>
  </b-container>
</template>

<script>
import axios from 'axios';
import CardDeck from '@/components/CardDeck.vue';
const consola = require('consola');

export default {
  name: 'Home',
  components: {
    CardDeck
  },
  data() {
    return {};
  },
  async asyncData() {
    consola.info('fetch');
    const res = await axios.get('http://localhost:3000/api/cards');
    consola.info(res.data.cards);
    return { cards: res.data.cards };
  }
};
</script>
