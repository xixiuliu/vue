<template>
  <div>
    <input type="text" name="" v-model="myValue">
    <p v-css="{color:'red'}">hello world</p>
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
  directives: {
    css: {
      inserted: function(el,bind) {
        let styleObj = bind.value
        let arr = []
        for(let key in styleObj) {
          arr.push(key + ':' + styleObj[key])
        }
        arr = arr.join(';')
        el.style.cssText = arr
      }
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
