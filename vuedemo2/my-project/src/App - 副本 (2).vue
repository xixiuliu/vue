<template>
  <div>
    <ul>
      <li v-for="item in list"> {{ item.name }} </li>
    </ul>
    <input type="text" name="" v-model="myValue">
    {{ getMyValueWithOutNum() }}
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  data () {
    return {
      myValue: '',
      
    }
  },
  computed: {
    myValueWithOutNum () {
      return this.myValue.replace(/\d/g, '')
    }
  },
  methods: {
    getMyValueWithOutNum () {
      return this.myValue.replace(/\d/g, '')
    },
    addItem() {
      Vue.set(this.list,1,{
        name: 'wopaa',
        price: 2222
      })
    },
    toggle() {
      this.isPartA = !this.isPartA
    }
  }
}
</script>

<style>

html{
  height: 100%;
}

</style>
