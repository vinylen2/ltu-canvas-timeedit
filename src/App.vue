<template>
  <v-app>
    <v-content>
      <frontpage></frontpage>
    </v-content>
  </v-app>
</template>

<script>
import Frontpage from './components/Frontpage';

export default {
  name: 'App',

  components: {
    Frontpage,
  },

  data: () => ({
    //
  }),
};
</script>
