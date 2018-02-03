<template>
  <div class="content">
    <router-link to="/child">Go to child</router-link>
    <MyGreeting :name="appName" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import MyGreeting from '@/components/MyGreeting.vue'

export default {
  components: {
    MyGreeting
  },
  computed: {
    ...mapGetters(['appName'])
  }
}
</script>

<style scoped>

</style>
