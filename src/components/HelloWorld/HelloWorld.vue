<template src="./HelloWorld.vue.html"></template>
<style src="./HelloWorld.vue.css"></style>

<script>
	import router from 'vue-router'

	export default {
	  	name: 'HelloWorld',
	  	data () {
	    	return {
	      		msg: 'Welcome to Your Vue.js App'
	    	}
	  	},
	  	methods:{
	  		gotoHi () {
	  			debugger;
	  			this.$router.push('/hi-demo')	  		
	  		}
	  	}
	}
</script>