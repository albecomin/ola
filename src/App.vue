<template>
  <div id="app" class="container">
    <custom-navbar v-if="$route.name !== 'home'"/>
    <router-view></router-view>
  </div>
</template>

<script>
import CustomNavbar from "./components/CustomNavbar"

export default {
  name: 'App',
  components: {
    CustomNavbar
  },
}
</script>

<style lang="scss">

@import "./scss/variables.scss";


.unselectable {
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;    
}
.no-gutters {
  margin-right: 0;
  margin-left: 0;

  > .col,
  > [class*="col-"] {
    padding-right: 0;
    padding-left: 0;
  }
}

.clickable {
  cursor: pointer;
  font-family: $font-header;
}
.clickable:hover {
  text-shadow: 0 0 2px $shadow;
}

.page__header {
  font-family: $font-header;
  font-weight: bold;
  color: $primary;
}
.page__body {
  font-family: $font-body;
  color: $primary;
}

body {
  background: $background;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $primary;

  // margin-top: 60px;
}
</style>
