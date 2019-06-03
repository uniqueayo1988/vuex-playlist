import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  // strict: true, methods not referring to mutations will give error
  state: {
    products: [
      { name: "Banana Skin", price: 20 },
      { name: "Shiny Star", price: 40 },
      { name: "Green Shells", price: 60 },
      { name: "Red Shells", price: 80 }
    ]
  },
  // these are like computed properties
  getters: {
    saleProducts: state => {
      console.log(state.products)
      var saleProducts = state.products.map(product => {
        return {
          name: '**' + product.name + '**',
          price: product.price/2
        }
      })
      return saleProducts;
    }
  },
  // these are like methods
  mutations: {
    reducePrice: (state, payload) => {
      state.products.forEach(product => {
        product.price -= payload;
      })
    }
  },
  // async actions don't work well in mutations, hence the need for actions
  actions: {
    reducePrice: (context, payload) => { // context is like state
      setTimeout(() => {
        context.commit('reducePrice', payload)
      }, 2000);
    }
  }
});
