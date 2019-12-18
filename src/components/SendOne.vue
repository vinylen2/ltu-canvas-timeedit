<template>
  <v-btn @click.stop="sendToApi">Skicka lektion till Canvas</v-btn>   
</template>

<script>
import axios from 'axios';

export default {
  name: 'send-one',
  data: () => ({
    url: 'http://localhost:3000/calendar/',
  }),
  props: {
    reservation: Object,
  },
  methods: {
    sendToApi() {
      let api = axios.create({
        baseURL: this.url,
      });

      api.post('event', this.reservation).then((result) => {
        console.log(result);
      });

    },
  },
};

</script>