<template>
  <b-container>
    <b-form @submit="onSubmit">
      <b-form-input
        id="input-message"
        v-model="form.message"
        type="text"
        required
        placeholder="Who is most likely to..."
      ></b-form-input>

      <b-button type="submit" variant="primary">Add</b-button>
    </b-form>
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
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
      const url = process.env.URL || 'http://localhost:3000';
      this.$axios.post(url + '/api/cards', { message: this.form.message });
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.message = '';
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>
