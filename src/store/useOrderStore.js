import { defineStore } from "pinia";

export const useOrderStore = defineStore("orderStore", {
  state: () => ({
    orderItems: [],
  }),

  actions: {},

  getters: {},
});
