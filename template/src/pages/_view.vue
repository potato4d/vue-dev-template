<template>
  <div class="main-view">
    <TheHeader />
    <div class="main-content">
      <router-view />
    </div>
  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader.vue'

export default {
  components: {
    TheHeader
  }
}
</script>

<style scoped>
.main-view {
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

.main-content {
  padding: 16px;
  flex: 1;
  width: 1280px;
  margin: 0 auto;
}
</style>
