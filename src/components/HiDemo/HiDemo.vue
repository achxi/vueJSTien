<template src="./HiDemo.vue.html"></template>
<!-- <style src="./HiDemo.vue.css"></style> -->

<script>
	import Vue from 'vue'

	Vue.component('fullName',{
		template: "<div style='font-size:25px; color: green; '>Tieu Thuy Tien</div>"
	})

	export default {
	  	name: 'Hi',
	  	data () {
	    	return {
	      		message: 'Welcome to Your Vue.js App1'
	    	}
	  	},
	  	methods: {
	  		reverseMessage() {
		  		this.message = this.message.split(' ').reverse().join(' ')
		  	}
	 	}
	 	
	}
</script>      
