<template>
  <b-container>
    <b-row>
      <CardDeck />
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
  async asyncData() {
    consola.info('fetch');
    const res = await axios.get('http://localhost:3000/api/cards');
    consola.info(res.data);
  }
};
</script>
