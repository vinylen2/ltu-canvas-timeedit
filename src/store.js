import Vue from 'vue';
import Vuex from 'vuex';
import 'es6-promise/auto';
import createCalendarEvent from '@/constructors/calendarEvent';
import _ from 'lodash';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    reservations: [],
    columns: [],
    reservationsToApi: [],
  },
  mutations: {
    reservationsToApi: (state, data) => {
      data.forEach(reservation => state.reservationsToApi.push(reservation));
    },
    removeReservationToApi: (state, data) => {
      data.forEach(reservation => _.remove(state.reservationsToApi, {id: reservation.id}));
    },
    reservations: (state, data) => {
      const newData = data.map(reservation => createCalendarEvent(reservation));
      state.reservations = newData;
    },
    columns: (state, data) => {
      state.columns = data;
    },
  },
  getters: {

  },
})