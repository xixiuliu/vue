<template>
  <div>
    <ul>
      <li v-for="item in list"> {{ item.name + '-' + item.price }} </li>
    </ul>
    <a v-if="isPartA">partA</a>
    <a v-else>no data</a>
    <!-- <a v-show="!isPartA">partB</a> -->
    <button v-on:click="addItem">addItem</button>
    <button v-on:click="toggle">toggle</button>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  data () {
    return {
      hello: '<span><img>world</span>',
      link: 'http://www.baidu.com',
      className: {
        'red-font': true,
        'blue-font': true
      },
      isPartA: true,
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
  methods: {
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
