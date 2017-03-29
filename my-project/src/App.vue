<template>
  <div id="app">
    <div class="nav">
      <router-link class="nav-item" to="/home">Home</router-link>
      <router-link class="nav-item" to="/about">About</router-link>
    </div>
    <div class="cont">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.nav {
  float: left;
  width: 20%;
}
.nav-item {
  width: 100%;
  height: 30px;
  background-color: gray;
  margin-top: 10px;
}
.cont {
  float: right;
  width: 80%;
  color: lightblue;
}
</style>
