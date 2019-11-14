<template>
  <div class="mx-auto">
    <Card :message="current_message" v-on:next="next"></Card>
  </div>
</template>

<script lang="ts">
// import { shuffle } from 'lodash';
// import Vue from 'vue';
// import CardEntry from '@/assets/cards';

import Card from '@/components/Card.vue';
const consola = require('consola');

export default {
  components: { Card },
  props: {
    cards: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      current_card: 0,
      messages: this.cards,
      current_message: 'New Game'
    };
  },
  methods: {
    next() {
      consola.info('hi');
      if (this.$data.current_card >= this.$data.messages.length) {
        this.$data.current_card = 0;
      }
      this.$data.current_message = this.$data.messages[this.$data.current_card];
      this.$data.current_card++;
    }
  }
};
</script>
