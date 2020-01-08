<template>
  <v-btn @click.stop="sendToApi"
    :loading="loading">
    Skicka lektion till Canvas
    <template v-slot:loader>
      <span>Skickar lektion...</span>
    </template>
  </v-btn>   
</template>

<script>
import axios from 'axios';

export default {
  name: 'send-one',
  data: () => ({
    url: 'http://localhost:3000/calendar/',
    loading: false,
  }),
  props: {
    reservation: Object,
  },
  methods: {
    sendToApi() {
      this.loading = true;
      let api = axios.create({
        baseURL: this.url,
        withCredentials: true,
      });

      api.post('event', this.reservation).then((result) => {
        console.log(result);
        this.loading = false;
        this.$store.commit('snackbar', {
          state: true,
          timeout: 2000,
          text: 'Kalenderbokning publicerad i Canvas',
          color: 'success',
        });
      });
    },
  },
};

</script>