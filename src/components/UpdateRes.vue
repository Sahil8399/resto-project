<template>
    <HeaderComp /><br><br>
    <h1><strong>Hi {{ user_name }},Update Your Restaurant</strong></h1><br><br>
    <form class="addRes">
        <input type="text" placeholder="Enter Name" v-model="restaurant.name" name="name">
        <input type="text" placeholder="Enter Contact" v-model="restaurant.contact" name="contact">
        <input type="text" placeholder="Enter Address" v-model="restaurant.address" name="address">
        <button type="button" v-on:click="updateRestaurant">Update Restaurant</button>
    </form>
  </template>
  
  <script>
import axios from 'axios'
import HeaderComp from '../components/HeaderComp.vue'
  export default {
    name:'UpdateRes',
    components:{
      HeaderComp,
    },
    data(){
        return{
            user_name:'',
            restaurant:{
                name:'',
                contact:'',
                address:'',
            }
        }
    },
    methods:{
        async updateRestaurant(){
            const result = await axios.put("http://localhost:3000/restaurant/"+this.$route.params.id,{
                name:this.restaurant.name,
                contact:this.restaurant.contact,
                address:this.restaurant.address
            });
            if(result.status == 200){
                this.$router.push('/')
            }
        }
    },
    async mounted(){
      let user = localStorage.getItem('user-info')
      this.user_name = JSON.parse(user).name
      if(!user){
        this.$router.push('/sign-up')
      }
      const result = await axios.get("http://localhost:3000/restaurant/"+this.$route.params.id)
      this.restaurant = result.data
    }
    
  }
  </script>
  
  <style>
  </style>
  