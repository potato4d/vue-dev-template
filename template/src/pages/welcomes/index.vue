<template lang="html">
  <div class="content">
    <greeting name="Vue.js"></greeting>
  </div>
</template>

<style scoped>

</style>

<script>
import Greeting from '@/components/Greeting.vue'
import Stores from '@/stores/Stores'

export default {
  components: {
    Greeting
  },
  data () {
    return {
      Stores
    }
  }
}
</script>
