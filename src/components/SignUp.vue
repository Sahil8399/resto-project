<template>
    <h1><strong>Sign Up</strong></h1>
    <div class="register">
      <input type="text" v-model="name" placeholder="Enter Name">
      <input type="email" v-model="email" placeholder="Enter Email">
      <input type="password" v-model="password" placeholder="Enter Password">
      <button v-on:click="signUp">Sign Up</button>
      <p> Already a User ?
        <router-link to="/login">Login Here</router-link>
      </p>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  export default {
    name: 'SignUp',
    data(){
      return{
        name:'',
        email:'',
        password:''
      }
    },
    methods:{
     async signUp(){
        let result = await axios.post("http://localhost:3000/users",{
          name:this.name,
          email:this.email,
          password:this.password
        });
        if(result.status==201){
          localStorage.setItem("user-info",JSON.stringify(result.data))
          this.$router.push('/')
        }
      }
    },
    // mounted(){
    //   let user = localStorage.getItem('user-info')
    //   if(user){
    //     this.$router.push('/')
    //   }
    // }
    
  }
  </script>
   
  <style>
    </style>
  