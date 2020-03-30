<template>
  <h3 class="home-button clickable text-right" @click="$emit('homeButtonClicked', id)">
    {{ content }}
  </h3>
</template>

<script>
export default {
  name: 'HomeButton',
  props: {
    id: String,
    content: String
  },
  methods: {
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

@import "../scss/variables.scss";

</style>