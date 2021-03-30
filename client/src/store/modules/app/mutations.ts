import { MutationTree } from 'vuex';
import { SET_USER, CLEAR_USER, SET_TOKEN, SET_ACTIVETABNAME, SET_LOADING } from './mutation-types';
import { AppState } from './state';

const mutations: MutationTree<AppState> = {
  [SET_USER](state, payload: User) {
    state.user = payload;
    // 数据持久化
    localStorage.setItem('user', JSON.stringify(payload));
  },

  [CLEAR_USER](state) {
    state.user = {
      userId: '',
      username: '',
      password: '',
      avatar: '',
      createTime: 0,
    };
    localStorage.setItem('user', '');
    localStorage.setItem('token', '');
  },

  [SET_TOKEN](state, payload) {
    state.token = payload;
    localStorage.setItem('token', payload);
  },

  [SET_ACTIVETABNAME](state, payload: 'message' | 'contacts') {
    state.activeTabName = payload;
  },
  [SET_LOADING](state, payload: boolean) {
    state.loading = payload;
  },
};

export default mutations;
