<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {

}
</script>

<style>
/* global CSS */
html,
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}

a,
a:visited {
  color: #45A5E5;
}
</style>

<style scoped>
#app {
  width: 100%;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
}
</style>
