<template>
  <v-container>
      <v-row>
        <v-col cols="12">
          <h1>Schemahanterare</h1>
        </v-col>
      </v-row>
      <v-row>
        <schedule-fetcher></schedule-fetcher>
      </v-row>
      <v-row>
        <schedule-displayer></schedule-displayer>
      </v-row>
      <v-row>
        <v-col>
          <calendar-importer></calendar-importer>
        </v-col>
      </v-row>
      <v-snackbar
        v-model="$store.state.snackbar.state"
        :color="$store.state.snackbar.color"
        :timeout="$store.state.snackbar.timeout">
        {{ $store.state.snackbar.text }}
      </v-snackbar>
  </v-container>
</template>

<script>
import ScheduleFetcher from '@/components/ScheduleFetcher';
import ScheduleDisplayer from '@/components/ScheduleDisplayer';
import CalendarImporter from '@/components/CalendarImporter';


export default {
  name: 'frontpage',
  components: {
    'schedule-fetcher': ScheduleFetcher,
    'schedule-displayer': ScheduleDisplayer,
    'calendar-importer': CalendarImporter,
  },
  data: () => ({
  }),
};
</script>
