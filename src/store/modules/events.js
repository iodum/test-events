import Vue from 'vue'
import axios from "axios"

const state = {
  eventList: [],
	eventsLoading: false,
};

const getters = {
	eventList: (state) => state.eventList,
	eventsLoading: (state) => state.eventsLoading,
}

const actions = {
  getEventPage ({ commit }, page) {
		commit('SET_EVENTS_LOADING', true);

		axios.get('/', {
			data: {
				page: page
			}
		})
		.then((response) => {
			commit('ADD_EVENTS', response.data);
		})
		.catch((error) => {
      Vue.notify({
        type: 'error',
        title: 'Ошибка',
        text: error.response.data.message,
      });
		})
		.then(() => {
			commit('SET_EVENTS_LOADING', false);
		});
  }
}

const mutations = {
  ADD_EVENTS(state, events) {
    state.eventList = [
			...state.eventList,
			...events
		]
  },
	SET_EVENTS_LOADING(state, status) {
		state.eventsLoading = status;
	},
}

export default {
  state,
  getters,
  actions,
  mutations
}
