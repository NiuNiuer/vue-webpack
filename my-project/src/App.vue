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

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.nav {
  position: fixed;
  padding-top: 20px;
  padding-bottom: 10px;
  width: 100%;
  height: 40px;
  background-color: #fff;
  z-index: 10;
}
.nav-item {
  display: inline-block;
  width: 40%;
  line-height: 40px;
  background-color: gray;
  text-decoration: none;
  color: #fff;
  font-size: 30px;
}
.cont {
  position: absolute;
  top: 60px;
  width: 100%;
  color: lightblue;
}
</style>
