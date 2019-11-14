<template>
  <b-container>
    <b-row>
      <CardDeck :cards="cards" />
    </b-row>
    <b-row>
      <b-card class="mx-auto">
        <b-link class="btn btn-primary" to="/AddCard">Add Card</b-link>
      </b-card>
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
    const url = process.env.URL || 'http://localhost:3000';
    const res = await axios.get(url + '/api/cards');
    consola.info(res.data.cards);
    return { cards: res.data.cards };
  }
};
</script>
