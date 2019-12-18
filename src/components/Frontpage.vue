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
