<template>
<v-container>
  <v-row>
    <v-col>
      <v-text-field
        v-model="reservation.title"
        label="Titel">
      </v-text-field>
    </v-col>
    <v-col>
      <v-text-field
        v-model="reservation.location_name"
        label="Lokal">
      </v-text-field>
    </v-col>
    <v-col>
      <v-text-field
        v-model="reservation.location_address"
        label="Adress">
      </v-text-field>
    </v-col>
  </v-row>
  <v-row>
    <v-col>
      <v-text-field
        v-model="reservation.startdate"
        label="Startdatum">
      </v-text-field>
    </v-col>
    <v-col>
      <v-text-field
        v-model="reservation.starttime"
        label="Starttid">
      </v-text-field>
    </v-col>
    <v-col>
      <v-text-field
        v-model="reservation.enddate"
        label="Slutdatum">
      </v-text-field>
    </v-col>
    <v-col>
      <v-text-field
        v-model="reservation.endtime"
        label="Sluttid">
      </v-text-field>
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="12">
      <v-textarea
        outlined
        v-model="reservation.description"
        label="Beskrivning">
      </v-textarea>
    </v-col>
  </v-row>
  <v-row>
    <v-spacer></v-spacer>
    <send-one :reservation="reservation"></send-one>
  </v-row>
</v-container>
</template>

<script>
import moment from 'moment';
import SendOne from '@/components/SendOne'

export default {
  name: 'lesson-form',
  props: {
    reservation: Object,
  },
  data: () => ({
  }),
  components: {
    'send-one': SendOne,
  },
  methods: {
    getDate(date) {
      let momentDate = moment(date);
      return momentDate.format('YYYY-MM-DD [klockan: ] h:mm');
    },
    fixDate(date) {
      return date.replace("Z", " ");
    }
  },
};

</script>