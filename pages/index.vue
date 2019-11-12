<template>
  <b-container>
    <b-row>
      <CardDeck />
    </b-row>
  </b-container>
</template>

<script>
import CardDeck from '@/components/CardDeck.vue';

export default {
  name: 'Home',
  components: {
    CardDeck
  }
};
</script>
