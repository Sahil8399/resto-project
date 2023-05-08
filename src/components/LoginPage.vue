<template>
    <h1><strong>Login</strong></h1><br><br>
    <div class="login">
      <input type="email" v-model="email" placeholder="Enter Email">
      <input type="password" v-model="password" placeholder="Enter Password">
      <button v-on:click="login">Login</button>
      <p>Not a User ?
        <router-link to="/sign-up">Sign Up Here</router-link>
      </p>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  export default {
    name: 'LoginPage',
    data(){
        return{
            email:'',
            password:'',
        }
    },
    methods:{
       async login(){
            let result = await axios.get(
                `http://localhost:3000/users?email=${this.email}&password=${this.password}`
            )
            if(result.status==200 && result.data.length > 0){
                localStorage.setItem("user-info",JSON.stringify(result.data[0]))
                this.$router.push('/')
            }
        }
    },
    mounted(){
      let user = localStorage.getItem('user-info')
      if(user){
        this.$router.push('/')
      }
    }
  }
  </script>
  
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  </style>
  