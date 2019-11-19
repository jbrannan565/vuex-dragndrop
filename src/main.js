import Vue from 'vue';
import App from './App.vue';

import BootstrapVue from 'bootstrap-vue';
import Vuex from 'vuex';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    cardGroups: [
      {
        id: 1,
        cards: []
      },
      {
        id: 2,
        cards: []
      },
      {
        id: 3,
        cards: []
      },
    ],
    nextCardId: 3,
    nextGroupId: 3
  },
  mutations: {
    deletecard(state, payload) {
      let groupIndex = state.cardGroups.findIndex(group => group.id == payload.groupId);
      let cardIndex = state.cardGroups[groupIndex].cards.findIndex(card => card.id == payload.cardId);
      state.cardGroups[groupIndex].cards.splice(cardIndex, 1);
    },
  }
})

export default store;

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app')