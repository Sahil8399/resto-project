<template>
  <router-view />
</template>

<script>

export default {
  name: 'App',
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
body{
  padding:0;
  margin:0;
}
.register input, .login input, .addRes input{
    width: 600px;
    height: 80px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid skyblue;
  }
  .register button, .login button, .addRes button{
    width: 580px;
    height: 70px;
    border: 1px solid skyblue;
    color: white;
    background-color: skyblue;
    cursor: pointer;
  }
</style>
