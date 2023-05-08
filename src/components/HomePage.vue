<template>
    <HeaderComp /><br><br>
    <center>
    <h1><strong>Hi {{ name }}, Welcome To Home Page</strong></h1><br><br>
    <table border="1px">
      <tr class="table-info text-center">
        <td>Id</td>
        <td>Name</td>
        <td>Address</td>
        <td>Contact</td>
        <td>Action</td>
      </tr>
      <tr class="table-warning text-center" v-for="item in restaurants" :key="item.id">
        <td class="table-warning text-center">{{ item.id }}</td>
        <td class="table-warning text-center">{{ item.name }}</td>
        <td class="table-warning text-center">{{ item.address }}</td>
        <td class="table-warning text-center">{{ item.contact }}</td>
        <td class="table-warning text-center"><router-link :to="'/update/'+item.id">Update</router-link> /
        <a v-on:click="deleteRestaurant(item.id)" href="#">Delete</a>
        </td>
      </tr>
    </table>
  </center>
  </template>
  
  <script>
  import HeaderComp from '../components/HeaderComp.vue'
  import axios from "axios"
  export default {
    name:'HomePage',
    data(){
      return{
        name:'',
        restaurants:[],
      }
    },
    methods:{
      async deleteRestaurant(id){
        let result = await axios.delete("http://localhost:3000/restaurant/"+id);
        if(result.status == 200){
          this.loadData()
        }
      },
      async loadData(){
        let user = localStorage.getItem('user-info')
        this.name = JSON.parse(user).name
        if(!user){
          this.$router.push('/sign-up')
        }
        let result = await axios.get("http://localhost:3000/restaurant");
        this.restaurants = result.data
      }
    },
    components:{
      HeaderComp,
    },
    mounted(){
      this.loadData()
    }
    
  }
  </script>
  
  <style>
  td{
    width:300px;
    height:40px;
  }
  </style>
  