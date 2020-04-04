<template>

  <h3 class="home-button clickable text-right mt-4 mb-4" @click="$emit('homeButtonClicked', id)">
    <transition enter-active-class="animated fade">
      <img 
        class="svg-icon"
        :src="content"
        height="100%" viewBox="0 0 10 10"/>
    </transition>
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
  height: 30px;
  font-size: 30px;
}
.svg-icon:hover {
  opacity: 0.8;
}

</style>