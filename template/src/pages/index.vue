<template>
  <div class="content">
    <router-link to="/child">Go to child</router-link>
    <AppGreeting :name="appName" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import AppGreeting from '~/components/AppGreeting.vue'

export default {
  components: {
    AppGreeting
  },
  computed: {
    ...mapGetters(['appName'])
  }
}
</script>

<style scoped>

</style>
