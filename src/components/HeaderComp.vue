<template>
    <div class="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/add">Add Restaurant</router-link>
      <a v-on:click="logout" href="#">Logout</a>
    </div>
  </template>
  
  <script>

  
  export default {
    name: 'HeaderComp',
    methods:{
      logout(){
        localStorage.clear()
        this.$router.push('/login')
      }
    }
  }
  </script>
  
  <style>
  .nav{
    background-color:#333;
    overflow: hidden;
  }
  .nav a{
    float: left;
    color: #f2f2f2;
    text-align: center;
    text-decoration: none;
    padding: 10px 14px;
    font-size: 25px;
    margin-right:40px;
    margin-left:10px

  }
  </style>
  