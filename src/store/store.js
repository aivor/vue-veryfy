import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "../main";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

let store = new Vuex.Store({
  plugins: [
    createPersistedState({
      storage: window.sessionStorage,
    }),
  ],
  state: {
    Token: null,
    login_msg: null,
  },
  getters: {
    tokens(state) {
      let token = state.Token;
      let login_m = state.login_msg;
      return {
        token,
        login_m,
      };
    },
  },
  actions: {
    login: ({ commit }, UserData) => {
      axios.post("https://api-staging.veryfy.net/auth/login", UserData).then(
        (res) => {
          console.log(res.headers.authorization);
          if (res.status == 204) {
            commit("user_token", { token: res.headers.authorization.slice(6) });
            router.push("/dashboard");
          }
        },
        (err) => {
          console.log(err.response.data.error);
          commit("user_login_msg", err.response.data.error);
        }
      );
    },
    logout: ({ commit }, token) => {
      axios({
        url: "https://api-staging.veryfy.net/auth/logout",
        headers: {
          Authorization: `Bearer ${token.token}`,
        },
        method: "DELETE",
      }).then((res) => {
        let { status } = res;
        if (status === 204) {
          commit("user_logout", null);
          window.localStorage.clear();
          router.push({ path: "/" });
        }
      });
    },
  },
  mutations: {
    user_token: (state, token) => {
      state.Token = token.token;
    },
    user_logout: (state, val) => {
      state.Token = val;
    },
    user_login_msg: (state, err_msg) => {
      state.login_msg = err_msg;
    },
  },
});

export default store;
