<template>
  <p>
    Hello, \{{name}}
  </p>
</template>

<style scoped>

</style>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      
    }
  }
}
</script>
