<template>
  <h3 class="home-button text-right" @click="$emit('homeButtonClicked', id)">
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

.home-button {
  cursor: pointer;
  font-family: $font-header;
}
.home-button:hover {
  text-shadow: 0 0 2px $shadow;
}
</style>