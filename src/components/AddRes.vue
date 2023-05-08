<template>
    <HeaderComp /><br><br>
    <h1><strong>Hi {{ user_name }}, Add Your Restaurant</strong></h1><br><br>
    <form class="addRes">
        <input type="text" placeholder="Enter Name" v-model="restaurant.name" name="name">
        <input type="text" placeholder="Enter Contact" v-model="restaurant.contact" name="contact">
        <input type="text" placeholder="Enter Address" v-model="restaurant.address" name="address">
        <button type="button" v-on:click="addRestaurant">Add Restaurant</button>
    </form>
  </template>
  
  <script>
  import axios from 'axios'
import HeaderComp from '../components/HeaderComp.vue'
  export default {
    name:'AddRes',
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
    components:{
      HeaderComp,
    },
    methods:{
        async addRestaurant(){
            const result = await axios.post("http://localhost:3000/restaurant/",{
                name:this.restaurant.name,
                contact:this.restaurant.contact,
                address:this.restaurant.address
            });
            if(result.status == 201){
                this.$router.push('/')
            }
        }
    },
    mounted(){
      let user = localStorage.getItem('user-info')
      this.user_name = JSON.parse(user).name
      if(!user){
        this.$router.push('/sign-up')
      }
    }
    
  }
  </script>
  
  <style>
  </style>
  