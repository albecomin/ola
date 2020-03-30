<template>
  <div class="container custom-navbar mb-3">
    <div class="row d-flex justify-content-between mt-2">
      <router-link class="brand clickable" to="/">Aleksandra Ewa Nowak</router-link>
      <!-- <nav> 
        <router-link to="/">Home</router-link>
      </nav>  -->
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'CustomNavbar',
  props: {
  },
  methods: {
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

@import "../scss/variables.scss";

.brand {
  cursor: pointer;
  font-family: $font-header;
  color: $primary;
}
</style>