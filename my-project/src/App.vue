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
  padding: 20px;
}
.nav {
  width: 100%;
  height: 40px;
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
  margin-top: 20px;
  width: 100%;
  color: lightblue;
}
</style>
