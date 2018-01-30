<template>
  <div class="content">
    <MyGreeting name="Vue.js" />
  </div>
</template>

<script>
import MyGreeting from '@/components/MyGreeting.vue'
import Stores from '@/stores/Stores'

export default {
  components: {
    MyGreeting
  },
  data () {
    return {
      Stores
    }
  }
}
</script>

<style scoped>

</style>
