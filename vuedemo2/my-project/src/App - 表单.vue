<template>
  <div>
    <ul>
      <li v-for="item in list"> {{ item.name }} </li>
    </ul>
    <!-- <input type="text" name="" v-model.trim="myVal"> -->
    {{ myVal }}

    <!-- <input type="radio" name="" value="apple" v-model="myVal">
    <label>apple</label>
    <input type="radio" name="" value="apple2" v-model="myVal">
    <label>apple2</label>
    <input type="radio" name="" value="apple3" v-model="myVal">
    <label>apple3</label> -->

    <select v-model="myVal">
      <option v-for="item in options" :value="item.val"> {{ item.name }} </option>
    </select>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  data () {
    return {
      myVal: 1,
      options: [
        {
          name: 'apple',
          val: 0
        },
        {
          name: 'banana',
          val: 1
        }
      ],
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
