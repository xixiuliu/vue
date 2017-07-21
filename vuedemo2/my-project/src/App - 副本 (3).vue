<template>
  <div>
    <input type="text" name="" v-model="myValue">
    <ul>
      <li v-for="item in list"> {{ item.name }} </li>
    </ul>
    <button @click="changeList">change</button>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  data () {
    return {
      myValue: '',
      list: [
        {
          name: 'apple',
          price: 34
        },
        {
          name: 'banana',
          price: 56
        }
      ]
      
    }
  },
  watch :{
    myValue: function(val,oldVal) {
      console.log(val,oldVal);
    },
    list: function() {
      this.tellUser();
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
    },
    tellUser() {
      alert('list change')
    }
  }
}
</script>

<style>

html{
  height: 100%;
}

</style>
