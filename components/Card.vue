<template>
  <b-card
    title="Who is most likely to..."
    img-src="https://picsum.photos/300/150/"
    img-alt="Image"
    img-top
    tag="article"
    class="mx-auto"
  >
    <b-card-text>...{{ message }}</b-card-text>

    <b-button v-on:click="$emit('next')" href="#" variant="primary">Next</b-button>
  </b-card>
</template>

<script lang="ts">
import Vue from 'vue';

const Component = Vue.extend({
  // type inference enabled
  props: {
    message: {
      type: String,
      default: 'Default message'
    }
  }
});

export default Component;
</script>
