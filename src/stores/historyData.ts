import { defineStore } from 'pinia';

export const historyDataStore = defineStore('historyDataStore', {
  state: (): IState => {
    return {
      history: [],
    };
  },
  getters: {
    recentlyAdded: (state: IState) => state.history.reverse(),
  },
  actions: {
    setHistory(payload: string) {
      this.history.push(payload);
    },
  },
});

interface IState {
  history: string[];
}
