<template>
  <div id="app">
    <product-list-one></product-list-one>
    <ProductListTwo></ProductListTwo>
  </div>
</template>

<script>
import ProductListOne from './components/ProductListOne.vue';
import ProductListTwo from './components/ProductListTwo.vue';

export default {
  components: {
    'product-list-one': ProductListOne,
    ProductListTwo
  },
  name: 'app',
  data () {
    return {
      // products: []
    }
  }
}
</script>


<style>
  body {
    font-family: Ubuntu;
    color: #555;
  }
</style>
