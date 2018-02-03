<template>
  <div id="app">
    <div id="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
/* global style */
html,
body {
  margin: 0;
  padding: 0;
}
</style>

<style scoped>
#app{
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
}

#content{
  width: 100%;
  height: 100%;

  margin: 0;
  padding: 0;

  display: flex;
  flex-direction: column;
}
</style>
