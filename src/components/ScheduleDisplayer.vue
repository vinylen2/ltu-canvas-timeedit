<template>
<v-container>
  <h2 class="ma-2">Schemavisare</h2>
  <h4 class="ma-2"></h4>
    <v-expansion-panels>
      <v-expansion-panel v-for="reservation in $store.state.reservations"
        :key="reservation.id">
        <v-expansion-panel-header>
          {{getDate(reservation.startdate)}}
          {{reservation.starttime}} - 
          {{reservation.endtime}}, {{reservation.title}}
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <lesson-form :reservation="reservation"></lesson-form>
        </v-expansion-panel-content>
        </v-expansion-panel>
    </v-expansion-panels>
</v-container>
</template>


<script>
import moment from 'moment';
import LessonForm from '@/components/LessonForm';

export default {
  name: 'schedule-displayer',
  components: {
    'lesson-form': LessonForm,
  },
  data: () => ({
    checkbox: false,
  }),
  methods: {
    getDate(date) {
      let momentDate = moment(date)
      return momentDate.format('dddd, D/MM')
    },
    formatDate(date) {
      let formattedDate = moment(date)
      return formattedDate.format('h:mm');
    },
  },
};
</script>