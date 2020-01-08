<template>
  <v-btn @click.stop="sendToApi" :loading="loading">
    Skicka alla lektioner till Canvas
    <template v-slot:loader>
      <span>Skickar lektioner... ({{publishedReservations}}/{{$store.state.reservations.length}})</span>
    </template>
  </v-btn>   
</template>

<script>
import axios from 'axios';

export default {
  name: 'calendar-importer',
  data: () => ({
    url: 'http://localhost:3000/calendar/',
    loading: false,
    publishedReservations: 0,
  }),
  watch: {
    publishedReservations: function() {
      if (this.publishedReservations == this.$store.state.reservations.length) {
        this.loading = false;
        this.publishedReservations = 0;
        this.$store.commit('snackbar', {
          state: true,
          timeout: 2000,
          text: 'Kalenderbokningar publicerade i Canvas',
          color: 'success',
        });
      }
    },
  },
  methods: {
    sendToApi() {
      this.loading = true;
      let api = axios.create({
        baseURL: this.url,
        withCredentials: true,
      });
      this.$store.state.reservations.forEach((reservation) => {
        api.post('event', {reservation}).then((result) => {
          console.log(result);
          this.publishedReservations ++;
        });
      });
    },
  },
};

</script>