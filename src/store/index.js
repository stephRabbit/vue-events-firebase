import Vue from 'vue';
import Vuex from 'vuex';
import { mutations } from './mutations';
import * as actions from './actions';

// Initialize Vuex
Vue.use(Vuex);

// Intial Data for application - Global store
const state = {
  user: {},
  events: []
};

// Export new instance of Vuex store passing state as param
export default new Vuex.Store({
  state,
  mutations,
  actions
});