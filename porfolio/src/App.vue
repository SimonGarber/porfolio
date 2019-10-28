<template>
  <div id="app">
    <DesktopNav />
  </div>
</template>

<script>
import DesktopNav from "./components/DesktopNav.vue";

export default {
  components: {
    DesktopNav
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
