<template>
  <v-btn @click.stop="sendToApi">Skicka alla lektioner till Canvas</v-btn>   
</template>

<script>
import axios from 'axios';

export default {
  name: 'calendar-importer',
  data: () => ({
    url: 'http://localhost:3000/calendar/',
  }),
  methods: {
    sendToApi() {
      let api = axios.create({
        baseURL: this.url,
      });

      let postData = this.$store.state.reservations;

      api.post('events', {postData}).then((result) => {
        console.log(result);
      });

    },
  },
};

</script>