<template>
  <div class="hello">
      <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
	name: 'hello',
	data() {
	  return {
	  	msg: 'i am red apple'
	  }
	}
}
</script>

<style scoped>

h1{font-size: 20px;}
</style>
