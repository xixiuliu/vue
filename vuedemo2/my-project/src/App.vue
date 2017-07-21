<template>
  <div id="app">
      <img src="./assets/logo.png">
      <router-view></router-view>
      <router-link :to="{path:'apple'}">to apple</router-link>
      <router-link :to="{path:'banana'}">to banana</router-link>
      <router-link :to="{path:'apple/red'}">to apple red</router-link>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {

  }
}
</script>

<style>
#app{
  text-align: center;
}
html{
  height: 100%;
}

</style>
