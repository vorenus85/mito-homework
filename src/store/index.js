import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    mainDeckIsWin: false,
    bonusDeckIsWin: false,
    mainDeckPrize: 0,
    bonusDeckPrize: 0,
  },
  getters: {
    actualMainDeckIsWin(state) {
      return state.mainDeckIsWin;
    },
    actualBonusDeckIsWin(state) {
      return state.bonusDeckIsWin;
    },
    actualMainDeckPrize(state) {
      return state.mainDeckPrize;
    },
    actualBonusDeckPrize(state) {
      return state.bonusDeckPrize;
    },
  },
  mutations: {
    setMainDeckIsWin(state, payload) {
      state.mainDeckIsWin = payload;
    },
    setBonusDeckIsWin(state, payload) {
      state.bonusDeckIsWin = payload;
    },
    setMainDeckPrize(state, payload) {
      state.mainDeckPrize = payload;
    },
    setBonusDeckPrize(state, payload) {
      state.bonusDeckPrize = payload;
    },
  },
  actions: {
    setMainDeckIsWin(context, payload) {
      context.commit("setMainDeckIsWin", payload);
    },
    setBonusDeckIsWin(context, payload) {
      context.commit("setBonusDeckIsWin", payload);
    },
    setMainDeckPrize(context, payload) {
      context.commit("setMainDeckPrize", payload);
    },
    setBonusDeckPrize(context, payload) {
      context.commit("setBonusDeckPrize", payload);
    },
  },
  modules: {},
});
