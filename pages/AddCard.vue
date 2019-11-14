<template>
  <b-container>
    <b-jumbotron>
      <h1>Add a new card</h1>
      <h4>Make it a good one...</h4>
    </b-jumbotron>
    <b-row>
      <b-col>
        <b-form @submit="onSubmit" inline>
          <b-form-input
            id="input-message"
            v-model="form.message"
            type="text"
            required
            placeholder="Who is most likely to..."
          ></b-form-input>

          <b-button type="submit" variant="primary">Add</b-button>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      form: {
        message: ''
      }
    };
  },
  methods: {
    async onSubmit(evt) {
      evt.preventDefault();
      const url = process.env.URL || 'http://localhost:3000';
      await this.$axios.post(url + '/api/cards', {
        message: this.form.message
      });
      this.$router.push('/');
    }
  }
};
</script>
