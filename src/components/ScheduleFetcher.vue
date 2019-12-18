<template>
<v-container>
  <v-row>
    <v-col>
      <v-text-field
        v-model="url"
        label="Webadress från TimeEdit"
        required
      ></v-text-field>
    </v-col>
    <v-col>
      <v-btn @click.stop="fetchSchedule">Hämta</v-btn>   
    </v-col>
  </v-row>
</v-container>
</template>


<script>
import axios from 'axios';
export default {
  name: 'schedule-fecther',
  data: () => ({
    url: '',
    scheduleData: '',
    columns: [],
    reservations: [],
  }),
  computed: {
    formattedScheduleUrl() {
      return this.url.replace("html", "json");
    },
  },
  methods: {
    fetchSchedule() {
      let api = axios.create({
        baseURL: this.formattedScheduleUrl,
      });

      api.get().then((result) => {
        this.$store.commit('reservations', result.data.reservations);
        this.$store.commit('columns', result.data.columnheaders);
      });
    },
  },
};
</script>
